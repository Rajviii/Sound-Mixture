import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Music, Pause, Play } from "lucide-react";

interface SoundMix {
    name: string;
    file: string;
    volume: number;
}

interface PresetCardProps {
    name: string;
    description: string;
    sounds: SoundMix[];
}

export default function PresetCard({ name, description, sounds }: PresetCardProps) {
    const [howls, setHowls] = useState<Howl[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newHowls = sounds.map(
            (s) =>
                new Howl({
                    src: [s.file],
                    loop: true,
                    volume: s.volume / 100,
                })
        );
        setHowls(newHowls);

        return () => {
            newHowls.forEach((h) => h.unload());
            setHowls([]);
        };
    }, [sounds]);

    const togglePlay = () => {
        if (isPlaying) {
            howls.forEach((h) => h.pause());
        } else {
            howls.forEach((h) => h.play());
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="bg-gradient-to-br from-orange-100 to-pink-100 dark:from-slate-800 dark:to-blue-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center w-80 border-2 border-orange-300 dark:border-blue-600">
            <div className="flex items-center gap-2 mb-2">
                <Music className="text-orange-600 dark:text-blue-400 w-6 h-6" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{name}</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-center">{description}</p>

            <button
                onClick={togglePlay}
                className={`my-3 p-5 rounded-full transition-all duration-300 ${
                    isPlaying
                        ? 'bg-gradient-to-r from-orange-500 to-pink-600 dark:from-blue-500 dark:to-purple-600 shadow-xl animate-pulse scale-110'
                        : 'bg-gradient-to-r from-orange-400 to-pink-500 dark:from-blue-400 dark:to-purple-500 hover:from-orange-500 hover:to-pink-600 dark:hover:from-blue-500 dark:hover:to-purple-600'
                }`}
            >
                {isPlaying ? (
                    <Pause className="text-white w-10 h-10" />
                ) : (
                    <Play className="text-white w-10 h-10 ml-1" />
                )}
            </button>

            <div className="mt-4 w-full bg-white dark:bg-gray-700 rounded-lg p-3 space-y-1">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">Mix Details:</p>
                {sounds.map((s, i) => (
                    <div key={i} className="flex justify-between text-sm">
                        <span className="text-gray-700 dark:text-gray-300">{s.name}</span>
                        <span className="font-semibold text-orange-600 dark:text-blue-400">{s.volume}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
