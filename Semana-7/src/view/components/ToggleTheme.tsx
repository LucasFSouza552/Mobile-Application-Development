import { IconButton } from "react-native-paper";
import { useTheme } from "../../Contexts/ThemeContext";

export default function ToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
            <IconButton
                icon={theme === "dark" ? "white-balance-sunny" : "moon-waning-crescent"}
                onPress={toggleTheme}
            />
    );
}