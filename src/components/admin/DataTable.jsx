const DataTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto bg-white shadow rounded">
      <table className="w-full text-left">
        <thead className="bg-green-800 text-white">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-3">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-100">
              {Object.values(row).map((val, j) => (
                <td key={j} className="p-3">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;