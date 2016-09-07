import React, { PropTypes, Component } from 'react'
import MasterDetailsContainer from '../global/masterDetailsContainer'
import reservationsSchema from '../../schemas/reservationSchema'
import reservationColumnDefs from '../../columnDefs/reservationColumnDefs'

const ReservationsContainer = React.createClass({
  render: function() {
    return (
      <div>
        <MasterDetailsContainer
          schema={reservationsSchema}
          collectionName="reservations"
          columnDefs={reservationColumnDefs}
        />
      </div>
    )
  }
})

export default ReservationsContainer
