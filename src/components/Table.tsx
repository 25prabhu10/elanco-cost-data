import { DataGrid, GridColumns, GridRowsProp } from '@mui/x-data-grid'

type AppProps = {
  rows: GridRowsProp
  columns: GridColumns
}

export default function Table({ rows, columns }: AppProps) {
  return (
    <div style={{ height: '75vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[10, 25, 50, 100]}
      />
    </div>
  )
}
