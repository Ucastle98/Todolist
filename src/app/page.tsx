"use client";

import { useState } from "react";
import Modal from "./components/Modal";

interface Todo {
  text: string;
  done: boolean;
}

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos((prev) => [...prev, { text, done: false }]);
  };

  const handleDelete = () => {
    setTodos([]);
  };

  const handleDone = (idx: number) => {
    setTodos((prev) =>
      prev.map((todo, i) => (i === idx ? { ...todo, done: !todo.done } : todo))
    );
  };

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="border rounded-xl bg-blue-500 text-white px-6 py-4 hover:bg-blue-600 mb-4"
        >
          12-08 할 일
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddTodo={handleAddTodo}
        />
      </div>

      <div className="p-2 flex justify-center">
        <div className="flex flex-col justify-between min-h-[400px] max-h-[1200px] border rounded-xl bg-white shadow px-16 max-w-[600px]">
          <ul className="space-y-2 overflow-auto mt-2">
            {todos.map((todo, idx) => (
              <li
                key={idx}
                onClick={() => handleDone(idx)}
                className={`border p-3 rounded-xl bg-gray-50 shadow hover:bg-gray-200 text-center transition ${
                  todo.done ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleDelete()}
            className="mt-4 border rounded-xl bg-gray-500 text-white p-3 hover:bg-gray-600"
          >
            전체 삭제
          </button>
        </div>
      </div>
    </div>
  );
}
