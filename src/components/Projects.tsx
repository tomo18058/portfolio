// // Projects.tsx - 制作物紹介セクション

// export default function Projects() {
//     return (
//         <section className="px-6 py-16 text-white bg-gray-950">
//         <h2 className="mb-12 text-4xl font-bold text-center text-cyan-400">
//             Projects
//         </h2>

//         <div className="max-w-5xl mx-auto space-y-12">
//             {/* プロジェクト1: Rust × WASM ソートデモ */}
//             <div className="p-6 bg-gray-900 shadow-lg rounded-2xl">
//             <h3 className="mb-2 text-2xl font-semibold text-pink-400">
//                 Rust × WASM ソート比較デモ
//             </h3>
//             <p className="mb-4 text-gray-300">
//                 RustとJavaScriptによるバブルソートとクイックソートの性能比較デモ。WASMを活用し、ブラウザ上で高速な処理を実現。
//             </p>
//             <iframe
//                 src={`${import.meta.env.BASE_URL}wasm-demo/rust_bq/www/index.html`}
//                 title="Rust WASM Demo"
//                 className="w-full h-[500px] border rounded-xl shadow-md"
//                 // sandbox=""
//             ></iframe>
//             </div>
//         </div>
//         </section>
//     );
// }

// import React from 'react';

// 表示したいプロジェクトの情報をオブジェクトの配列として定義
const projects = [
    {
        title: 'Rust×WASM ソート比較',
        description: 'Rustで実装したバブルソートとクイックソートをWASMで比較実行するデモ。',
        link: '/portfolio/comparison', // Comparisonページへのリンク
    },
];

export default function Projects() {
    return (
        <div className="px-4 py-12 text-white sm:px-8">
        {/* セクションタイトル */}
        <h2 className="mb-8 text-3xl font-bold text-center">Projects</h2>

        {/* プロジェクトカードを並べるグリッド（スマホ1列、タブレット以上2列） */}
        <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((proj, i) => (
            <a
                key={i}
                href={proj.link}
                className="block p-6 transition border rounded-xl border-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
                {/* プロジェクトのタイトル */}
                <h3 className="mb-2 text-xl font-semibold">{proj.title}</h3>

                {/* プロジェクトの説明文 */}
                <p className="text-sm">{proj.description}</p>
            </a>
            ))}
        </div>
        </div>
    );
}
