import React from 'react';
import LocalButton from './Button';
import AnotherComponent from './AnotherComponent';

const RemoteHeader = React.lazy(() => import('sharedComponents/Header'));
const RemoteFooter = React.lazy(() => import('sharedComponents/Footer'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <RemoteHeader />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Remote</h2>
    <AnotherComponent content="Content from AnotherComponent!" />
    <LocalButton />
    <React.Suspense fallback="Loading Footer">
      <RemoteFooter />
    </React.Suspense>
  </div>
);

export default App;
