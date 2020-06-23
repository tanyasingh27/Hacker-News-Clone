import React from 'react';
import Stories from '../../containers/Stories/Stories';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Layout.css';
import { Route, Switch, Redirect } from 'react-router-dom';

const layout = () => {
    return (
        <div className='layout'>
            <Navbar/>
            <Switch>
             <Route path="/news" render={() => <Stories type="topstories"/>}/>
             <Route path="/newest" render={() => <Stories type="newstories"/>}/>
             <Route path="/ask" render={() => <Stories type="askstories"/>}/>
             <Route path="/show" render={() => <Stories type="showstories"/>}/>
             <Route path="/jobs" render={() => <Stories type="jobstories"/>}/>
             <Redirect from="/" to="/news"/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default layout;