import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 80000 }));

store.dispatch(addExpense({ description: 'Gas Bill', amount: 45000 }));

store.dispatch(setTextFilter('bill'));

setTimeout(() => {
  store.dispatch(setTextFilter('gas'));
}, 3000)

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));