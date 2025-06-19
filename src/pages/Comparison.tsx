// import React from "react";

export default function Comparison(){
    return(
        <div className="flex flex-col items-center min-h-screen py-10 text-white bg-black">
            <h1 className="mb-6 text-4xl font-bold text-cyan-400">Sort Performance Comparison</h1>
            <p className="px-4 mb-4 text-lg text-center">
                以下は Rust + WebAssembly を使用したソートアルゴリズムの比較デモです。
            </p>

            <div className="w-full max-w-6xl overflow-hidden border shadow-lg aspect-video rounded-2xl border-cyan-500">
                <iframe
                    src="/portfolio/wasm-demo/rust_bq/www/index.html"
                    title="Rust WASM Sort Demo"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                />
            </div>
            <p className="mt-6 text-sm text-gray-400">
                Rust + WASM + Vite + GitHub Pages 構成で動作しています。
            </p>
        </div>
    );
}