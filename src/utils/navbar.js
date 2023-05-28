import id from "../hooks/idGenerator";

const { generate } = id();

export const navbar = [
    {
        id: generate.next().value,
        title: "Home",
        path: "/home",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "About",
        path: "/about",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Contact",
        path: "/contact",
        hidden: false,
        children: [],
    },
    { id: generate.next().value, title: `Signin`, path: "/signin", hidden: true },
    { id: generate.next().value, title: "Signup", path: "/signup", hidden: true },
];