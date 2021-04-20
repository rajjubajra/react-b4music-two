import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

/** ROOT STYLE FILE */
import './Router.scss';



import Copyright from '../BootstrapFive/Copyright/Copyright';
import MusicTwo from '../BootstrapFive/02MusicTwo/MusicTwo';



const Router = () => {



  return (
    <BrowserRouter basename={`/react/b4music-two`}>
      <Switch>
        <MusicTwo />
      </Switch>
      <Copyright />
    </BrowserRouter>
  )
}

export default Router
