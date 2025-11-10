import { lazy, type JSX } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

import {
    RegisterPage,
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterFormikPage,
    DinamicForm,
 } from "../03-forms/pages";


type JSXElement = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
}

const LazyLayout = lazy(() => import('../01-lazyload/layout/LazyLayout'))
const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/register',
        path: '/register',
        Component: RegisterPage,
        name: 'Register'
    },
    {
        to: '/formik-page',
        path: '/formik-page',
        Component: FormikBasicPage,
        name: 'Formik Basic'
    },
    {
        to: '/formik-yup',
        path: '/formik-yup',
        Component: FormikYupPage,
        name: 'Formik yup'
    },
    {
        to: '/formik-components',
        path: '/formik-components',
        Component: FormikComponents,
        name: 'Formik components'
    },
    {
        to: '/formik-abstractions',
        path: '/formik-abstractions',
        Component: FormikAbstraction,
        name: 'Formik Abstraction'
    },
    {
        to: '/formik-register',
        path: '/formik-register',
        Component: RegisterFormikPage,
        name: 'Register Formik Page'
    },
    {
        to: '/dinamic-form',
        path: '/dinamic-form',
        Component: DinamicForm,
        name: 'Dinamic Form'
    },
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]