import Header from "../components/Header";
import SoundCardProps from "../components/SoundCard";
import PresetCard from "../components/PresetCard";

const sounds = [
    { name: "Bass", file: "/src/assets/sounds/bass.wav" },
    { name: "Drums", file: "/src/assets/sounds/drums.wav" },
    { name: "Drums 2", file: "/src/assets/sounds/drums2.wav" },
    { name: "Flute", file: "/src/assets/sounds/flute.wav" },
    { name: "Flute 2", file: "/src/assets/sounds/flute2.wav" },
    { name: "Whistle", file: "/src/assets/sounds/whistle.wav" },
]

const presets = [
    {
        name: "Chill Vibes",
        description: "Relaxing flute and soft bass",
        sounds: [
            { name: "Flute", file: "/src/assets/sounds/flute.wav", volume: 50 },
            { name: "Bass", file: "/src/assets/sounds/bass.wav", volume: 20 },
        ],
    },
    {
        name: "Energetic Beat",
        description: "High-energy drums and bass combo",
        sounds: [
            { name: "Drums", file: "/src/assets/sounds/drums.wav", volume: 60 },
            { name: "Bass", file: "/src/assets/sounds/bass.wav", volume: 50 },
            { name: "Whistle", file: "/src/assets/sounds/whistle.wav", volume: 30 },
        ],
    },
    {
        name: "Ambient Flow",
        description: "Soft flutes with gentle percussion",
        sounds: [
            { name: "Flute", file: "/src/assets/sounds/flute.wav", volume: 40 },
            { name: "Flute 2", file: "/src/assets/sounds/flute2.wav", volume: 35 },
            { name: "Drums 2", file: "/src/assets/sounds/drums2.wav", volume: 25 },
        ],
    },
    {
        name: "Full Mix",
        description: "All elements combined perfectly",
        sounds: [
            { name: "Bass", file: "/src/assets/sounds/bass.wav", volume: 35 },
            { name: "Drums", file: "/src/assets/sounds/drums.wav", volume: 45 },
            { name: "Flute", file: "/src/assets/sounds/flute.wav", volume: 40 },
            { name: "Whistle", file: "/src/assets/sounds/whistle.wav", volume: 25 },
        ],
    },
];

export default function Home() {
    return (
        <>
        <Header />
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950 p-8 transition-all duration-300">
                <section className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-pink-500 dark:from-blue-500 dark:to-purple-600 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Pre-Defined Beats</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                        Explore professionally crafted sound combinations. Click to play a perfectly balanced mix.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        {presets.map((preset, i) => (
                            <PresetCard key={i} {...preset} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-pink-500 dark:from-blue-500 dark:to-purple-600 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Individual Sounds</h2>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">
                        Create your own unique mix by controlling each sound independently.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        {sounds.map((s, i) => (
                            <SoundCardProps key={i} {...s} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}