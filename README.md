# README FOR SPRING ECOMMERCE PROJECT - JAVA TECHNOLOGY

Giới thiệu tổng quan về dự án
-----------------------------------------------------------------

**SpringCommerce** là một phần mềm trực tuyến đơn giản được xây dựng bằng **Java Spring Boot**. Mục tiêu chính của dự án này là triển khai một Sản phẩm khả dụng tối thiểu (MVP - Minimum Viable Product) thể hiện được các chức năng cơ bản của một nền tảng thương mại điện tử bao gồm hiển thị danh sách sản phẩm, tìm kiếm và lọc danh sách sản phẩm theo các tiêu chí, quản lý giỏ hàng, và đặt hàng và theo dõi trạng thái sản phẩm.

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
-----------------------------------------------------------------

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

![markdown](https://laodongdongnai.vn/wp-content/uploads/solid-principles-la-gi.jpg)

Nguyên tắc SOLID là tập hợp năm quy tắc thiết kế phần mềm hướng đối tượng, giúp xây dựng hệ thống dễ bảo trì, mở rộng và thích ứng với thay đổi. SOLID bao gồm năm nguyên tắc: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation và Dependency Inversion. Trong Spring Boot, SOLID tận dụng Dependency Injection và IoC để tạo mã nguồn sạch. Dưới đây là cách áp dụng các nguyên tắc này:
* **S - Nguyên Tắc Trách Nhiệm Duy Nhất (SRP)**: Mỗi lớp chỉ nên có một trách nhiệm duy nhất. Ví dụ, trong Spring Boot, OrderService chỉ xử lý logic đơn hàng, còn EmailService đảm nhiệm gửi email. Điều này giúp mã dễ bảo trì và kiểm thử.
* **O – Nguyên Tắc Mở/Đóng (OCP)**: Hệ thống dễ thêm tính năng mới mà không sửa đổi cũ. Tưởng tượng chúng ta có một máy pha cà phê, muốn thêm chế độ pha trà thì chỉ cần gắn thêm bộ lọc mới. Không cần tháo cả máy ra để chỉnh sửa, giữ máy hoạt động ổn định.
* **L – Nguyên Tắc Thay Thế Liskov (LSP)**: Thành phần con thay thế được thành phần cha mà không gây lỗi. Ví dụ, bạn có một ổ cắm điện cho đèn bàn, nếu thay đèn bàn bằng đèn cây mà ổ cắm vẫn dùng được, hệ thống hoạt động bình thường. Nhưng nếu đèn cây cần loại ổ khác, hệ thống sẽ hỏng. Điều này rất quan trọng!
* **I – Nguyên Tắc Phân Tách Giao Diện (ISP)**: Không ép thành phần làm việc không cần thiết. Hình dung một chiếc điều khiển TV chỉ cần nút bật/tắt và đổi kênh cho TV cơ bản. Nếu thêm cả nút chỉnh âm thanh 3D cho TV không hỗ trợ, người dùng sẽ bối rối. Việc chia thành các giao diện nhỏ như vậy sẽ đảm bảo rằng mỗi dịch vụ chỉ xử lý trách nhiệm của riêng dịch vụ đó.
* **D – Nguyên Tắc Đảo Ngược Phụ Thuộc (DIP)**: Thành phần cấp cao phụ thuộc vào ý tưởng chung, không phụ thuộc chi tiết. Nghĩa là chỉ phụ thuộc vào các trừu trượng, không phụ thuộc vào các lớp cụ thể. Ví dụ, bạn đặt món ăn qua một ứng dụng, ứng dụng chỉ cần biết món ăn được giao, không cần biết nhà hàng cụ thể nấu món đó. Điều này giúp dễ đổi nhà hàng mà không ảnh hưởng đến ứng dụng.


### **Nguyên Tắc KISS - Keep It Sample, Stupid**
Nguyên tắc KISS (Keep It Simple, Stupid) là một nguyên lý thiết kế phần mềm quan trọng, khuyến khích lập trình viên đơn giản hóa thiết kế, cấu trúc và triển khai mã nguồn ở mức tối đa. Thay vì tạo ra những đoạn mã phức tạp, dài dòng hay khó hiểu, nguyên tắc KISS đề xuất việc xây dựng các chức năng một cách rõ ràng, đơn giản và dễ quản lý.

Việc áp dụng nguyên tắc này trong dự án Spring Boot giúp hệ thống dễ dàng bảo trì, nâng cấp, giảm thiểu lỗi và tiết kiệm thời gian phát triển. Thay vì cố gắng xử lý quá nhiều tình huống đặc biệt bằng các hàm phức tạp, nhà phát triển nên sử dụng các annotation mặc định của Spring Boot và khai thác tính năng tự động cấu hình (auto-configuration) nhằm giảm thiểu tối đa cấu hình không cần thiết.

### **Mẫu Thiết Kế**
Dự án được xây dựng dựa trên các mẫu thiết kế như:
* **DTO (Data Transfer Object)**: DTO là đối tượng được dùng để truyền dữ liệu giữa các tầng trong ứng dụng. Thay vì trả về trực tiếp entity chứa thông tin nhạy cảm hay lộ cấu trúc cơ sở dữ liệu, DTO sẽ đóng vai trò trung gian, giúp bảo vệ dữ liệu nội bộ và cải thiện hiệu suất ứng dụng bằng cách chỉ gửi những dữ liệu thực sự cần thiết.
* **Facade Pattern**: Facade Pattern cung cấp một giao diện đơn giản để tương tác với các module hoặc hệ thống phức tạp đằng sau. Điều này giúp giấu đi các logic chi tiết và chỉ cung cấp cho client một cách sử dụng dễ dàng, giảm thiểu lỗi khi client cố gắng tương tác trực tiếp với nhiều hệ thống con. Trong Spring Boot, việc sử dụng Facade giúp tăng khả năng kiểm soát và dễ dàng quản lý các chức năng phức tạp của ứng dụng.
* **Builder Pattern**: Builder Pattern giúp việc xây dựng đối tượng phức tạp dễ dàng và linh hoạt hơn. Thay vì sử dụng các constructor dài dòng với nhiều tham số, Builder Pattern sử dụng phương pháp chaining để thiết lập giá trị các thuộc tính một cách rõ ràng. Spring Boot kết hợp tốt với Lombok để triển khai Builder Pattern một cách ngắn gọn và tiện lợi, giúp mã nguồn rõ ràng và dễ quản lý hơn.
* **Singleton Pattern**: Singleton Pattern đảm bảo chỉ tồn tại duy nhất một instance của một đối tượng nào đó trong toàn bộ ứng dụng. Mặc định, Spring quản lý các Bean dưới dạng Singleton, đảm bảo tính thống nhất và giảm thiểu lượng tài nguyên cần sử dụng trong ứng dụng, đặc biệt hữu ích cho các Bean cấu hình, quản lý kết nối hoặc các Bean chia sẻ trạng thái chung.

Việc áp dụng các mẫu thiết kế (design patterns) vào dự án Spring Boot mang lại nhiều lợi ích thiết thực, giúp nâng cao chất lượng mã nguồn và khả năng bảo trì hệ thống. Các mẫu thiết kế như Singleton, Factory giúp tổ chức mã nguồn một cách có cấu trúc, giảm sự phức tạp và tăng tính tái sử dụng. Chẳng hạn, trong Spring Boot, mẫu Singleton được tận dụng thông qua các bean được quản lý bởi Spring Container, đảm bảo chỉ có một thể hiện duy nhất của một lớp, tiết kiệm tài nguyên. Mẫu Repository giúp tách biệt logic truy cập dữ liệu khỏi logic nghiệp vụ, giúp mã dễ kiểm thử và mở rộng. Ngoài ra, các mẫu như Dependency Injection (được Spring hỗ trợ mạnh mẽ) thúc đẩy tính linh hoạt, cho phép thay đổi triển khai mà không cần sửa đổi mã nguồn. Nhờ vậy, việc áp dụng mẫu thiết kế không chỉ cải thiện hiệu suất phát triển mà còn đảm bảo dự án dễ dàng thích nghi với các yêu cầu thay đổi trong tương lai.

### **Dependency Injection (DI)**
là một kỹ thuật thiết kế phần mềm trong lập trình hướng đối tượng, nhằm giảm sự gắn kết chặt chẽ giữa các lớp, giúp mã nguồn dễ hiểu, dễ bảo trì và mở rộng. Thay vì tự khởi tạo các đối tượng phụ thuộc, lớp sẽ được cung cấp các đối tượng này từ bên ngoài thông qua cơ chế "tiêm". Lợi ích của DI bao gồm:

* **Tách biệt chức năng**: Các lớp chỉ tập trung vào nhiệm vụ chính, không cần quản lý việc tạo đối tượng phụ thuộc, giúp mã sạch và dễ quản lý.
Kết nối lỏng lẻo: Các lớp ít phụ thuộc vào cách triển khai cụ thể của đối tượng, hỗ trợ thay đổi hoặc hoán đổi phụ thuộc dễ dàng trong các môi trường như phát triển, kiểm thử hoặc sản xuất.
* **Tăng tính linh hoạt**: DI cho phép kiểm soát và tùy chỉnh cách các phụ thuộc được tạo, thuận lợi cho việc nâng cấp hoặc tích hợp hệ thống.

Trong dự án này, em đã sử dụng chủ yếu Constructor Injection, một phương pháp phổ biến và được đánh giá cao. Các phụ thuộc được truyền vào lớp thông qua hàm tạo, đảm bảo tính minh bạch và chặt chẽ trong việc thiết lập quan hệ giữa các lớp. Nhờ DI, các phụ thuộc trong dự án trở nên linh hoạt, giúp mã nguồn dễ bảo trì, kiểm thử và mở rộng. Tuy nhiên, DI cũng có nhược điểm, như độ phức tạp trong cấu hình và triển khai, đặc biệt ở các dự án quy mô lớn, có thể gây khó khăn cho việc phát triển nhanh hoặc cho những lập trình viên chưa quen với khái niệm này.

2\. Kiến Trúc Thiết Kế
-----------------------------
Trong quá trình xây dựng các dự án phần mềm hiện nay, có rất nhiều kỹ thuật và kiến trúc thiết kế nổi bật được áp dụng rộng rãi như Kiến trúc phân tầng (Layered Architecture), giúp chia ứng dụng thành các tầng rõ ràng như Controller, Service, Repository để dễ dàng bảo trì và quản lý. Một kỹ thuật khác cũng rất được ưa chuộng là Kiến trúc Microservices, cho phép chia nhỏ ứng dụng lớn thành các dịch vụ nhỏ độc lập, giúp việc phát triển, triển khai và mở rộng hệ thống linh hoạt hơn rất nhiều.

Bên cạnh đó, Kiến trúc hướng sự kiện (Event-Driven Architecture) là một giải pháp hiệu quả khi xây dựng các hệ thống yêu cầu khả năng xử lý các tác vụ bất đồng bộ và giao tiếp giữa các thành phần qua sự kiện, nhờ đó giảm độ phụ thuộc giữa các module. Kiến trúc Hexagonal (Ports and Adapters) cũng là một lựa chọn mạnh mẽ, giúp cô lập hoàn toàn logic nghiệp vụ của hệ thống khỏi các chi tiết kỹ thuật như giao diện người dùng hoặc database, tạo điều kiện thuận lợi để kiểm thử và thay đổi công nghệ khi cần thiết.

Ngoài ra, Clean Architecture lại hướng đến việc tổ chức ứng dụng sao cho logic nghiệp vụ luôn độc lập với các thành phần kỹ thuật như framework, thư viện bên ngoài, giúp cho việc bảo trì, kiểm thử dễ dàng hơn nhiều.

Mỗi kiến trúc nêu trên đều có những điểm mạnh riêng và phù hợp với từng bối cảnh khác nhau, nhưng trong dự án lần này, tôi đã quyết định chọn kiến trúc RESTful API như kỹ thuật kiến trúc chính để xây dựng các dịch vụ web, bởi tính đơn giản, linh hoạt, khả năng mở rộng cao và sự phổ biến rộng rãi của nó trong ngành phát triển phần mềm hiện nay.

### **Kiến Trúc RESTful API**
RESTful API (Representational State Transfer) là một kiểu kiến trúc được tôi lựa chọn để phát triển các dịch vụ web trong dự án lần này. Kiến trúc RESTful giúp các ứng dụng giao tiếp với nhau một cách hiệu quả và rõ ràng thông qua giao thức HTTP. Để tương tác với các tài nguyên (resources), kiến trúc này sử dụng các phương thức HTTP chuẩn như GET, POST, PUT và DELETE.
Các tài nguyên trong RESTful API được định danh bằng những đường dẫn (URL) cụ thể, chẳng hạn như /users để lấy danh sách người dùng hoặc /auth/login để đăng nhập. Việc định nghĩa rõ ràng các tài nguyên cùng với việc sử dụng những phương thức tiêu chuẩn giúp RESTful API trở nên rất dễ hiểu và dễ sử dụng.

### **Cấu Trúc Và Các Nguyên Tắc của RESTful API**
Trong quá trình xây dựng RESTful API cho dự án này, tôi luôn đảm bảo tuân thủ một số nguyên tắc cơ bản sau đây:
1. **Tài Nguyên (Resources)**: Trong RESTful API, một tài nguyên có thể là bất kỳ thứ gì mà hệ thống quản lý, ví dụ như người dùng, sản phẩm, đơn hàng. Mỗi tài nguyên luôn được định danh bởi một đường dẫn URL rõ ràng, giúp tôi dễ dàng quản lý và truy cập tài nguyên đó một cách trực tiếp, ví dụ:
   * */products*: để lấy danh sách các sản phẩm
   * */orders/{id}*: đẩy lấy thông tin về đơn hàng cụ thể.
2. **Phương thức HTTP**: RESTful API khai thác sức mạnh của các phương thức HTTP tiêu chuẩn để thực hiện những hành động cụ thể lên tài nguyên, ví dụ:
   * *GET*: dùng để lấy dữ liệu từ server.
   * *POST*: tạo mới tài nguyên trên server.
   * *PUT*: cập nhật tài nguyên đã có sẵn.
   * *DELETE*: xóa tài nguyên.

Điều này giúp cho việc thao tác với tài nguyên rõ ràng, đơn giản và phù hợp với các tiêu chuẩn chung trên toàn cầu.

3. **Stateless (Phi trạng thái)**: Kiến trúc RESTful API yêu cầu mỗi request từ client luôn phải chứa đầy đủ thông tin để xử lý, server không cần nhớ trạng thái từ những request trước đó. Điều này giúp hệ thống trở nên linh hoạt, dễ mở rộng, giảm tải cho server, và rất thuận lợi khi triển khai hệ thống phân tán hoặc load-balancing.
4. 



