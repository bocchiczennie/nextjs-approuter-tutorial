/**
 * cache戦略について
 * https://zenn.dev/cybozu_frontend/articles/next-caching-dedupe
 */

import { Task } from './types';
export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        // "no-cache"を指定するとSSRになる
        cache: "no-store",
    });
    return await res.json();
}

export const addTodo = async (todo: Task): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        // "no-cache"を指定するとSSRになる
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    });
    return await res.json();
}