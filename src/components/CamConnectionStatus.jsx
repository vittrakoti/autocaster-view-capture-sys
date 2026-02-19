import { useEffect, useState } from "react";

export default function CamConnectionStatus({
  label = "ライブビュー",
  mockConnected = null, // null = use backend later
}) {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // 🔹 MOCK MODE (for development only)
        if (mockConnected !== null) {
          setIsConnected(mockConnected);
          return;
        }

        // 🔹 REAL BACKEND (enable later)
        // const res = await fetch("/api/camera/status");
        // const data = await res.json();
        // setIsConnected(data.connected);

        // default fallback
        setIsConnected(true);
      } catch (error) {
        console.error("Camera connection error:", error);
        setIsConnected(false);
      }
    };

    checkConnection();

    // 🔹 Optional polling (uncomment when needed)
    // const interval = setInterval(checkConnection, 5000);
    // return () => clearInterval(interval);
  }, [mockConnected]);

  return (
    <div className="w-[160px] flex items-center justify-between gap-4 bg-white rounded-full px-5 py-3 shadow-sm">
      <p className="text-xs text-slate-600 font-semibold">{label}</p>

      <span
        className={`w-4 h-4 rounded-full ${
          isConnected ? "bg-green-500" : "bg-slate-300"
        }`}
        aria-label={isConnected ? "connected" : "disconnected"}
      />
    </div>
  );
}
