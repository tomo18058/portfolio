import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizPage() {
    const navigate = useNavigate();

    const [selected, setSelected] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);

    // 例題：RustとJavaScriptの違い
    const question = "Rustの特徴として正しいのは？";
    const options = [
        "ガベージコレクションで自動管理",
        "所有権と借用でメモリを安全に管理",
        "スクリプト言語で動的型付け",
        "ブラウザ上だけで動作する"
    ];
    const correct = "所有権と借用でメモリを安全に管理";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-black">
        <h1 className="mb-6 text-3xl font-bold">Rust vs JavaScript クイズ</h1>

        <p className="mb-4 text-lg">{question}</p>

        <div className="flex flex-col w-full max-w-md gap-3">
            {options.map((opt) => (
            <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`p-3 rounded border hover:bg-cyan-600 transition ${
                selected === opt ? "bg-cyan-500" : "bg-gray-800"
                }`}
            >
                {opt}
            </button>
            ))}
        </div>

        {selected && (
            <div className="mt-6">
            <button
                className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
                onClick={() => setShowResult(true)}
            >
                回答する
            </button>
            </div>
        )}

        {showResult && (
            <div className="mt-8 text-xl">
            {selected === correct ? (
                <p className="text-green-400">正解！さすがです！</p>
            ) : (
                <p className="text-red-400">残念、不正解！</p>
            )}

            <button
                className="px-4 py-2 mt-4 bg-gray-700 rounded hover:bg-gray-800"
                onClick={() => navigate("/")}
            >
                トップに戻る
            </button>
            </div>
        )}
        </div>
    );
}
