import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "../components/LandingComponent/Landing";

//localhost:3000/--> LandingComponent
//localhost:3000/post/new-->
//localhost:3000/post/all-->


export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="post" element={<PostView />}>
                <Route path="new" element={<LandingComponent />} />
                <Route path="all" element={<LandingComponent />} />
            </Route> */}
        </Routes>

    </BrowserRouter>
}