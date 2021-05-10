import React from 'react';
import {Provider} from "react-redux";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import store from "../redux";
import Login from "./login";
import Albums from "./albums";
import AlbumImg from "./albumImg";

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={() => <Login/>}/>
                    <Route exact path='/albums' component={() => <Albums/>}/>
                    <Route exact path='/albums/:albumId' component={() => <AlbumImg/>}/>

                </Switch>
            </BrowserRouter>
        </Provider>

    );
};

export default Root;