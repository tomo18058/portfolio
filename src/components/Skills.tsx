// Skills.tsx - 使用技術を紹介するセクション

export default function Skills() {
    const skills = [
        { name: "Rust", emoji: "🦀", color: "text-orange-600", },
        { name: "React", emoji: "⚛️", color: "text-cyan-400" },
        { name: "TypeScript", emoji: "📘", color: "text-blue-500" },
        { name: "Tailwind CSS", emoji: "🎨", color: "text-teal-400" },
        { name: "WASM", emoji: "⚙️", color: "text-gray-300" },
        { name: "Firebase", emoji: "☁️", color: "text-yellow-400" },
    ];

    return (
        <section className="px-6 py-16 text-white bg-gray-950">
        <h2 className="mb-12 text-4xl font-bold text-center text-cyan-300">
            Skills
        </h2>
        <div className="grid max-w-5xl grid-cols-2 gap-8 mx-auto text-center sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill) => (
            <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 transition-transform bg-gray-900 shadow-lg rounded-xl hover:scale-105"
            >
                <span className="mb-2 text-3xl">{skill.emoji}</span>
                <span className="font-semibold text-blue-500">{skill.name}</span>
            </div>
            ))}
        </div>
        </section>
    );
}
