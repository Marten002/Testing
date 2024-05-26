import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Routes } from './routes'

import SingIn from './Pages/SingIn/SingIn'
import SingUp from './Pages/SingUp/SingUp'

import './App.scss'

const App = () => {
    return (
        <Suspense fallback={
            'preloader'
        }>
            <Router>
                <div className="app">
                    <Switch>
                        <Route exact path={Routes.auth.singIn}>
                            <SingIn/>
                        </Route>
                        <Route exact path={Routes.auth.singUp}>
                            <SingUp/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Suspense>
    )
}

export default App
