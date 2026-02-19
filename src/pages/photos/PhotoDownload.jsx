import { useNavigate } from "react-router-dom";
import { FaDownload, FaImage } from "react-icons/fa6";

import CamConnectionStatus from "../../components/CamConnectionStatus";

export default function PhotoDownload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/thankyou-message");
  };

  return (
    <div className="min-h-screen flex justify-center bg-slate-50 py-8 px-4">
      <div className="w-full max-w-xl">
        
        {/* ===== Title ===== */}
        <h1 className="text-2xl font-bold text-slate-700 text-center mb-8">
          保存
        </h1>

        {/* ===== Status Row ===== */}
        <div className="flex items-center justify-between mb-4">
          <CamConnectionStatus />

          <div className="bg-white rounded-full px-4 py-2 shadow-sm">
            <span className="text-xs text-slate-500 font-semibold">
              選択モード：
            </span>
            <span className="text-sm text-blue-600 font-semibold ml-1">
              写真
            </span>
          </div>
        </div>

        {/* ===== Preview Image ===== */}
        <div className="relative mt-4">
          <img
            src="/images/photos/img_ac_01.jpg"
            alt="Preview"
            className="w-full rounded-xl shadow-md"
          />

          <div className="absolute top-3 right-3 w-9 h-9 bg-slate-900/40 rounded-full flex items-center justify-center">
            <FaImage className="text-white text-sm" />
          </div>
        </div>

        {/* ===== Image Info ===== */}
        <div className="grid grid-cols-2 gap-4 mt-5 px-2">
          <div>
            <p className="text-xs text-slate-400">容量</p>
            <p className="text-sm text-slate-700 font-semibold">
              253.00 KB
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-400">ファイル名</p>
            <p className="text-sm text-slate-700 font-semibold truncate">
              Image_20260210.jpg
            </p>
          </div>
        </div>

        {/* ===== Download Button ===== */}
        <div className="flex justify-center my-8">
          <button
            onClick={handleClick}
            className="
              w-full max-w-xs
              bg-green-500 text-white
              rounded-xl py-4 font-semibold
              flex items-center justify-center gap-2
              shadow-[0_8px_20px_rgba(34,197,94,0.35)]
              transition-all duration-300 ease-out
              hover:-translate-y-0.5
              hover:shadow-[0_12px_28px_rgba(34,197,94,0.45)]
              active:translate-y-0
              active:shadow-[0_6px_14px_rgba(34,197,94,0.25)]
            "
          >
            <FaDownload />
            <span className="text-sm">ダウンロード</span>
          </button>
        </div>

        {/* ===== Description ===== */}
        <div className="text-sm text-slate-500 space-y-3 leading-relaxed">
          <p>
            上記ボタンでデータのダウンロードが可能です。
            メールでもダウンロードURLをお送りしています。
          </p>
          <p>
            <span className="text-red-500 font-semibold">※</span>
            ダウンロードの有効期限は1時間で、最大3回まで可能です。
          </p>
        </div>
      </div>
    </div>
  );
}