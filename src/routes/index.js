import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("./../routes/home"));

const AppRoutes = () => (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route path="*" component={() => <Home />} />
    </Switch>
  </Suspense>
);

export default AppRoutes;
