import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import '@/assets/js/rem'
import '@/assets/css/reset.scss'
import '@/assets/css/app.scss'
import '@/assets/css/list.scss'
import '@/assets/css/detail.scss'

import Store from '@/redux/store'
import {View as AppView} from '@/app/index'
import {View as HomeView} from '@/home/index'
import {View as ListView} from '@/list/index'
import {View as DetailView} from '@/detail/index'

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route exact path="/list" component={ListView}></Route>
          <Route path="/list/:productId" component={DetailView}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);