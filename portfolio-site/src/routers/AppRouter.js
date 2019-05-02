import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioItemPage from '../components/PortfolioItemPage';
import PortfolioPage from '../components/PortfolioPage';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
      <Route path="/" component={HomePage} exact={true}/>
      <Route path="/portfolio" component={PortfolioPage} exact={true}/> 
      <Route path="/portfolio/:id" component={PortfolioItemPage} exact={true}/>
      <Route path="/contact" component={ContactPage} exact={true}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;