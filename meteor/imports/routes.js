import React from 'react'
import {Route, IndexRoute} from 'react-router'

import ReservationsContainer from './containers/app/reservationsContainer'



export default (
  <Route>
    <Route path="/" component={ReservationsContainer}/>
  </Route>
)
