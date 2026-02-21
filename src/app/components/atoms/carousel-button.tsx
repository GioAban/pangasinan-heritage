import { ChevronLeft, ChevronRight } from "lucide-react";
interface Props {
  direction: "left" | "right";
  onClick: () => void;
}
export const CarouselButton = ({ direction, onClick }: Props) => (
  <button
    onClick={onClick}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all hover:bg-slate-50 active:scale-90"
    aria-label={`Scroll ${direction}`}
  >
    {direction === "left" ? (
      <ChevronLeft size={20} />
    ) : (
      <ChevronRight size={20} />
    )}
  </button>
);
