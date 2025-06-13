// Projects.tsx - 制作物紹介セクション

export default function Projects() {
    return (
        <section className="px-6 py-16 text-white bg-gray-950">
        <h2 className="mb-12 text-4xl font-bold text-center text-cyan-400">
            Projects
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
            {/* プロジェクト1: Rust × WASM ソートデモ */}
            <div className="p-6 bg-gray-900 shadow-lg rounded-2xl">
            <h3 className="mb-2 text-2xl font-semibold text-pink-400">
                Rust × WASM ソート比較デモ
            </h3>
            <p className="mb-4 text-gray-300">
                RustとJavaScriptによるバブルソートとクイックソートの性能比較デモ。WASMを活用し、ブラウザ上で高速な処理を実現。
            </p>
            <iframe
                src="/portfolio/wasm-demo/index.html"
                title="Rust WASM Demo"
                className="w-full h-[500px] border rounded-xl shadow-md"
            ></iframe>
            </div>
        </div>
        </section>
    );
}
