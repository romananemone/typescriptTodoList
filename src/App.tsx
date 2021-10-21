import React from 'react';
import TodoList from "./pages/TodoList/TodoList";
import TodosArchive from "./pages/TodoArchive/TodosArchive";
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import LangSwitch from "./components/LangSwitch/LangSwitch";

function App(): JSX.Element {
    return (
        <div>
            <Router>
                <div className='d-flex justify-content-around p-3'>
                    <Navigation/>
                    <LangSwitch/>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/todos">
                        <TodoList/>
                    </Route>
                    <Route exact path="/archive">
                        <TodosArchive/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
