import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/addProduct.css";
import ApiService from "../../service/ApiService";

const AddProductPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    ApiService.getAllCategory().then((res) => setCategories(res.categoryList));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("categoryId", categoryId);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);

      const response = await ApiService.addProduct(formData);
      if (response.status === 200) {
        setMessage(response.message);
        setTimeout(() => {
          setMessage("");
          navigate("/admin/products");
        }, 3000);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.message ||
          "unable to upload product"
      );
    }
  };

  return (
    <div className="luxury-container">
      <div className="luxury-card">
        <h2 className="luxury-title">Add New Product</h2>
        {message && <div className="luxury-alert">{message}</div>}

        <div className="luxury-grid">
          {/* Left: ảnh / placeholder */}
          <div className="luxury-image-section">
            <div className="img-wrapper">
              {imageUrl ? (
                <img src={imageUrl} alt="preview" className="luxury-img" />
              ) : (
                <div className="img-placeholder">No Image</div>
              )}
            </div>
            <label className="btn-upload">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="luxury-form">
            <div className="field-group">
              <label>Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field-group">
              <label>Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="field-group">
              <label>Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Product description"
                required
              />
            </div>

            <div className="field-group">
              <label>Price</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddProductPage;
