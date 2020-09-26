import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";

const SplashScreen = lazy(() => import("./pages/splash-screen/SplashScreen"));

const CustomRouter = () => (
  <Suspense fallback={<div>loading ...</div>}>
    <Route path="/" exact component={SplashScreen} />
    <Route path="/splash-screen" component={SplashScreen} />
  </Suspense>
);

CustomRouter.defaultName = "CustomRouter";

export default CustomRouter;
