import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
  const Pagina404 = () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>¯\_(ツ)_/¯ Ops, Deu pau na maquina ¯\_(ツ)_/¯</h2>
      <p>
        <a href="/"><strong>Você pode jogar ou voltar para HOME</strong></a>
      </p>
      <iframe title="Flappy Bird Game"
        src="https://flappy-bird-blue.vercel.app/"
        width="370"
        height="550"
      />
    </div>
  )
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />

        <Route component={Pagina404} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;