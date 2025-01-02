import React, { useEffect, useState } from 'react'
import CustomTable from './components'
import './test.css'
const Companies = [
  {
    id: 1,
    name: 'Daraz',
    key: 'daraz',
    subdomain: 'daraz.ordermade.com',
    created_at: '2023-01-15'
  },
  {
    id: 2,
    name: 'Amazon',
    key: 'amazon',
    subdomain: 'amazon.ordermade.com',
    created_at: '2023-03-10'
  },
  {
    id: 3,
    name: 'Foodpanda',
    key: 'foodpanda',
    subdomain: 'foodpanda.ordermade.com',
    created_at: '2023-05-20'
  }
]
const App: React.FC = () => {
  const [selectCompnay, setSelectedCompnay] = useState('')
  return (
    <div className='p-4'>
      <div className='company-container'>
        {Companies.map(c => <div className='company-name' onClick={() => setSelectedCompnay(c.key)}>{c.name}</div>)}
      </div>
     
     {selectCompnay && <CustomTable selectCompnay={selectCompnay} />}
    </div>
  )
}

export default App
