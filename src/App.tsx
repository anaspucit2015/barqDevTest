import React, { useEffect } from 'react'
import CustomTable from './components'
import './test.css'
const Companies = [
  {
    id: 1,
    name: 'Daraz',
    subdomain: 'daraz.ordermade.com',
    created_at: '2023-01-15'
  },
  {
    id: 2,
    name: 'Amazon',
    subdomain: 'amazon.ordermade.com',
    created_at: '2023-03-10'
  },
  {
    id: 3,
    name: 'Foodpanda',
    subdomain: 'foodpanda.ordermade.com',
    created_at: '2023-05-20'
  }
]
const App: React.FC = () => {
  return (
    <div className='p-4'>
      <div className='company-container'>
        {Companies.map(c => <div className='company-name'>{c.name}</div>)}
      </div>
      <h1 className='text-5xl font-bold m-5'>Companies Order Table</h1>
      <CustomTable />
    </div>
  )
}

export default App
