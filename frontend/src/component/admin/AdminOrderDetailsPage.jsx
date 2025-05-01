import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../style/adminOrderDetails.css'
import ApiService from "../../service/ApiService";


const OrderStatus = ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED", "RETURNED"];

const AdminOrderDetailsPage = () => {
    const { itemId } = useParams();
    const [orderItems, setOrderItems] = useState([]);
    const [message, setMessage] = useState('');
    const [selectedStatus, setSelectedStatus] = useState({});


    useEffect(() => {
        fetchOrderDetails(itemId);
    }, [itemId]);

    const fetchOrderDetails = async (itemId) => {
        try {
            const response = await ApiService.getOrderItemById(itemId);
            setOrderItems(response.orderItemList)
        } catch (error) {
            console.log(error.message || error);
        }
    }

    const handleStatusChange = (orderItemId, newStatus) => {
        setSelectedStatus({ ...selectedStatus, [orderItemId]: newStatus })
    }

    const handleSubmitStatusChange = async (orderItemId) => {
        try {
            await ApiService.updateOrderitemStatus(orderItemId, selectedStatus[orderItemId]);
            setMessage('Order item status was successfully updated')
            setTimeout(() => {
                setMessage('');
            }, 3000)
        } catch (error) {
            setMessage(error.response?.data?.message || error.message || 'unable  to update order item status')
        }
    }

    return (
        <div className="order-details-page">
          {message && <div className="toast">{message}</div>}
          <h1 className="page-title">Order Details</h1>
    
          {orderItems.map((item) => (
            <div key={item.id} className="detail-card">
              {/* Order Info */}
              <div className="section">
                <h2 className="section-title">Order Information</h2>
                <div className="info-grid">
                  <div><strong>Order Item ID:</strong> {item.id}</div>
                  <div><strong>Quantity:</strong> {item.quantity}</div>
                  <div><strong>Total Price:</strong> ${item.price}</div>
                  <div><strong>Status:</strong> {item.status}</div>
                  <div>
                    <strong>Placed On:</strong>{" "}
                    {new Date(item.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
    
              {/* User Info */}
              <div className="section">
                <h2 className="section-title">User Information</h2>
                <div className="info-grid">
                  <div><strong>Name:</strong> {item.user.name}</div>
                  <div><strong>Email:</strong> {item.user.email}</div>
                  <div><strong>Phone:</strong> {item.user.phoneNumber}</div>
                  <div><strong>Role:</strong> {item.user.role}</div>
                </div>
              </div>
    
              {/* Delivery Address */}
              <div className="section">
                <h2 className="section-title">Delivery Address</h2>
                <div className="info-grid">
                  <div><strong>Country:</strong> {item.user.address?.country}</div>
                  <div><strong>State:</strong> {item.user.address?.state}</div>
                  <div><strong>City:</strong> {item.user.address?.city}</div>
                  <div><strong>Street:</strong> {item.user.address?.street}</div>
                  <div><strong>Zip Code:</strong> {item.user.address?.zipCode}</div>
                </div>
              </div>
    
              {/* Product Info */}
              <div className="section product-section">
                <h2 className="section-title">Product Information</h2>
                <div className="product-card">
                  <img src={item.product.imageUrl} alt={item.product.name} />
                  <div className="product-details">
                    <h3>{item.product.name}</h3>
                    <p>{item.product.description}</p>
                    <p className="price">${item.product.price}</p>
                  </div>
                </div>
              </div>
    
              {/* Status Control */}
              <div className="section status-control">
                <label htmlFor={`status-${item.id}`}>Change Status:</label>
                <div className="status-actions">
                  <select
                    id={`status-${item.id}`}
                    value={selectedStatus[item.id] || item.status}
                    onChange={(e) => handleStatusChange(item.id, e.target.value)}
                  >
                    {OrderStatus.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => handleSubmitStatusChange(item.id)}>Update</button>
                </div>
              </div>
            </div>
          ))}
    
          {!orderItems.length && <p className="empty">Loading order details...</p>}
        </div>
    );

}

export default AdminOrderDetailsPage;