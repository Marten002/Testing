import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Routes } from './routes'

import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'

import './App.scss'

const App = () => {
    return (
        <Suspense fallback={
            'preloader'
        }>
            <Router>
                <div className="app">
                    <Header/>
                    <Switch>
                        <Route exact path={Routes.index}>
                            <Home/>
                        </Route>
                        <Route path={Routes.page.football}>
                            <Home/>
                        </Route>
                        <Route path={Routes.page.hockey}>
                            <Home/>
                        </Route>
                        <Route path={Routes.page.tennis}>
                            <Home/>
                        </Route>
                        <Route path={Routes.page.basketball}>
                            <Home/>
                        </Route>
                        <Route exact path={Routes.auth.entry}>
                            sing in
                        </Route>
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        </Suspense>
    )
}

export default App
