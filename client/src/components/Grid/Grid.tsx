import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface MaterialGridProps {
  gridData: Array<object>;
  columns: GridColDef[];
}

export default function Grid({ gridData, columns }: MaterialGridProps) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={gridData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
