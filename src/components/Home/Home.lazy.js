import React, { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./Home' /* webpackChunkName: "Home" */));

const Home = props => (
  <Suspense fallback={null}>
    <LazyHome {...props} />
  </Suspense>
);

export default Home;
