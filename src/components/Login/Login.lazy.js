import React, { lazy, Suspense } from 'react';

const LazyLogin = lazy(() => import('./Login'));

const Login = props => (
  <Suspense fallback={<h1>Still Loading…</h1>}>
    <LazyLogin {...props} />
  </Suspense>
);

export default Login;
