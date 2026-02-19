export default function CameraPreview({ overlay, countdown }) {
  return (
    <div
      className="
        relative
        w-full
        aspect-video
        bg-black
        rounded-xl
        overflow-hidden
        shadow
        border border-slate-100
      "
    >
      {/* Local Video Preview */}
      <video
        className="w-full h-full object-cover"
        src="/images/videos/demo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      {overlay && (
        <img
          src={overlay.src}
          alt="overlay"
          className="
            absolute inset-0
            w-full h-full
            object-contain
            pointer-events-none
          "
        />
      )}

      {/* Countdown */}
      {countdown !== null && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <span className="text-white text-7xl font-bold drop-shadow-lg">
            {countdown}
          </span>
        </div>
      )}
    </div>
  );
}