import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";

export default function Video3SecProgressBar() {

    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();

    const handleCancel = () =>{
        navigate("/take-3sec-video")
    }

    useEffect(() =>{
        const interval = setInterval(() =>{
            setProgress((prev) => Math.min(prev + 5, 100));
        }, 150);
    });
    useEffect(() =>{
        if(progress >= 100){
            navigate("/video-preview-3sec");
        }
    },[progress, navigate]);


  return (
    <>
      <div className="h-screen flex items-center justify-center bg-slate-50 px-4">
        {/* card body */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10 text-center">
            {/* icon */}
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
            <FontAwesomeIcon icon={faMagicWandSparkles} className="text-white text-xl" />
          </div>
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold text-slate-800 mb-1">
          処理中…
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          しばらくお待ちください。
        </p>

        {/* Progress info */}
        <div className="flex justify-between text-xs text-slate-400 mb-2">
          <span>PROCESSING</span>
          <span>{progress}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Cancel */}
        <button
          type="button"
          className="mt-8 text-sm text-slate-500 hover:text-slate-700"
          onClick={handleCancel}
        >
          キャンセル
        </button>

        </div>
      </div>
    </>
  )
}
