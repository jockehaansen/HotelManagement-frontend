import { useState, useEffect } from 'react'

const Customers = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/customers', {
          method: 'GET',
        })
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }

    fetchData()
  }, [])

  const handleUpdateClick = (id) => {
    console.log(`Update clicked for customer with id: ${id}`)
  }
  const handleAddressClick = (id) => {
    console.log(`Address clicked for customer with id: ${id}`)
  }
  const handleBookingsClick = (id) => {
    console.log(`Bookings clicked for customer with id: ${id}`)
  }

  return (
    <div>
      <h1 className="bg-gray-500 text-white p-4">Customers</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
              Firstname
            </th>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
              Lastname
            </th>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
              PhoneNumber
            </th>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
              Bookings
            </th>
            <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((customer, index) => (
            <tr
              key={customer.id}
              className={index % 2 == 0 ? 'bg-white' : 'bg-gray-200'}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.firstName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {customer.phoneNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{customer.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                  onClick={() => handleAddressClick(customer.id)}
                >
                  Address
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                  onClick={() => handleBookingsClick(customer.id)}
                >
                  Bookings
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                  onClick={() => handleUpdateClick(customer.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Customers
