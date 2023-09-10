import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import DefaultLayout from "../components/DefaultLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LayoutNavSearchFooter from "../components/LayoutNavSearchFooter";
import Food from "../pages/Food";

export const publicRouters = [
  {
    path: "/",
    name: "home",
    component: Home,
    layout: LayoutNavSearchFooter,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/food",
    name: "food",
    component: Food,
    layout: LayoutNavSearchFooter,
  },
];

export const privateRouters = [];

export const adminRouters = [];

export const cookerRouters = [];

export const userRouters = [];

//Scroll Top when clicked another page
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export const RouterComponents = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* <Route exact path="/" element={<PrivateRouters />}>
                        {privateRouters.map((route, index) => {
                            const Page = route.component
                            let Layout = DefaultLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Route>
                    <Route exact path="/" element={<AdminRouters />}>
                        {adminRouters.map((route, index) => {
                            const Page = route.component
                            let Layout = DefaultLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Route>
                    <Route exact path="/" element={<UserRouters />}>
                        {userRouters.map((route, index) => {
                            const Page = route.component
                            let Layout = DefaultLayout
                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
