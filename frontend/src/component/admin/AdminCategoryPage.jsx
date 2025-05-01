import React, { useState, useEffect } from "react";
import ApiService from "../../service/ApiService";
import { useNavigate } from "react-router-dom";
import "../../style/adminCategory.css";

const AdminCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await ApiService.getAllCategory();
      setCategories(response.categoryList || []);
    } catch (error) {
      console.log("Error fetching category list", error);
    }
  };

  const handleEdit = async (id) => {
    navigate(`/admin/edit-category/${id}`);
  };
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are your sure you want to delete this category? "
    );
    if (confirmed) {
      try {
        await ApiService.deleteCategory(id);
        fetchCategories();
      } catch (error) {
        console.log("Error deleting category by id");
      }
    }
  };

  return (
    <div className="ac-container">
      <header className="ac-header">
        <h1>Categories</h1>
        <button
          className="ac-btn ac-btn-primary"
          onClick={() => navigate("/admin/add-category")}
        >
          + Add Category
        </button>
      </header>

      <div className="ac-grid">
        {categories.map((cat) => (
          <div className="ac-card" key={cat.id}>
            <div className="ac-card-body">
              <span className="ac-card-title">{cat.name}</span>
            </div>
            <div className="ac-card-actions">
              <button
                className="ac-btn ac-btn-outline"
                onClick={() => handleEdit(cat.id)}
              >
                Edit
              </button>
              <button
                className="ac-btn ac-btn-danger"
                onClick={() => handleDelete(cat.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategoryPage;
