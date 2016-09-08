import React, { PropTypes, Component } from 'react'
import {reactCellRendererFactory} from 'ag-grid-react'
import {reactFilterFactory} from 'ag-grid-react'
import EditColumnAg from '../components/global/ag/editLinkAg'

const reservationColumnDefs = React.createClass({
  render: function() {
    return (
      <div></div>
    )
  },
  columnDefs: function() {
    return [
      {field: "dateTime", headerName: "Date & Time"},
      {field: "name", headerName: "Name"},
      {field: "partyNumber", headerName: "Number"},
      {field: "status", headerName: "Status"},
      {field: "edit",
        headerName: "",
        cellRenderer: reactCellRendererFactory(EditColumnAg),
        // onClick
      }
    ]
  }
})

export default (new reservationColumnDefs).columnDefs()
