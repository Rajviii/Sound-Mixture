import Header from "../components/Header";
import SoundCardProps from "../components/SoundCard";

const sounds = [
    { name: "Bass", file: "/src/assets/sounds/bass.wav" },
    { name: "Drums", file: "/src/assets/sounds/drums.wav" },
    { name: "Drums 2", file: "/src/assets/sounds/drums2.wav" },
    { name: "Flute", file: "/src/assets/sounds/flute.wav" },
    { name: "Flute 2", file: "/src/assets/sounds/flute2.wav" },
    { name: "Whistle", file: "/src/assets/sounds/whistle.wav" },
]
export default function Home() {
    return (
        <>  
        <Header />
            <div className="min-h-screen from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 transition-all">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {sounds.map((s, i) => (
                        <SoundCardProps key={i} {...s} />
                    ))}
                </div>
            </div>
        </>
    )
}