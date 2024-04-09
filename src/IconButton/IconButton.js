import { useRef, useState } from "react";

export default function IconButton({ children, text, color, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex  items-center rounded-full text-white ${
        color || "bg-slate-500"
      }`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-2 font-bold text-xl ">
          {text}
        </span>
      </div>
    </button>
  );
}
