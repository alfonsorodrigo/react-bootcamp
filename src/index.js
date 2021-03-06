import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import {createBrowserHistory}from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import './index.css';
import Header from './components/Header';

ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch>
        <Route exact={true} path='/' render={() => <Header><App /></Header>}/>
        <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        <Route path='/music-master' render={() => <Header><MusicMaster /></Header>} />
    </Switch>
</Router>, 
document.getElementById('root')
)
