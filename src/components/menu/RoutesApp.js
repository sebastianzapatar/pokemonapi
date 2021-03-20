import React from 'react'
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import { AcercaDe } from '../AcercaDe'
import { BuscarPokemon } from '../BuscarPokemon'
import { Home } from '../Home'
import { ErrorApp } from './ErrorApp'
import { Menu } from './Menu'
export const RoutesApp = () => {
    return (
        <div>
            <Router>
                <Menu />
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/buscar" component={BuscarPokemon} />
                    <Route exa path="/acercade" component={AcercaDe} />
                    <Route exact path="/" component={Home} />
                    <Route component={ErrorApp} />
                </Switch>
            </Router>
        </div>
    )
}
