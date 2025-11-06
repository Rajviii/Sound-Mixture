import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Pause, Play, Volume2 } from "lucide-react";

interface SoundCardProps {
    name: string,
    file: string
}

export default function SoundCardProps({ name, file }: SoundCardProps) {
    const [sound, setSound] = useState<Howl | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        const s = new Howl({ src: [file], loop: true, volume });
        setSound(s);
        return () => {
            s.unload();
            setSound(null);
        };
    }, [file]);

    useEffect(() => {
        sound?.volume(volume);
    }, [volume]);

    const togglePlay = () => {
        if (!sound) return;
        if (isPlaying) sound.pause();
        else sound.play();
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center w-64 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">{name}</h3>
            <button
                onClick={togglePlay}
                className={`my-3 p-4 rounded-full transition-all duration-300 ${
                    isPlaying
                        ? 'bg-gradient-to-r from-pink-500 to-orange-500 dark:from-blue-500 dark:to-purple-600 shadow-lg animate-pulse'
                        : 'bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 hover:from-pink-400 hover:to-orange-400 dark:hover:from-blue-400 dark:hover:to-purple-500'
                }`}
            >
                {isPlaying ? (
                    <Pause className="text-white w-8 h-8" />
                ) : (
                    <Play className="text-white w-8 h-8 ml-1" />
                )}
            </button>
            <div className="w-full mt-4 flex items-center gap-2">
                <Volume2 className="text-gray-600 dark:text-gray-400 w-5 h-5" />
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-10">{Math.round(volume * 100)}%</span>
            </div>
        </div>
    )
}