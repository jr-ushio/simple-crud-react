import React, { lazy, Suspense } from 'react';

const LazyEdit = lazy(() => import('./Edit' /* webpackChunkName: "Edit" */));

const Edit = props => (
  <Suspense fallback={null}>
    <LazyEdit {...props} />
  </Suspense>
);

export default Edit;
