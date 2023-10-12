import React from 'react';
import {Link} from "react-router-dom";

const MainSideBar = () => {
    return (
        <div className="main-side-bar">
          <div className="my-side-fix">
              <div className="top-logo">
                  <h3>Aloqa HR Admin</h3>
                  <button><img src="/icon/logout.svg" alt="logout"/></button>
              </div>
              <div className="menu-list">
                  <div className="menu-list-item">
                      <Link to="/home/home-page" className="link-item-style link-item-style-active">
                          <img src="/icon/Icon1.svg" alt=""/>
                          <span>Главная страница</span>
                      </Link>
                      <Link to="/home/employees" className="link-item-style">
                          <img src="/icon/Icon2.svg" alt=""/>
                          <span>Cотрудники</span>
                      </Link>
                      <Link to="/home/statistika" className="link-item-style">
                          <img src="/icon/Icon3.svg" alt=""/>
                          <span>Статистика</span>
                      </Link>
                      {/*<Link to="/home/home-page" className="link-item-style">*/}
                      {/*    <img src="/icon/Icon4.svg" alt=""/>*/}
                      {/*    <span>Аналитика</span>*/}
                      {/*</Link>*/}
                      <Link to="/home/report" className="link-item-style">
                          <img src="/icon/Icon5.svg" alt=""/>
                          <span> Отчеты</span>
                      </Link>
                      <Link to="/home/audit" className="link-item-style">
                          <img src="/icon/Icon6.svg" alt=""/>
                          <span>Аудит</span>
                      </Link>
                      <Link to="/home/home-page" className="link-item-style">
                          <img src="/icon/Icon7.svg" alt=""/>
                          <span>Пользователи</span>
                      </Link>
                      <Link to="/home/home-page" className="link-item-style">
                          <img src="/icon/Icon8.svg" alt=""/>
                          <span>Уведомления</span>
                      </Link>
                      {/*<Link to="/home/home-page" className="link-item-style">*/}
                      {/*    <img src="/icon/Icon9.svg" alt=""/>*/}
                      {/*    <span>Филиалы</span>*/}
                      {/*</Link>*/}
                      <Link to="/home/home-page" className="link-item-style">
                          <img src="/icon/Icon10.svg" alt=""/>
                          <span>Отделы</span>
                      </Link>
                      <Link to="/home/home-page" className="link-item-style">
                          <img src="/icon/Icon11.svg" alt=""/>
                          <span>Режимы</span>
                      </Link>
                      <Link to="/home/home-page" className="link-item-style">
                          <img src="/icon/Icon12.svg" alt=""/>
                          <span>Должность</span>
                      </Link>
                  </div>
                  <div className="menu-list-bottom">
                      <div className="left-img-center">
                          <div className="left-img">
                              <img src="/icon/Avatar.png" alt="Avatar"/>
                          </div>
                          <div className="center-content">
                              <h5 className="font-family-medium">Shoxrux R.</h5>
                              <h6> 99 877 34 22</h6>
                          </div>
                      </div>
                      <div className="right-dot">
                          <button type="submit"><img src="/icon/verdot.svg" alt="..."/></button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default MainSideBar;