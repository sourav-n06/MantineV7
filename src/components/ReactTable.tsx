import React from 'react'
import jsonData from '../utils/Mock.json'
import { Table, TableData } from '@mantine/core';

function ReactTable() {
  const rows = jsonData .map((element) =>{
    const country: string = element.Country;
    const year: string = element.Year;
    const cropName: string = element["Crop Name"]; // Accessing property with spaces
    const cropProduction: string = (element["Crop Production (UOM:t(Tonnes))"] ==="" ? 0 : element["Crop Production (UOM:t(Tonnes))"]).toString(); // Accessing property with special characters
    const yieldOfCrops: string = (element["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] === "" ? 0 : element["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]).toString(); // Accessing property with special characters
    const areaUnderCultivation: string = (element["Area Under Cultivation (UOM:Ha(Hectares))"] === "" ? 0 : element["Area Under Cultivation (UOM:Ha(Hectares))"]).toString(); // Accessing property with special characters

    return (
    <Table.Tr key={areaUnderCultivation} className='border-b-2 border-black'>
      <Table.Td className='text-center p-4'>{country}</Table.Td>
      <Table.Td className='text-center p-4'>{year}</Table.Td>
      <Table.Td className='text-center p-4'>{cropName}</Table.Td>
      <Table.Td className='text-center p-4'>{cropProduction}</Table.Td>
      <Table.Td className='text-center p-4'>{yieldOfCrops}</Table.Td>
      <Table.Td className='text-center p-4'>{areaUnderCultivation}</Table.Td>
    </Table.Tr>
  )
});


  return (
      <Table className='w-screen'>
        <Table.Thead className='w-screen'>
          <Table.Tr className='w-screen bg-violet-300 flex-auto'>
            <Table.Th>Country</Table.Th>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop Name</Table.Th>
            <Table.Th>Crop Production (Tonnes)</Table.Th>
            <Table.Th>Yield Of Crops (KilogramperHectare)</Table.Th>
            <Table.Th>Area Under Cultivation (Hectares)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className= " bg-indigo-0">{rows}</Table.Tbody>
      </Table>
  );
}

export default ReactTable

