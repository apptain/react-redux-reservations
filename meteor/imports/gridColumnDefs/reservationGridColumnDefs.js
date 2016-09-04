import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';

import GridActionColumn from '../components/gridActionColumn'
import reservationActionTypes from '../actionTypes/reservationActionTypes'



export default columnDefs = [
  {field: "dateTime", headerName: "Date & Time"},
  {field: "name", headerName: "Name"},
  {field: "partyNumber", headerName: "Number"},
  {field: "status",
    headerName: "Status",
    //TODO Reorganize/supplement from here down
    //Move to master detail display settings
    collapseOnScreenWidth: 1000,
    //Review and build on reactCellRenderFactory?
    cellRenderer: reactCellRendererFactory(GridActionColumn),
    //Move to container in abstract way
    changeInitiators: reservationActionTypes.changeIniators,
    onSelect: reservationActions
  }
];
