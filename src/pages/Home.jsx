import { Link } from "react-router-dom";
import { FaCamera, FaVideo } from "react-icons/fa";

//import CamConnectionStatus from "../components/CamConnectionStatus";

export default function Home() {
  return (
    <div
      className="
        relative
        min-h-screen
        flex flex-col items-center
        px-4 pt-20 text-center
        bg-[url('/images/mt-fuji-img02.jpg')]
        bg-cover bg-center bg-no-repeat
        md:bg-none
      "
    >
      {/* Gradient overlay (mobile only) */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-white/60
          to-white
          md:hidden
          pointer-events-none
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title */}
        <p className="text-xl text-slate-100 mb-2 font-medium">
          記念撮影カメラシステム
        </p>

        <h1 className="font-poppins text-4xl font-semibold text-blue-500 mb-6">
          AutoCaster View
        </h1>

        {/* Mode cards */}
        <div className="grid grid-cols-3 gap-4 mb-6 max-w-md w-full pt-10">
          {/* Image */}
          <div className="rounded-xl bg-blue-50 p-4 border border-slate-200 shadow-md">
            <div className="flex justify-center mb-4">
              <FaCamera className="text-blue-400 text-2xl" />
            </div>
            <p className="text-sm text-slate-600 mb-1">静止画</p>
            <p className="text-blue-400 text-xl font-bold">¥100</p>
          </div>

          {/* 3 sec video */}
          <div className="rounded-xl bg-blue-50 p-4 border border-slate-200 shadow-md">
             <div className="flex justify-center mb-4">
              <FaVideo className="text-blue-400 text-2xl" />
            </div>
            <p className="text-sm text-slate-600 mb-1">3秒動画</p>
            <p className="text-blue-400 text-xl font-bold">¥300</p>
          </div>

          {/* 15 sec video */}
          <div className="rounded-xl bg-blue-50 p-4 border border-slate-200 shadow-md">
             <div className="flex justify-center mb-4">
              <FaVideo className="text-blue-400 text-2xl" />
            </div>
            <p className="text-sm text-slate-600 mb-1">15秒動画</p>
            <p className="text-blue-400 text-xl font-bold">¥600</p>
          </div>
        </div>

        {/* Note */}
        <p className="text-sm text-slate-800 mb-6 font-medium">
          撮影・プレビューまでは無料で行うことができます
        </p>

        {/* Label */}
        <p className="border border-slate-300 rounded-md px-4 py-3 text-sm text-slate-600 mb-6 bg-slate-50">
          <span className="font-semibold">データ取得：</span>
          ダウンロード方式
        </p>

        {/* Start button */}
        <Link
          to="/mode-selection"
          className="
            w-[280px] max-w-md
            bg-green-500 text-white
            rounded-full py-4 font-semibold
            flex items-center justify-center gap-2
            shadow-[0_8px_20px_rgba(34,197,94,0.35)]
            transition-all duration-300 ease-out
            hover:-translate-y-0.5
            hover:shadow-[0_12px_28px_rgba(34,197,94,0.45)]
            active:translate-y-0
            active:shadow-[0_6px_14px_rgba(34,197,94,0.25)]
          "
        >
          <FaCamera className="text-lg" />
          スタート
        </Link>

        {/* Footer note */}
        <p className="text-sm text-slate-600 mt-6 max-w-md">
          設置された撮影用カメラで、写真、3秒動画、15秒動画の記念撮影とそのデータのダウンロードが可能です。
        </p>
      </div>
      <Link to="/arigato-message" className="mt-6 text-slate-200">
        Message
      </Link>
    </div>
  );
}
