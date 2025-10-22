import { type JSX } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";


type JSXElement = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
}

export const routes: Route[] = [
    {
        to: '/lazyload/lazy1',
        path: 'lazy1',
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazyload/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lazyload/lazy3',
        path: 'lazy3',
        Component: LazyPage3,
        name: 'Lazy-3'
    },
]