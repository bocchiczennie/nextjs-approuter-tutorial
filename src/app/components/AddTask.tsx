"use client";

import React, {ChangeEvent, FormEvent, useState} from "react";
import {addTodo} from "@/api";
import {v4 as uuid} from "uuid";

const AddTask = () => {
    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        await addTodo({ id: uuid(), text: taskTitle });

        setTaskTitle("");
    }

    return (
        <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
            <input
                type="text" className="w-full border px-4 py-2 rounded-lg focus:ountline-none focus:border-blue-400"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskTitle(e.target.value)}
                value={taskTitle}
            />
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform duration-200 hover:bg-blue-400 hover:scale-95">タスクを追加</button>
        </form>
    );
}

export default AddTask;