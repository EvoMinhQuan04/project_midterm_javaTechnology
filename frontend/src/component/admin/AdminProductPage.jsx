import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/adminProduct.css";
import Pagination from "../common/Pagination";
import ApiService from "../../service/ApiService";
import { FiEdit, FiTrash2, FiPlus, FiSearch } from "react-icons/fi";

const AdminProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const itemsPerPage = 5;

  const fetchProducts = async () => {
    try {
      const resp = await ApiService.getAllProducts();
      const list = resp.productList || [];
      setProducts(list);
      setFiltered(list);
      setTotalPages(Math.ceil(list.length / itemsPerPage));
    } catch (e) {
      setError(e.response?.data?.message || e.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // paginate + filter whenever filtered list or page changes
  const pageItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    const f = products.filter((p) => p.name.toLowerCase().includes(q));
    setFiltered(f);
    setTotalPages(Math.ceil(f.length / itemsPerPage));
    setCurrentPage(1);
  };

  const handleEdit = (id) => navigate(`/admin/edit-product/${id}`);
  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      try {
        await ApiService.deleteProduct(id);
        fetchProducts();
      } catch (e) {
        setError(e.response?.data?.message || e.message);
      }
    }
  };

  return (
    <div className="admin-product-page">
      {error && <p className="error-msg">{error}</p>}

      <div className="admin-header">
        <h2>Products</h2>
        <button
          className="btn-primary"
          onClick={() => navigate("/admin/add-product")}
        >
          <FiPlus /> Add Product
        </button>
      </div>

      <div className="admin-search">
        <FiSearch className="icon-search" />
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      <div className="table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>${p.price.toFixed(2)}</td>
                <td className="cell-actions">
                  <button className="btn-edit" onClick={() => handleEdit(p.id)}>Edit <FiEdit />
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(p.id)}>Delete <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AdminProductPage;
