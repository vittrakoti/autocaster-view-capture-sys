import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaImage, FaCamera, FaRotateRight } from "react-icons/fa6";
import CamConnectionStatus from "../../components/CamConnectionStatus";

export default function PhotoPreviewPg() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  //Temporary Photo Info” (Mock Data) backend later
  const photoFile = {
  name: "photo_20260209_001.jpg",
  size: "-- KB",                 
};

// Handle Click events
  const handleConfirm = () => {
    setShowModal(false);
    // Later: call backend delete API here
    navigate("/photo-preparation");
  };
  const handleCancel = () => {
  setShowModal(false);
  navigate("/photo-preparation");
};

// open strip page
 const handlePayment = () => {
  navigate("/payment-gateway");
};

  return (
    <div className="max-w-md md:max-w-lg mx-auto px-4 py-8 relative">

      {/* ===== Page title ===== */}
      <div className="mt-4 mb-6 text-center">
        <h1 className="text-xl font-bold text-slate-800">
          撮影プレビュー
        </h1>
      </div>

      {/* ===== Status row ===== */}
      <div className="flex justify-between items-center mb-4">
        <CamConnectionStatus />

        <div className="bg-white rounded-full px-4 py-1.5 shadow-sm">
          <span className="text-xs text-slate-500 font-medium">
            選択モード：
          </span>
          <span className="text-xs text-blue-600 font-semibold ml-1">
            写真
          </span>
        </div>
      </div>

      {/* ===== Preview image ===== */}
      <div className="mb-6 relative">
        <img
          src="/images/photos/img_ac_01.jpg"
          alt="Preview"
          className="w-full rounded-xl shadow-md"
        />

        {/* image icon */}
        <div className="w-8 h-8 absolute top-3 right-3 bg-slate-800/30 rounded-full p-2 flex items-center justify-center">
          <FaImage className="text-slate-200" />
        </div>
      </div>

      {/* ===== Time ===== */}
      <div className="mb-2">
        <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
          <span>残り時間</span>
          <span>29 : 33</span>
        </div>

        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500"
            style={{ width: "70%" }}
          />
        </div>
      </div>

      <p className="mt-2 mb-8 text-[13px] text-center text-slate-500">
        ※プレビューから決済完了までの制限時間は30分です。
      </p>

      {/* ===== Retake Info ===== */}
      <div className="mt-6 mb-4 bg-white border border-slate-200 rounded-md px-4 py-3 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-slate-200 flex items-center justify-center">
            <FaImage className="text-slate-500" />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700 truncate">
              {photoFile.name}
            </p>

            <p className="text-xs text-slate-500">
              {photoFile.size}
            </p>
          </div>
        </div>

        {/* Retake Button */}
        <button
          onClick={() => setShowModal(true)}
          className="p-2"
        >
          <FaRotateRight className="text-blue-500 text-lg" />
        </button>
      </div>

      {/* ===== Main action ===== */}
      <button
        onClick={handlePayment}
        className="
          w-full bg-green-500 text-white
          rounded-md py-4 font-semibold
          shadow-md active:scale-[0.99]
        "
      >
        決済/ダウンロード
      </button>

      {/* Cancel */}
<button
  onClick={handleCancel}
  className="mt-8 w-full text-center text-red-400 text-sm font-semibold"
>
キャンセル
</button>

      {/* ===== Card Modal ===== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-sm rounded-xl p-6 text-center shadow-xl">

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                <FaCamera className="text-white text-xl" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-slate-800 mb-2">
              写真の再撮影
            </h2>

            {/* Message */}
            <p className="text-xs text-slate-500 my-6 leading-relaxed">
              写真をもう一度撮りますか？
              この操作により、データベースから写真が削除されます。
            </p>

            {/* Confirm */}
            <button
              onClick={handleConfirm}
              className="
                w-full bg-blue-500 text-white
                py-2.5 rounded-md font-semibold
                mb-3
              "
            >
              確定
            </button>

            {/* Cancel */}
            <button
            onClick={() => setShowModal(false)}
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              キャンセル
            </button>
          </div>
        </div>
      )}

    </div>
  );
}