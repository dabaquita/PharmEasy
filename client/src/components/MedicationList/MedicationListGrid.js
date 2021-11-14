import * as React from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'Medication', width: 130 },
    { field: 'Directions', width: 180 },
    { field: 'Quantity', type: 'number', width: 130 },
    { field: 'Refills', type: 'number' },
    { field: 'Prescriber', type: String, width: 180 },
    { field: 'Use' , width: 200},
  ];
  
const rows = [
  {
    id: 1,
    Medication: 'Lisinopril 5mg',
    Directions: 'Take 1 tablet by mouth once daily',
    Quantity: 30,
    Refills: 2,
    Prescriber: 'Lim, Kenneth MD',
    Use: 'Blood Pressure',
  },
  {
      id: 2,
      Medication: 'Amlodipine 5mg',
      Directions: 'Take 1 tablet by mouth once daily',
      Quantity: 90,
      Refills: 2,
      Prescriber: 'Lim, Kenneth MD',
      Use: 'Blood Pressure',

    },
    {
      id: 3,
      Medication: 'Metformin 500mg',
      Directions: 'Take 1 tablet by mouth twice daily',
      Quantity: 60,
      Refills: 0,
      Prescriber: 'Lim, Kenneth MD',
      Use: 'Blood Glucose',
    },
    {
      id: 4,
      Medication: 'Fioricet 50mg',
      Directions: 'Take 1 tablet by mouth at onset of migraine',
      Quantity: 20,
      Refills: 1,
      Prescriber: 'Torres, Gary MD',
      Use: 'Migraine/Headache',

    },
    {
      id: 5,
      Medication: 'Novolin 70/30',
      Directions: 'Inject 10 units subcutaneously after every meal',
      Quantity: 20,
      Refills: 0,
      Prescriber: 'Lim, Kenneth MD',
      Use: 'Blood Glucose',

    },
];
  
export default function ComparatorSortingGrid() {
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'Medication',
      sort: 'asc',
    },
  ]);

  return (
    <div style={{ height: "50vh", width: "75%" }}>
      <DataGrid
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );

}

