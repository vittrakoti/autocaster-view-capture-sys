import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faVideo, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ModeSelection() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pt-20 bg-slate-50">
      {/* Title */}
      <p className="text-base text-slate-500 mb-2 font-medium">
        記念撮影カメラシステム
      </p>

      <h1 className="font-poppins text-4xl font-semibold text-blue-500 mb-8">
        AutoCaster View
      </h1>

      {/* Card */}
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl px-6 py-8">
        <h2 className="text-xl font-semibold text-slate-700 mb-2 text-center">
          撮影モードを選択
        </h2>
        <p className="text-sm text-slate-500 mb-6 text-center">
          お好みのモードをお選びください
        </p>

        {/* Photo */}
        <Link
          to="/photo-preparation"
          className="
            flex items-center gap-4
            w-full mb-4 px-5 py-4
            rounded-xl
            bg-green-500 text-white
            shadow-md
            transition-all duration-200
            hover:brightness-105
            active:scale-[0.98]
          "
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
            <FontAwesomeIcon icon={faCamera} className="text-lg" />
          </div>
          <div className="text-left">
            <p className="font-semibold">静止画</p>
            <p className="text-sm opacity-90">高画質スチル撮影</p>
          </div>
        </Link>

        {/* Video 3 sec */}
        <Link
          to="/take-3sec-video"
          className="
            flex items-center gap-4
            w-full mb-4 px-5 py-4
            rounded-xl
            bg-blue-500 text-white
            shadow-md
            transition-all duration-200
            hover:brightness-105
            active:scale-[0.98]
          "
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
            <FontAwesomeIcon icon={faVideo} className="text-lg" />
          </div>
          <div className="text-left">
            <p className="font-semibold">動画（3秒）</p>
            <p className="text-sm opacity-90">ショートムービー撮影</p>
          </div>
        </Link>

        {/* Video 15 sec */}
        <Link
          to="/video15/preparation"
          className="
            flex items-center gap-4
            w-full mb-6 px-5 py-4
            rounded-xl
            bg-blue-500 text-white
            shadow-md
            transition-all duration-200
            hover:brightness-105
            active:scale-[0.98]
          "
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20">
            <FontAwesomeIcon icon={faVideo} className="text-lg" />
          </div>
          <div className="text-left">
            <p className="font-semibold">動画（15秒）</p>
            <p className="text-sm opacity-90">ショートムービー撮影</p>
          </div>
        </Link>

        {/* Close */}
        <Link
          to="/"
          className="block text-center text-sm text-slate-400 hover:text-slate-600"
        >
          <span><FontAwesomeIcon icon={faArrowLeft} /></span> <span className="font-bold"> 戻る</span>
        </Link>
      </div>
    </div>
  );
}
