//C:capture-sys\src\context\OverlayContext.jsx
import { createContext, useContext, useState } from "react";

const OverlayContext = createContext(null);

// Shared overlay data
const overlayItems = [
  { id: -1, src: null, badge: "なし" },
  { id: 0, src: "/images/overlay/overlay_img01.png", badge: "¥100" },
  { id: 1, src: "/images/overlay/overlay_img02.png", badge: "無料" },
  { id: 2, src: "/images/overlay/overlay_img03.png", badge: "¥100" },
  { id: 3, src: "/images/overlay/overlay_img04.png", badge: "¥100" },
  { id: 4, src: "/images/overlay/overlay_img05.png", badge: "無料" },
  { id: 5, src: "/images/overlay/overlay_img06.png", badge: "¥100" },
];

export function OverlayProvider({ children }) {
  const [selectedOverlay, setSelectedOverlay] = useState(null);

  return (
    <OverlayContext.Provider
      value={{
        overlayItems,
        selectedOverlay,
        setSelectedOverlay,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
}

export function useOverlay() {
  const context = useContext(OverlayContext);

  if (!context) {
    throw new Error("useOverlay must be used inside OverlayProvider");
  }

  return context;
}