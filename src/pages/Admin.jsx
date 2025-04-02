import React from "react";
import Home from "./Home";
import PostUser from "../components/PostUser";
import GetUsers from "../components/GetUsers";

const Admin = () => {
    return (
        <>
            <Home />
            <PostUser />
            <GetUsers />
        </>
    );
};

export default Admin;
