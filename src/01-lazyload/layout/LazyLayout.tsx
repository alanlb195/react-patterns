import { Navigate, NavLink, Route, Routes } from "react-router";
import { routes } from "../routes/routes";

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page</h1>
            <ul>
                {routes.map(({ to, name }) => (
                    <li key={to}>
                        <NavLink to={to}>{name}</NavLink>
                    </li>
                ))}
            </ul>

            <Routes>

                {routes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}

                <Route path="*" element={<Navigate replace to="/lazyload/lazy1" />} />

            </Routes>

        </div>
    )
}

export default LazyLayout;