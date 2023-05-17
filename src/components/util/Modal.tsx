"use client";
import { useHandleOverflow } from "@/hooks/useOverflowHandler";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  open: boolean;
  children: React.ReactNode;
  toggle: () => void;
};

const Modal = (props: ModalProps) => {
  useHandleOverflow(props.open);
  return (
    // backdrop
    <div
      onClick={props.toggle}
      className={`
    fixed inset-0 z-20 flex items-center justify-center transition-colors
    ${props.open ? "visible bg-black/20" : "invisible"}
    `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
         rounded-xl border border-slate-800 bg-white p-6 shadow-md shadow-slate-800 transition-all duration-300 dark:bg-black
        ${props.open ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        {/* Close Button */}
        <button onClick={props.toggle}>
          <AiOutlineClose
            size={30}
            className="absolute right-2 top-2 rounded-full bg-white p-1 transition-colors duration-300 hover:bg-red-500 dark:bg-slate-800 dark:hover:bg-red-500"
          />
        </button>
        {/* Children */}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
