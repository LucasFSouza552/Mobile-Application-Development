import React, { createContext, useState, useContext, ReactNode, useRef } from "react";
import { Animated, Appearance, Easing } from "react-native";
import { PaperProvider } from "react-native-paper";
import { darkTheme, lightTheme } from "../theme/themes";

type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const colorScheme = Appearance.getColorScheme() as Theme;
    const [theme, setTheme] = useState<Theme>(colorScheme || "light");

    const fadeAnim = useRef(new Animated.Value(1)).current;

    const toggleTheme = () => {

        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 250,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start(() => {
            setTheme((prev) => (prev === "light" ? "dark" : "light"));
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 250,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }).start();
        });
    };


    const paperTheme = theme === "dark" ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <PaperProvider theme={paperTheme}>
                <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
                    {children}
                </Animated.View>
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme deve ser usado dentro de ThemeProvider");
    return context;
};
