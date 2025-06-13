import "animate.css";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

export default function Hero() {
    const { ref: nameRef, inView: nameInView } = useInView({ triggerOnce: true });
    const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
    const { ref: courseRef, inView: courseInView } = useInView({ triggerOnce: true });
    const { ref: descRef, inView: descInView } = useInView({ triggerOnce: true });
    const { ref: linkRef, inView: linkInView } = useInView({ triggerOnce: true });

    return (
        <section
        className="relative px-6 py-20 text-white bg-center bg-no-repeat bg-cover"

        >
        {/* オーバーレイ（暗めにしてテキスト見やすく） */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-50" />

        {/* Hero本体 */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1
            ref={nameRef}
            className={`mt-6 text-4xl font-extrabold text-cyan-300 drop-shadow-md ${
                nameInView ? "animate__animated animate__fadeInUp" : "opacity-0"
            }`}
            >
            ECCコンピュータ専門学校
            </h1>

            <h2 ref={courseRef} className={`mt-2 text-lg text-white 
            ${courseInView ? "animate__animated animate__fadeInUp animate__delay-1s" : "opacity-0"}`}>
            高度情報処理研究学科 IT開発エキスパートコース
            </h2>

            <div
            className={`mt-6 flex items-center justify-center gap-4 ${
                imgInView ? "animate__animated animate__fadeInUp animate__delay-2s" : "opacity-0"
            }`}
            >
            <h3 className="text-xl font-semibold text-white">原知輝</h3>
            <div
                ref={imgRef}
                className="overflow-hidden border-4 rounded-full shadow-lg border-cyan-400"
                style={{ width: 100, height: 100 }}
            >
                <img
                src="images/Image_12.jpeg"
                alt="プロフィール画像"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                }}
                />
            </div>
            </div>

            <p
            ref={descRef}
            className={`max-w-xl mx-auto mt-6 text-base leading-relaxed text-white ${
                descInView ? "animate__animated animate__fadeInUp animate__delay-3s" : "opacity-0"
            }`}
            >
            専門学校でWeb開発やAI技術を学びながら、RustとReactを用いた高速なWebアプリケーション開発に挑戦中。
            技術力・発想力・実行力を兼ね備えた“実装寄りエンジニア”を目指しています。
            </p>

            <div
            ref={linkRef}
            className={`flex justify-center gap-6 mt-8 ${
                linkInView ? "animate__animated animate__fadeInUp animate__delay-4s" : "opacity-0"
            }`}
            >
            <a
                href="https://github.com/tomo18058"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white transition-transform duration-300 bg-gray-900 rounded-full shadow-lg hover:scale-110"
            >
                <FaGithub size={28} />
            </a>

            <a
                href="https://x.com/monbran_kuri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-white transition-transform duration-300 bg-blue-500 rounded-full shadow-lg hover:scale-110"
            >
                <FaSquareXTwitter size={28} />
            </a>
            </div>
        </div>
        </section>
    );
}
