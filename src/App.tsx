import { GridColDef } from '@mui/x-data-grid'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'

type Data = {
  ResourceGroup: string
  ServiceName: string
  Cost: number
  ConsumedQuantity: number
  Date: string
  Location: string
  Tags: {
    environment: string
  }
}

const columns: GridColDef<Data>[] = [
  { field: 'serviceName', headerName: 'Service Name', width: 200 },
  { field: 'resourceGroup', headerName: 'Resource Group', width: 200 },
  {
    field: 'consumedQuantity',
    headerName: 'Consumed Quantity',
    type: 'number',
    width: 200,
  },
  { field: 'cost', headerName: 'Cost', type: 'number', width: 130 },
  { field: 'date', headerName: 'Date', type: 'date', width: 130 },
  {
    field: 'location',
    headerName: 'Location',
    type: 'date',
    width: 130,
  },
  {
    field: 'environment',
    headerName: 'Environment',
    width: 130,
  },
]

function App() {
  const [rowsData, setRowsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://engineering-task.elancoapps.com/api/raw',
      )

      const data = await response.json()

      setRowsData(
        data.map((item: Data) => {
          return {
            id: nanoid(),
            serviceName: item.ServiceName,
            resourceGroup: item.ResourceGroup,
            cost: Number(item.Cost),
            date: item.Date,
            consumedQuantity: Number(item.ConsumedQuantity),
            location: item.Location,
            environment: item.Tags.environment,
          }
        }),
      )
    }

    fetchData()
  }, [])

  return (
    <>
      <h1>List of Resources</h1>
      <Table columns={columns} rows={rowsData} />
    </>
  )
}

export default App
