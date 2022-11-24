import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, WillForm } from '../pages';
import { HOME, WILLFORM } from './CONSTANTS';

function RouterConfig() {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={WILLFORM} element={<WillForm />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
