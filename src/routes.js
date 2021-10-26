import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import FormOne from './formOne';
import FormTwo from './formTwo';
import FormThree from './formThree';
import FourthForm from './fourthForm';
import Reducer from './reducer';

class Routes extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/reducer" component={Reducer} />
                    <Route path="/formfour" component={FourthForm} />
                    <Route path="/formthree" component={FormThree} />
                    <Route path="/formtwo" component={FormTwo} />
                    <Route path="/" component={FormOne} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes;