import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import {navbar} from "../utils/navbar";
import  Page  from "../components/Page";
import GenCarousel from "../components/Carousel";

export const Root = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar />}>
                        {
                            navbar.map(({ path, element, id }) => {
                                return <Route key={id} path={path} element={element} />
                            })
                        }
                        <Route path="/" element={<Navigate to={'/home'} />} />
                    </Route>
                    <Route path="*" element={<Page />} />
                </Routes>
              {/* <GenCarousel/> */}
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Root