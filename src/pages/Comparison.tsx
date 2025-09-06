export default function Comparison(){
    return(
        <div className="items-center text-red ">
                <h1 className="mb-6 text-4xl font-bold text-center text-cyan-400">Sort Performance Comparison</h1>
                <p className="px-4 mb-4 text-lg text-center">
                    以下は Rust + WebAssembly を使用したソートアルゴリズムの比較デモです。
                </p>
                

            {/* <div className="w-full max-w-6xl mx-auto overflow-hidden border shadow-lg aspect-video rounded-xl border-cyan-500 h-[700px]"> */}
            <div className="w-full max-w-6xl mx-auto overflow-hidden border shadow-lg  rounded-xl border-cyan-500 h-[700px]">

                <iframe
                    src="/portfolio/wasm-demo/rust_bq/www/index.html"
                    title="Rust WASM Sort Demo"
                    className="w-full h-full">        
                </iframe>


                
            </div>


        </div>
    );
}