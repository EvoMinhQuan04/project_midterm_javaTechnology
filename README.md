# README FOR SPRING ECOMMERCE PROJECT - JAVA TECHNOLOGY

Giới thiệu tổng quan về dự án
---------------------------------

**SpringCommerce** là một ứng phần mềm trực tuyến đơn giản được xây dựng bằng **Java Spring Boot**. Mục tiêu chính của dự án này là triển khai một Sản phẩm khả dụng tối thiểu (MVP - Minimum Viable Product) thể hiện được các chức năng cơ bản của một nền tảng thương mại điện tử bao gồm hiển thị danh sách sản phẩm, tìm kiếm và lọc danh sách sản phẩm theo các tiêu chí, quản lý giỏ hàng, và đặt hàng và theo dõi trạng thái sản phẩm.

Trong phần mềm này:
*   Khách hàng có thể xem được danh sách các sản phẩm được hiển thị có trong hệ thống.
*   Khách hàng có thể tìm kiếm và lọc sản phẩm theo các tiêu chí như danh mục, tên, mô tả của sản phẩm.
*   Khách hàng có thể xem chi tiết sản phẩm và thêm vào giỏ hàng, tiến hành đặt hàng.
*   Quy trình thanh toán được cũng được triển khai nhưng việc thanh toán thực hiện bằng tiền mặt khi giao hàng.
*   Dự án sử dụng **ReactJS** cho frontend, **Spring Boot** cho backend, và **MySQL** để lưu trữ dữ liệu.
    

Các Tính Năng Chính
------------------------------------
1.  **Đăng kí, đăng nhập**: Người sử dụng có thể đăng nhập, đăng kí theo email và mật khẩu.
2.  **Xem danh sách sản phẩm**: Người dùng có thể xem danh sách các sản phẩm.
3.  **Tìm kiếm & Lọc Sản phẩm**: Người dùng có thể lọc sản phẩm dựa trên danh mục, tên, mô tả, màu sắc.
4.  **Giỏ Hàng**: Người dùng có thể thêm sản phẩm vào giỏ hàng và xem nội dung giỏ hàng và tiến hành đặt hàng.
5.  **Theo Dõi Đơn Hàng**: Người dùng sau khi đặt hàng có thể xem trạng thái của đơn hàng đã đặt.
6.  **Quản Lý Sản Phẩm**: Admin có thể tạo, thêm, xóa, sửa sản phẩm.
7.  **Quản Lý Danh Mục**: Admin có thể tạo, thêm, xóa, sửa danh mục của sản phẩm.
8.  **Quản Lý Đơn Hàng**: Admin có thể cập nhật, thay đổi trạng thái của đơn hàng.


Mục Lục
----------------------------

1. [Các Nguyên Tắc, Mẫu Thiết Kế](#principles-and-patterns)

2. [Kiến Trúc Thiết Kế ](#architectural-design)
    
3. [Công Nghệ Sử Dụng](#technologies-used)
    
4. [Cấu Trúc Dự Án](#project-structure)
    
5. [Sơ Đồ ERD](#erd-diagram)
    
6. [Các Endpoint API](#api-endpoints)
    
7. [Kiểm Thử Đơn Vị](#unit-tests)
    
8. [Cài Đặt Và Thiết Lập](#installation-and-setup)
    
9. [Link Video Demo Dự án](#demo-video)

1\. Các Nguyên Tắc, Mẫu Thiết Kế.
--------------------------------------------------------------------

### **Nguyên Tắc SOLID**
Nguyên tắc SOLID là tập hợp năm quy tắc thiết kế phần mềm hướng đối tượng, giúp xây dựng hệ thống dễ bảo trì, mở rộng và thích ứng với thay đổi. SOLID bao gồm năm nguyên tắc: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation và Dependency Inversion. Trong Spring Boot, SOLID tận dụng Dependency Injection và IoC để tạo mã nguồn sạch. Dưới đây là cách áp dụng các nguyên tắc này:

