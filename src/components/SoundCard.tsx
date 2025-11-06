import { useEffect, useState } from "react";
import { Howl } from "howler";
import { Pause, Play } from "lucide-react";

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
        <>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md flex flex-col items-center w-60">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{name}</h3>
                <button onClick={togglePlay} className="my-2 text-accent">
                    {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full"
                />
            </div>
        </>
    )
}