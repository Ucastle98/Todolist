import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTodo: (text: string) => void;
}

export default function Modal({ isOpen, onClose, onAddTodo }: ModalProps) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAddTodo(text);
    setText("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-100">
        <h1 className="text-orange-400 text-xl font-semibold text-center mb-4">
          할 일 추가
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="할 일을 입력하세요"
            className="flex-1 border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition p-3"
          >
            추가
          </button>
        </div>

        <button
          onClick={onClose}
          className="block mx-auto border rounded-xl text-white p-3 bg-blue-500 hover:bg-blue-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
