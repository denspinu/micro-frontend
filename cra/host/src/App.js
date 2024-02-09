import React from 'react';
import CustomComponent from './CustomComponent';
import PokemonInfo from './pokemonInfo/pokemonInfo';

const RemoteButton = React.lazy(() => import('remote/Button'));
const RemoteHeader = React.lazy(() => import('sharedComponents/Header'));
const RemoteFooter = React.lazy(() => import('sharedComponents/Footer'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <RemoteHeader />
    </React.Suspense>
    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <CustomComponent message="Hello from CustomComponent!" />
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <PokemonInfo/>
    <React.Suspense fallback="Loading Footer">
      <RemoteFooter />
    </React.Suspense>
  </div>
);

export default App;