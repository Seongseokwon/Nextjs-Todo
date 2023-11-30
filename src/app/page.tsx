import Image from "next/image";
import styles from "./page.module.css";

interface Todo {
  id: number;
  title: string;
  description: string;
  importance: "LOW" | "MEDIUM" | "HIGH";
  completed: boolean;
  todoImgUrl: string;
}

export default async function Home() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/todos");
  const todos: Todo[] = await res.json();

  console.log(todos);
  return (
    <div className={styles.container}>
      <nav className="nav">
        <button type="button">Search</button>
        <button type="button">Add Todo</button>
      </nav>
      <main>
        <section className="welcome-section">
          <header>
            <h2>오늘 할 일</h2>
            <p>달성율</p>
          </header>
          <main>안녕하세요 회원님. 오늘은 3개의 할일이 남아 있습니다.</main>
          <footer>2023년 11월 30일</footer>
        </section>
        <section className="todo-list-section">
          <header>
            <nav>
              <ul>
                <li>DAY</li>
                <li>WEEK</li>
                <li>MONTH</li>
              </ul>
            </nav>
            {/* 햄버거 메뉴 보류 */}
          </header>
          <main>
            {/* todo item section */}
            {todos.map((todo) => (
              <div key={todo.id}>
                <Image
                  src={todo.todoImgUrl}
                  alt="todoImage"
                  width={164}
                  height={128}
                />
                <div>
                  <section className="todo-info">
                    <b>{todo.title}</b>
                    <p>
                      <span>{todo.importance}</span>
                      <span>남은기간</span>
                    </p>
                  </section>
                  <section className="todo-control">
                    <button type="button">Go to Detail</button>
                    <input type="checkbox" value="" />
                  </section>
                </div>
              </div>
            ))}
          </main>
        </section>
      </main>
    </div>
  );
}
