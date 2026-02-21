"use client";
import { useRef, useTransition } from "react";
import Button from "./components/atoms/button";
const ClientMessageForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const inputClasses = `
    w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50/50 
    text-slate-900 outline-none transition-all duration-300
    focus:border-[#124D9B] focus:bg-white focus:ring-4 focus:ring-[#124D9B]/10
    placeholder:text-slate-400 font-medium
  `;
  const labelClasses =
    "text-xs font-black uppercase tracking-widest text-slate-500 mb-2 ml-1";
  return (
    <form
      ref={formRef}
      action={(formData: FormData) => {
        startTransition(async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          formRef.current?.reset();
        });
      }}
      className="flex w-full flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Juan Dela Cruz"
            required
            className={inputClasses}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="juan@example.com"
            required
            className={inputClasses}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className={labelClasses}>
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="I'd like to ask about..."
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="attachment" className={labelClasses}>
          Attachments (Optional)
        </label>
        <div className="group relative">
          <input
            type="file"
            name="attachment"
            id="attachment"
            className="hidden"
            onChange={(e) => {}}
          />
          <label
            htmlFor="attachment"
            className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-200 p-4 transition-all group-hover:border-[#124D9B] group-hover:bg-blue-50/50"
          >
            <span className="text-sm font-bold text-slate-500 group-hover:text-[#124D9B]">
              Click to upload files
            </span>
          </label>
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <Button
          variant="solid"
          className="!w-full !bg-[#124D9B] py-6 !text-white shadow-xl shadow-blue-900/10 hover:!bg-[#0d3d7c]"
        >
          {isPending ? "SENDING MESSAGE..." : "SEND MESSAGE"}
        </Button>
      </div>
    </form>
  );
};
export default ClientMessageForm;
