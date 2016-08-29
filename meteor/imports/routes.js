import React from 'react'
import {Route, IndexRoute} from 'react-router'

import ReservationsContainer from './containers/reservationsContainer'



export default (
  <Route>
    <Route path="/" component={ReservationsContainer}/>
  </Route>
)
