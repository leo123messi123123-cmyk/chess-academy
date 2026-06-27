import { NavLink, Outlet } from "react-router-dom";
import "./AppLayout.css";

function AppLayout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="sidebar__logo">♟ Chess Academy</h2>

        <nav className="sidebar__nav">
          <NavLink to="/">🏛 Академия</NavLink>
          <NavLink to="/practice">🏋 Тренировка</NavLink>
          <NavLink to="/classroom">👨‍🏫 Учебный класс</NavLink>
          <NavLink to="/profile">👤 Профиль</NavLink>
        </nav>
      </aside>

      <div className="app-layout__content">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
