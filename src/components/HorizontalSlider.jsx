//capture-sys\src\components\HorizontalSlider.jsx
export default function HorizontalSlider({
  items = [],
  selectedId,
  onSelect,
}) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-1 py-2">
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className={`
                relative
                min-w-[90px]
                h-[90px]
                rounded-xl
                overflow-hidden
                border
                bg-slate-200
                shadow-sm
                transition
                ${
                  isSelected
                    ? "ring-2 ring-blue-500 border-blue-500"
                    : "border-slate-300"
                }
              `}
            >
              {/* Badge */}
              {item.badge && (
                <span
                  className="
                    absolute top-1 right-1
                    text-[10px]
                    px-2 py-0.5
                    rounded-full
                    bg-white
                    text-blue-500
                    font-medium
                    shadow
                    z-10
                  "
                >
                  {item.badge}
                </span>
              )}

              {/* Image */}
              {item.src ? (
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-slate-400 text-3xl">🚫</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
