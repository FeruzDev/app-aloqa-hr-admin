import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MainSideBar from "../components/MainSideBar";
import MainNavbar from "../components/MainNavbar";
import Employees from "../pages/Employees";
import Profile from "../pages/Employees/Profile";
import ProfileEdit from "../pages/Employees/ProfileEdit";
import ProfileCreate from "../pages/Employees/ProfileCreate";
import Statistika from "../pages/Statistika";
import StatistikaDetail from "../pages/Statistika/StatistikaDetail";

const MainLayout = () => {
    return (
        <div className="main-layout-design">

            <div className="left-side">
                <MainSideBar />
            </div>
            <div className="right-side">
                <MainNavbar />
                <Switch>
                    <Route path="/home/home-page" exact component={Home} />
                    <Route path="/home/employees" exact component={Employees} />
                    <Route path="/home/employees/profile" exact component={Profile} />
                    {/*<Route path="/home/employees/profile/view" exact component={ProfileEdit} />*/}
                    <Route path="/home/employees/profile/edit" exact component={ProfileEdit} />
                    <Route path="/home/employees/profile/create" exact component={ProfileCreate} />
                    <Route path="/home/statistika" exact component={Statistika} />
                    <Route path="/home/statistika/detail" exact component={StatistikaDetail} />
                </Switch>
            </div>

        </div>
    );
};

export default MainLayout;