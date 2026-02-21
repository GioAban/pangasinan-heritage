import { ReactNode } from "react";
export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="group min-w-[300px] shrink-0 cursor-pointer rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:shadow-xl">
      {children}
    </div>
  );
};
