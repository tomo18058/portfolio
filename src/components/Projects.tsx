// // Projects.tsx - 制作物紹介セクション
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
                <h3 className="mb-2 text-xl font-semibold text-center">{proj.title}</h3>

                {/* プロジェクトの説明文 */}
                <p className="text-sm text-center">{proj.description}</p>
            </a>
            ))}
        </div>
        </div>
    );
}
