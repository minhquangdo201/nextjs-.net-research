import React from "react";
import { BsXLg } from "react-icons/bs";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  saveText: string;
  onSave: () => void;
  onClose: () => void;
}

const Modal = (props: ModalProps) => {
  if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-800 bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg pt-3 pb-6 px-6 max-w-md w-full mx-4 bottom-32">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{props.title}</h2>
          <button
            className=" text-gray-500 hover:text-gray-700"
            onClick={props.onClose}
          >
            <BsXLg />
          </button>
        </div>
        <hr className="mb-3" />
        {props.children}
        <hr className="mb-3" />
        <div className="flex justify-end">
          <button className="px-4 mx-3 py-2 bg-red-400 text-white rounded " onClick={props.onSave}>{props.saveText}</button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded "
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


