import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

const Login = lazy(() => import("./pages/login/Login"));
const Home = lazy(() => import("./pages/home/Home"));

const CustomRouter = () => (
  <Suspense fallback={<div>loading ...</div>}>
    <Route path="/" exact component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
  </Suspense>
);

CustomRouter.defaultName = "CustomRouter";

export default CustomRouter;
