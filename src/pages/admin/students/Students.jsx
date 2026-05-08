import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../../features/studentSlice";

import DataTable from "../../../components/admin/DataTable";
import TableSearch from "../../../components/admin/TableSearch";
import TableFilter from "../../../components/admin/TableFilter";

const Students = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Students</h2>

      <TableSearch />
      <TableFilter />

      <DataTable
        columns={["Name", "Email", "Department"]}
        data={list.map((s) => [s.name, s.email, s.department])}
      />
    </div>
  );
};

export default Students;