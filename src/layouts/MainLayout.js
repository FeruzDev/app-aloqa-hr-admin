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
import Audit from "../pages/Audit";
import Reports from "../pages/Reports";
import Users from "../pages/Users";
import EditUser from "../pages/Users/EditUser";
import AddUser from "../pages/Users/AddUser";
import Notification from "../pages/Notification";
import NotificationEdit from "../pages/Notification/NotificationEdit";
import NotificationAdd from "../pages/Notification/NotificationAdd";
import Departments from "../pages/Departments";
import DepartmentsEdit from "../pages/Departments/DepartmentsEdit";
import DepartmentsAdd from "../pages/Departments/DepartmentsAdd";

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
                    <Route path="/home/audit" exact component={Audit} />
                    <Route path="/home/report" exact component={Reports} />
                    <Route path="/home/users" exact component={Users} />
                    <Route path="/home/users/edit" exact component={EditUser} />
                    <Route path="/home/users/add-user" exact component={AddUser} />
                    <Route path="/home/notification" exact component={Notification} />
                    <Route path="/home/notification/notification-edit" exact component={NotificationEdit} />
                    <Route path="/home/notification/notification-add" exact component={NotificationAdd} />
                    <Route path="/home/departments" exact component={Departments} />
                    <Route path="/home/departments/departments-edit" exact component={DepartmentsEdit} />
                    <Route path="/home/departments/departments-add" exact component={DepartmentsAdd} />
                </Switch>
            </div>

        </div>
    );
};

export default MainLayout;