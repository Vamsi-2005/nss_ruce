import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../../../features/gallerySlice";

import GallerySearch from "./GallerySearch";

const Gallery = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((s) => s.gallery);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  const filtered = list.filter((img) =>
    img.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-page">
      <h1 className="section-title">Gallery</h1>

      <GallerySearch value={search} onChange={setSearch} />

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {filtered.map((img) => (
          <div key={img._id} className="card">
            <img src={img.url} alt="" className="rounded mb-2" />
            <p className="text-sm">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;