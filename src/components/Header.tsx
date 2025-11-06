import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
    const { darkMode, toggleTheme } = useTheme();
    return (
        <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 sticky top-0 p-4 shadow-lg z-50 backdrop-blur-sm transition-all duration-300">
            <div className="flex items-center justify-between relative max-w-7xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 dark:from-blue-500 dark:to-purple-600 rounded-full animate-pulse shadow-lg"></div>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600 dark:from-blue-400 dark:to-purple-400 text-3xl font-bold tracking-tight">
                        SoundBeat Mixer
                    </h1>
                </div>

                <button
                    onClick={toggleTheme}
                    className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                    aria-label="Toggle theme"
                >
                    {darkMode ? (
                        <Moon className="text-slate-700 dark:text-yellow-300 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    ) : (
                        <Sun className="text-orange-500 dark:text-yellow-300 w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    )}
                </button>
            </div>
        </div>
    )
}