import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme } from "react-native-paper";

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "#FBFBFB",
        secondary: "#C4D9FF",
        primary: "#C5BAFF"
    },
};

export const darkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: "#1B3C53",
        secondary: "#456882",
        primary: "#234C6A",
    },
};
