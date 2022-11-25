import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, WillForm } from '../pages';
import WillDisplay from '../pages/WillDisplay';
import { HOME, WILLFORM, WILLDISPLAY } from './CONSTANTS';

function RouterConfig() {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={WILLFORM} element={<WillForm />} />
        <Route exact path={WILLDISPLAY} element={<WillDisplay/>}/>
      </Routes>
    </div>
  );
}

export default RouterConfig;
