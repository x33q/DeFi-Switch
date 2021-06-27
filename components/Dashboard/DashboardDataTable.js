import * as React from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function CustomToolbar() {
  return (
    <GridToolbarContainer
    style={{
      width: '100%',
      backgroundColor: 'rgba(0,0,0,0.05)',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 0',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
    }}>
      <GridToolbarColumnsButton style={{color: '#999'}} />
      <GridToolbarFilterButton style={{color: '#999', marginLeft: '10px'}} />
      <GridToolbarDensitySelector style={{color: '#999', marginLeft: '10px'}} />
      <GridToolbarExport style={{color: '#999', marginLeft: '10px'}} />
    </GridToolbarContainer>
  );
}

export default function CustomToolbarGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 9,
  });

  return (
    <div style={{
      height: 600,
      width: '100%',
      backgroundColor: '#FFF',
    }}>
      <DataGrid
        {...data}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
