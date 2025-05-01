package org.example.service.interf;

import org.example.dto.OrderRequest;
import org.example.dto.Response;
import org.example.enums.OrderStatus;
import org.springframework.data.domain.Pageable;
import java.time.LocalDateTime;

public interface OrderItemService {
    Response placeOrder(OrderRequest orderRequest);
    Response updateOrderItemStatus(Long orderItemId, String status);
    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}