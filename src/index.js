import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Info from './components/Info';
import Timetable from './components/Timetable';
import Equipment from './components/Equipment';
import Contact from './components/Contact';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/info' component={Info}/>
            <Route path='/timetable' component={Timetable}/>
            <Route path='/equipment' component={Equipment}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </BrowserRouter>)
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
