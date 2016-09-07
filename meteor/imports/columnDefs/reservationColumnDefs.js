import {reactCellRendererFactory} from 'ag-grid-react'
import {reactFilterFactory} from 'ag-grid-react'
import EditColumnAg from '../components/global/ag/editLinkAg'

export default columnDefs = [
  {field: "dateTime", headerName: "Date & Time"},
  {field: "name", headerName: "Name"},
  {field: "partyNumber", headerName: "Number"},
  {field: "status", headerName: "Status"},
  {field: "edit",
    headerName: "",
    cellRenderer: reactCellRendererFactory(EditColumnAg)
  }
]
