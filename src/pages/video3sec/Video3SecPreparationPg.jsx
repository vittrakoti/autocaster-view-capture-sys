import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

//componnts
import CamConnectionStatus from "../../components/CamConnectionStatus";
import HorizontalSlider from "../../components/HorizontalSlider";
import CameraPreview from "../../components/CameraPreview";
import { useOverlay } from "../../context/OverlayContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


export default function Video3SecPreparationPg() {
    // Replace useState overlay
    const { overlayItems, selectedOverlay, setSelectedOverlay } = useOverlay();

    const [countdown, setCountdown] = useState(null);
    const navigate = useNavigate()

    //click to take video
    const handleCaptureClick = () => {
        if (countdown !== null) return;
        setCountdown(5)
    }
    //show countdown on display
    useEffect(() => {
        if (countdown === null) return;

        if (countdown === 0) {
            navigate("/saving-video-3sec");
            return;
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, navigate]);

    return (
        <>
            <div className="min-h-screen flex justify-center px-4 py-8">
                <div className="min-h-screen flex justify-center px-4 py-8">
                    <div className="w-full max-w-md ">
                        {/* ===== TITLE ===== */}
                        <h1 className="text-2xl font-bold text-slate-700 text-center mb-6">
                            撮影準備
                        </h1>

                        {/* ===== STATUS ROW ===== */}
                        <div className="flex justify-between items-center mb-4">
                            <div className="">
                                <CamConnectionStatus />
                            </div>
                            <div className="flex">
                                <div className="bg-white rounded-full px-5 py-2  mr-2 shadow-sm">
                                    <span className="text-xs text-slate-600 font-semibold">
                                        選択モード：
                                    </span>
                                    <span className="text-sm text-blue-600 font-semibold">
                                        動画
                                    </span>
                                </div>
                                <div className="bg-white rounded-full w-[40px] h-[40px] shadow-sm flex items-center justify-center">
                                    <span className="text-sm text-blue-600 font-semibold">
                                        3秒
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* ===== CAMERA PREVIEW ===== */}
                        <div className="mb-6">
                            <CameraPreview
                                overlay={selectedOverlay}
                                countdown={countdown}
                            />
                        </div>

                        {/* ===== OVERLAY SLIDER ===== */}
                        <div className="mb-8">
                            <div className="flex justify-between mb-2">
                                <p className="text-sm text-slate-600 font-bold">
                                    フレーム/ロゴなどを選択
                                </p>
                                <Link
                                    to="/library"
                                    state={{ from: "preparation" }}
                                    className="text-sm text-blue-500 font-bold">
                                    すべて見る
                                </Link>
                            </div>

                            <HorizontalSlider
                                items={overlayItems}
                                selectedId={selectedOverlay?.id}
                                onSelect={setSelectedOverlay}
                            />
                            <p className="mt-4 text-sm text-slate-600 text-center px-4">
                                写真やビデオにフレームやロゴなどを追加できます。
                            </p>
                        </div>

                        {/* ===== CAPTURE BUTTON ===== */}
                        <div className="flex justify-center mb-8">
                            <button
                                onClick={handleCaptureClick}
                                className="
                        w-[280px]
                        bg-green-500 text-white
                        rounded-lg py-4 font-semibold
                        flex items-center justify-center gap-2
                        shadow-[0_8px_20px_rgba(34,197,94,0.35)]
                        transition-all duration-300 ease-out
                        hover:-translate-y-0.5
                        hover:shadow-[0_12px_28px_rgba(34,197,94,0.45)]
                        active:translate-y-0
                        active:shadow-[0_6px_14px_rgba(34,197,94,0.25)]
                        "
                            >
                                <FontAwesomeIcon icon={faCamera} />
                                <span className="text-sm font-medium">撮影する</span>
                            </button>
                        </div>
                        {/* ===== BACK LINK ===== */}
                        <Link
                            to="/mode-selection"
                            className="block text-center text-md text-slate-400 hover:text-slate-600"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span className="font-bold ml-1">戻る</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
