import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonors } from "../../../features/donorSlice";

import DonorSearch from "./DonorSearch";
import DonorFilter from "./DonorFilter";
import DataTable from "../../../components/admin/DataTable";

const BloodDonors = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.donors);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchDonors());
  }, [dispatch]);

  // 🔍 Search + Filter
  const filtered = list
    .filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((d) => (filter ? d.blood === filter : true));

  return (
    <div className="container-page">
      <h1 className="section-title">Blood Donors</h1>

      <div className="flex gap-4 mb-4">
        <DonorSearch value={search} onChange={setSearch} />
        <DonorFilter value={filter} onChange={setFilter} />
      </div>

      <DataTable
        columns={["Name", "Blood Group", "Phone"]}
        data={filtered.map((d) => [d.name, d.blood, d.phone])}
      />
    </div>
  );
};

export default BloodDonors;