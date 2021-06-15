import React, { lazy, Suspense } from 'react';

const LazyRegister = lazy(() => import('./Register' /* webpackChunkName: "Register" */));

const Register = props => (
  <Suspense fallback={null}>
    <LazyRegister {...props} />
  </Suspense>
);

export default Register;
