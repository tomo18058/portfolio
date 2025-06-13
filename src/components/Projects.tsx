// Projects.tsx - 制作物紹介セクション

export default function Projects() {
    return (
        <section className="py-16 px-6 bg-gray-950 text-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
            Projects
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
            {/* プロジェクト1: Rust × WASM ソートデモ */}
            <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-2 text-pink-400">
                Rust × WASM ソート比較デモ
            </h3>
            <p className="text-gray-300 mb-4">
                RustとJavaScriptによるバブルソートとクイックソートの性能比較デモ。WASMを活用し、ブラウザ上で高速な処理を実現。
            </p>
            <iframe
                src="/wasm-demo/index.html"
                title="Rust WASM Demo"
                className="w-full h-[500px] border rounded-xl shadow-md"
            ></iframe>
            </div>
        </div>
        </section>
    );
}
