import CameraPreview from "../../components/CameraPreview"
import CamConnectionStatus from "../../components/CamConnectionStatus"

export default function Video3SecRecording() {
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
                            <CameraPreview/>
                        </div>
                </div>
            </div>
        </div>          
      
    </>
  )
}
