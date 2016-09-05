import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';

import GridActionColumn from '../components/gridActionColumn'
import reservationActionTypes from '../actionTypes/app/reservationActionTypes'

export default columnDefs = [
  {field: "dateTime", headerName: "Date & Time"},
  {field: "name", headerName: "Name"},
  {field: "partyNumber", headerName: "Number"},
  {field: "status",
    headerName: "Status",
    collapseOnScreenWidth: 1000,
    cellRenderer: reactCellRendererFactory(GridActionColumn),
    
  }
];
