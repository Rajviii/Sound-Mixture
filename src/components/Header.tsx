import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const { darkMode, toggleTheme } = useTheme();
    return (
        <>
            <div className="bg-yellow-50 dark:bg-blue-950 sticky top-0 p-3">
                <div className="flex items-center justify-between relative">
                    <p className="absolute left-1/2 -translate-x-1/2 text-black dark:text-yellow-200 text-3xl font-semibold">
                        Sound-Beat Mixer
                    </p>

                    <button
                        onClick={toggleTheme}
                        className="ml-auto px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded-xl"
                    >
                        {darkMode ? (
                            <Moon className="text-gray-800 dark:text-yellow-300 w-6 h-6" />
                        ) : (
                            <Sun className="text-gray-800 dark:text-yellow-300 w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}