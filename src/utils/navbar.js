import id from "../hooks/idGenerator";
import { HomePage } from "../pages/HomePage";
import { Generic } from "../components/Generic";

const { generate } = id();

export const navbar = [
    {
        id: generate.next().value,
        title: "Home",
        path: "/home",
        hidden: false,
        element: <HomePage/>,
        children: [],
    },
    {
        id: generate.next().value,
        title: "About",
        path: "/about",
        hidden: false,
        element: <Generic />,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Contact",
        path: "/contact",
        hidden: false,
        element: <Generic />,
        children: [],
    },
    { id: generate.next().value, title: `Signin`, path: "/signin", hidden: true },
    { id: generate.next().value, title: "Signup", path: "/signup", hidden: true },
];