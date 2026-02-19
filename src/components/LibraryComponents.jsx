//capture-sys\src\components\LibraryComponents.jsx
import { useMemo } from "react";
import { useOverlay } from "../context/OverlayContext";
import { useNavigate, useLocation } from "react-router-dom";


export default function LibraryComponents() {
    const { overlayItems,  selectedOverlay,  setSelectedOverlay,} = useOverlay();
    const items = useMemo(() => {
        return overlayItems.map((item) => ({
            id: item.id,
            src: item.src,
            name: item.src ? item.src.split("/").pop() : "なし",
            badge: item.badge,
            size: "-- KB",
        }));
    }, [overlayItems]);
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from;

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-xl shadow border overflow-hidden"
                >
                    {/* images */}
                    <img 
                        src = {item.src}
                        alt={item.name}
                        className="w-full h-36 object-contain bg-slate-100"
                    />

                    {/* info */}
                    <div className="p-3">
                        <div className="flex justify-between text-xs mb-2">
                            <div>
                                <p className="font-semibold text-slate-700 truncate">
                                    {item.name}
                                </p>
                            <p className="text-slate-400">{item.size}</p>
                            </div>
                            <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded-full text-[11px] font-semibold">
                            {item.badge}
                            </span>
                        </div>

                        {/* select button */}
                        <button
                            onClick={() => {
                                setSelectedOverlay(item);

                                if (from === "preview") {
                                    navigate("/photo-preview");
                                } else {
                                    navigate("/photo-preparation");
                                }
                                }}
                            className={`w-full text-sm py-1.5 rounded-md font-semibold transition ${
                                selectedOverlay?.id === item.id
                                ? "bg-green-500 text-white"
                                : "bg-slate-200 text-slate-700"
                            }`}
                            >
                            {selectedOverlay?.id === item.id ? "選択中" : "選択"}
                        </button>
                    </div>
                </div>
            )
            )}
        </div>
    )

}
