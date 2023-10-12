import React from 'react';
import {Route, Switch} from "react-router-dom";
import VisitorNavbar from "../components/VisitorNavbar";
import VisitorSideBar from "../components/VisitorSideBar";
import Camera from "../pages/Camera";

const MainLayoutVisitor = () => {
    return (
        <div className="main-layout-design">

            <div className="left-side">
                <VisitorSideBar />
            </div>
            <div className="right-side">
                <VisitorNavbar />
                <Switch>
                    <Route path="/visitor-home" exact component={Camera} />

                </Switch>
            </div>

        </div>
    );
};

export default MainLayoutVisitor;