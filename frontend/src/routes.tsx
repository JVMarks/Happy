import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

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
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />

        <Route component={Pagina404} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes;