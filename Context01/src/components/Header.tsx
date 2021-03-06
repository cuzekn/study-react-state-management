import { FC } from "react";
import Link from "next/link";
import { TodoCounter } from "src/components/TodoCounter";

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <Link href="/">
          <a>TODO一覧</a>
        </Link>
        <Link href="/add">
          <a href="">TODO管理</a>
        </Link>
      </nav>

      <TodoCounter />
    </header>
  );
};
