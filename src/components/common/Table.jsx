const Table = ({ columns, data }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col, i) => (
            <th key={i} className="p-2 border">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="p-2 border">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;