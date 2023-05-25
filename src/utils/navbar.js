import id from "../hooks/idGenerator";

const { generate } = id();

export const navbar = [
    {
        id: generate.next().value,
        title: "Statistika",
        path: "/statistika",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Lidlar",
        path: "/lids",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Moliya",
        path: "/moliya",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Talaba",
        path: "/talaba",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Guruhlar",
        path: "/guruhlar",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Kurslar",
        path: "/kurslar",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "HR",
        path: "/hr",
        hidden: false,
        children: [],
    },
    {
        id: generate.next().value,
        title: "Sozlamalar",
        path: "/sozlamalar",
        hidden: false,
        children: [],
    },
    { id: generate.next().value, title: `Signin`, path: "/signin", hidden: true },
    { id: generate.next().value, title: "Signup", path: "/signup", hidden: true },
];