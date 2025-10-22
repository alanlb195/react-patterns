import { Suspense } from "react";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from "../assets/react.svg";
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav className="main-nav">
            <img src={reactLogo} alt="react-logo" className="logo" />
            <ul>
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <NavLink to={to}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="content">

            <Routes>

              {routes.map(({ path, Component }) => (
                <Route path={path} element={<Component />} />
              ))}

              <Route path="/*" element={<Navigate to={routes[0].to} replace />} />

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
