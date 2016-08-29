import React, {Component, PropTypes} from 'react';

import {AgGridReact} from 'ag-grid-react';
import {reactCellRendererFactory} from 'ag-grid-react';
import {reactFilterFactory} from 'ag-grid-react';

import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

var Grid = React.createClass({
  propTypes: {
    columnDefs: PropTypes.array.isRequired,
    rowData: PropTypes.array.isRequired,
    options: PropTypes.object
  },
  onGridReady: function(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;
  },
  componentDidMount: function() {
    //Autoset column sizes
    var allColumnIds = [];
    this.refs.agGrid.gridOptions.columnDefs.forEach( function(columnDef) {
      allColumnIds.push(columnDef.field);
    });
    this.refs.agGrid.gridOptions.columnApi.autoSizeColumns(allColumnIds);

    this.refs.agGrid.gridOptions.api.sizeColumnsToFit()
  },
  render: function() {
    return (
      <div className="container">
        <div className="ag-fresh">
          <AgGridReact
            width={options.width || 700}
            rowData={this.params.rowData}
            columnDefs={this.params.columnDefs}
          />
        </div>
      </div>
    );
  }
})

export default Grid;
