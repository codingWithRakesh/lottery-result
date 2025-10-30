import React from 'react'

const TableComponent = ({header, body}) => {
    return (
       <div className="max-w-7xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full min-w-max divide-y divide-gray-200 border border-gray-300">
      <thead className="bg-blue-400">
        <tr>
          {header.map((header) => (
            <th
              key={header}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider border-r border-white last:border-r-0"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {body.map((item, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
          >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
              {item.dream || item.city}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
              {item.direct || item.date}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
              {item.house || item.fr}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {item.ending || item.sr}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    )
}

export default TableComponent