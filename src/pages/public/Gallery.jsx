import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGallery } from "../../features/gallerySlice";

import GalleryCard from "../../components/gallery/GalleryCard";

const Gallery = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {list.map((img) => (
          <GalleryCard key={img._id} image={img} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;