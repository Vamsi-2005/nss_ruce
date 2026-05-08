import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDonors } from "../../features/donorSlice";

import DonorCard from "../../components/blood/DonorCard";
import BloodFilter from "../../components/blood/BloodFilter";

const BloodFinder = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.donors);

  useEffect(() => {
    dispatch(fetchDonors());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blood Donors</h1>

      <BloodFilter />

      <div className="grid md:grid-cols-3 gap-4">
        {list.map((donor) => (
          <DonorCard key={donor._id} donor={donor} />
        ))}
      </div>
    </div>
  );
};

export default BloodFinder;