import { uploadImage } from "../../../services/galleryService";

const UploadImage = () => {

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    await uploadImage(formData);

    alert("Image Uploaded");
  };

  return (
    <div className="container-page">
      <h1 className="section-title">Upload Image</h1>

      <input type="file" onChange={handleUpload} className="input" />
    </div>
  );
};

export default UploadImage;