import {type FC } from "react";
import { useRoutes, type RouteObject } from "react-router-dom";

interface Props {
  routes: RouteObject[];
}

const ProtectedLayout: FC<Props> = ({ routes }) => {
  const element = useRoutes(routes);

  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>

      <main style={{ padding: "20px" }}>{element}</main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default ProtectedLayout;
