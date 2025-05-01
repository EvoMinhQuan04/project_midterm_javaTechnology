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

![markdown](https://velog.velcdn.com/images/0andwild/post/d5804ef2-ddad-4309-ba51-0e3d43389cac/image.png)

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
4. **Cacheable (Khả năng lưu trữ cache)**: Nhờ khả năng lưu trữ dữ liệu trả về từ server vào bộ nhớ cache trên client, RESTful API giúp cải thiện đáng kể hiệu suất của hệ thống, giảm thời gian phản hồi và giảm tải cho server khi có nhiều lượt truy cập liên tục vào cùng một dữ liệu.
5. **Uniform Interface (Giao diện thống nhất)**: RESTful API cung cấp một giao diện nhất quán và dễ dàng để tương tác, đảm bảo rằng mọi tài nguyên đều có cách thức truy cập và xử lý giống nhau, giúp lập trình viên giảm bớt sự nhầm lẫn và tối ưu hóa việc tích hợp API vào các ứng dụng khác nhau.
6. **Resource Naming (Đặt tên tài nguyên chuẩn hóa)**: Sử dụng danh từ số nhiều cho tài nguyên, không nên lồng ghép quá nhiều cấp, tránh dùng động từ trong URL.
7. **HATEOAS (Hypermedia As The Engine Of Application State)**: REST gốc đề xuất rằng client không chỉ nhận dữ liệu, mà còn nhận được các liên kết (hypermedia links) mô tả các thao tác có thể tiếp theo (self-descriptive messages). Điều này giúp client định hướng API giống như duyệt web.

### **Cách Thức Hoạt Động của RESTful API trong dự án**
Cụ thể, dự án của tôi được phát triển với front-end sử dụng ReactJS, trong khi back-end được xây dựng trên nền tảng Spring Boot. Hai phần này tương tác với nhau thông qua RESTful API, tạo ra một hệ thống tách biệt và linh hoạt:

![markdown](https://th.bing.com/th/id/R.514782ffb73cb411660628bf3e9e9c1c?rik=u6OwZqm2uK1ynw&riu=http%3a%2f%2fwww.idevnews.com%2fviews%2fimages%2fuploads%2fgeneral%2fAPI_img_Akana_650.jpg&ehk=cqtVC7JoZVbBXMvVTNIuTi1nwtCW%2bYYwJsfwXjFRWs4%3d&risl=&pid=ImgRaw&r=0)

1.  **Client**: (ReactJS) gửi yêu cầu tới server thông qua một API endpoint, ví dụ khi người dùng thực hiện hành động (ví dụ nhấn nút để xem thông tin sản phẩm), front-end sẽ gửi request HTTP (như GET /products) tới server.
2.  **Server**: (Spring Boot) nhận yêu cầu, xử lý (chẳng hạn như truy vấn cơ sở dữ liệu) và trả về kết quả, server với Spring Boot sẽ tiếp nhận request, thực hiện xử lý nghiệp vụ (truy vấn dữ liệu, tính toán logic) và trả về dữ liệu dạng JSON.
3.  **Client**: ReactJS nhận được dữ liệu này từ RESTful API và hiển thị lên giao diện một cách thân thiện và rõ ràng cho người dùng.

### **Lợi ích khi sử dụng RESTful API trong dự án**
Việc áp dụng kiến trúc RESTful API trong dự án không chỉ giúp xây dựng một hệ thống hiện đại, hiệu quả mà còn mang lại nhiều lợi ích rõ rệt trong quá trình phát triển, mở rộng và bảo trì ứng dụng. Dưới đây là những lợi ích quan trọng mà tôi đã nhận thấy trong suốt quá trình triển khai dự án sử dụng Spring Boot làm back-end và ReactJS làm front-end:

1. **Tách biệt rõ ràng giữa giao diện người dùng và xử lý nghiệp vụ**: Một trong những ưu điểm lớn nhất khi sử dụng RESTful API là khả năng phân tách front-end và back-end một cách triệt để. Điều này có nghĩa là giao diện người dùng có thể được xây dựng, thay đổi, hoặc nâng cấp mà không làm ảnh hưởng tới logic xử lý phía server. Ngược lại, logic nghiệp vụ và quản lý dữ liệu có thể được tối ưu, cải tiến độc lập mà không cần sửa đổi giao diện. Mô hình này không chỉ thúc đẩy phát triển song song giữa các nhóm phát triển mà còn hỗ trợ linh hoạt khi thay đổi công nghệ ở một phía mà không ảnh hưởng đến toàn hệ thống.
2. **Tăng khả năng mở rộng và thích ứng với nhu cầu tương lai**: RESTful API có kiến trúc đơn giản nhưng rất linh hoạt, điều này giúp hệ thống dễ dàng thích nghi với các thay đổi trong tương lai. Khi cần thêm tính năng mới hoặc mở rộng dịch vụ, chỉ cần định nghĩa thêm endpoint mới hoặc mở rộng logic xử lý mà không làm gián đoạn hoạt động của các phần hiện có. Với mô hình REST, tài nguyên được quản lý rõ ràng theo URL và thao tác bằng các phương thức HTTP tiêu chuẩn, nên việc bổ sung chức năng mới không gây ảnh hưởng đến các phần còn lại của ứng dụng.
3. **Tương thích với đa nền tảng và hệ sinh thái hiện đại**: Một trong những lý do RESTful API trở nên phổ biến là vì nó hỗ trợ rất tốt việc giao tiếp giữa các hệ thống khác nhau. Dù client là ứng dụng web, mobile, desktop hay một hệ thống của bên thứ ba, miễn là có thể gửi HTTP request, đều có thể tương tác với REST API một cách dễ dàng. Điều này làm cho hệ thống có tính liên kết tốt với thế giới bên ngoài, dễ dàng tích hợp với các dịch vụ như thanh toán điện tử, dịch vụ email, hoặc các nền tảng cloud.
4. **Hỗ trợ kiểm thử và phát triển theo hướng mô-đun**: RESTful API có đặc điểm là dễ kiểm thử, vì mỗi endpoint được thiết kế như một thực thể độc lập, có thể gửi request và nhận response một cách tách biệt. Các công cụ như Postman, Swagger, Insomnia... cho phép kiểm tra các API endpoint riêng rẽ, hỗ trợ quá trình phát triển theo hướng kiểm thử (TDD) hoặc tài liệu hoá API tự động. Tính độc lập giữa các thành phần cũng giúp chia nhỏ hệ thống thành các mô-đun dễ kiểm soát hơn, rất phù hợp với các dự án có quy mô vừa và lớn.
5. **Nâng cao hiệu suất và khả năng tái sử dụng**: Khi hệ thống API được thiết kế tốt, các thành phần trong ứng dụng có thể sử dụng lại các endpoint để tránh việc viết lại logic xử lý tương tự. Chẳng hạn, một API lấy danh sách sản phẩm có thể được dùng ở cả trang chủ, trang danh mục, và trang tìm kiếm. Việc sử dụng cùng một endpoint cũng tạo ra sự thống nhất trong cách xử lý dữ liệu và giảm thiểu lỗi. Bên cạnh đó, nếu thiết kế thêm cơ chế cache hoặc phân trang (pagination), hệ thống có thể phục vụ hàng nghìn lượt truy cập mà vẫn giữ hiệu suất ổn định.
6. **Đáp ứng tiêu chuẩn công nghiệp và dễ bảo trì**: RESTful API tuân theo những tiêu chuẩn được chấp nhận rộng rãi trong ngành phát triển phần mềm, giúp dễ dàng bảo trì và tiếp cận bởi các lập trình viên khác. Khi một lập trình viên mới tham gia vào dự án, họ có thể nhanh chóng hiểu cách hoạt động của hệ thống chỉ bằng cách đọc qua cấu trúc các endpoint và tham chiếu tài liệu API. Tính minh bạch và nhất quán này rất quan trọng đối với những dự án làm việc nhóm hoặc phát triển lâu dài.

3\. Công Nghệ Sử Dụng
------------------------------------------------
Để xây dựng và triển khai hệ thống một cách hiệu quả, tôi đã lựa chọn tập hợp các công nghệ hiện đại, tối ưu cho phát triển web toàn diện từ front-end đến back-end, bao gồm ReactJS, Spring Boot, MySQL, AWS và Spring Security. Dưới đây là phân tích cụ thể cho từng công nghệ được ứng dụng trong dự án:

### Front-end: ReactJS
Ở phía giao diện người dùng, tôi sử dụng ReactJS – một thư viện JavaScript nổi bật chuyên dùng để phát triển các UI linh hoạt, phản ứng nhanh với tương tác của người dùng. React giúp tôi phát triển các giao diện theo hướng component, dễ dàng tái sử dụng và kiểm soát. Một số lý do khiến ReactJS trở thành lựa chọn lý tưởng:
* **Hiệu ứng phản hồi theo thời gian thực**: Khi có sự thay đổi trong dữ liệu, React tự động cập nhật phần giao diện tương ứng nhờ cơ chế Virtual DOM, giúp trải nghiệm người dùng mượt mà, đặc biệt quan trọng trong các thao tác như xem giỏ hàng, cập nhật sản phẩm.
* **Kiến trúc component tái sử dụng**:  Giao diện được chia nhỏ thành các component như Navbar, Footer, UserPanel, giúp tổ chức mã nguồn gọn gàng và mở rộng tính năng dễ dàng.
* **Quản lý trạng thái ứng dụng**:  Tôi tích hợp Redux để quản lý trạng thái toàn cục, đảm bảo mọi component trong ứng dụng đều truy cập và cập nhật dữ liệu nhất quán.
* **Kết nối API linh hoạt**:  React hoạt động hiệu quả khi tích hợp với RESTful API, hỗ trợ gửi và nhận dữ liệu JSON từ server thông qua các HTTP request (axios/fetch).

### Back-end: Spring Boot
Phía server được triển khai bằng Spring Boot, một nền tảng mạnh mẽ trong hệ sinh thái Java, giúp tăng tốc quá trình xây dựng các ứng dụng web có kiến trúc RESTful. Các lý do tôi chọn Spring Boot:
* **Tự động hóa cấu hình**: Hệ thống auto-configuration giúp tiết kiệm thời gian thiết lập ban đầu, như kết nối database, cấu hình servlet, hoặc dependency injection.
* **Hỗ trợ xây dựng REST API mạnh mẽ**: Với các annotation như @RestController, @RequestMapping, @PathVariable, tôi dễ dàng thiết lập các API phục vụ quản lý người dùng, sản phẩm, đơn hàng.
* **Tích hợp tầng truy xuất dữ liệu**: Tôi sử dụng Spring Data JPA để giao tiếp với cơ sở dữ liệu thông qua các interface, giảm thiểu mã SQL thủ công, đồng thời đảm bảo khả năng mở rộng cho các thao tác tìm kiếm, lọc nâng cao.
* **Khả năng mở rộng và tích hợp**:  Spring Boot hỗ trợ dễ dàng việc tích hợp với nhiều dịch vụ khác như email, thanh toán, xác thực OAuth2, Kafka, hoặc thậm chí gắn với microservices nếu mở rộng trong tương lai.

### Cơ sở dữ liệu: MySQL
Toàn bộ dữ liệu của hệ thống được lưu trữ bằng MySQL, một hệ quản trị cơ sở dữ liệu quan hệ phổ biến, đảm bảo tính ổn định, bảo mật và hiệu suất.
* **Tương thích tốt với Spring Boot**: Thông qua JPA và Hibernate, các entity Java được ánh xạ trực tiếp với bảng dữ liệu, giúp tôi thao tác dữ liệu một cách tự nhiên, giảm viết lặp SQL.
* **Tối ưu hiệu suất với index và truy vấn có điều kiện**: Cơ chế index hóa được áp dụng trên các cột truy vấn nhiều như email, product_id, giúp tăng tốc xử lý dữ liệu.
* **Đáp ứng tốt cho hệ thống vừa và lớn**: MySQL đủ linh hoạt cho hệ thống quản lý đơn hàng, người dùng, sản phẩm có thể mở rộng về sau.

### Cloud Storage & Hosting: AWS (Amazon Web Service)
Để hỗ trợ lưu trữ và triển khai, tôi lựa chọn Amazon Web Services (AWS), nền tảng điện toán đám mây phổ biến và đáng tin cậy.
* **AWS S3**: Dữ liệu tệp tĩnh như hình ảnh sản phẩm được lưu trữ trên Amazon S3, giúp tối ưu hiệu suất truy xuất ảnh, đồng thời giảm tải cho server ứng dụng. Tôi sử dụng các SDK AWS để upload ảnh trực tiếp từ client lên S3 qua API backend.
* **AWS EC2 (dự kiến triển khai)**: Trong giai đoạn hoàn thiện, tôi có kế hoạch triển khai toàn bộ hệ thống lên EC2 – dịch vụ máy chủ ảo cho phép kiểm soát hoàn toàn môi trường chạy ứng dụng Spring Boot, cấu hình domain, bảo mật bằng HTTPS và giám sát hiệu suất.

### Bảo mật: Spring Security + JWT
Để đảm bảo an toàn cho toàn bộ hệ thống, tôi triển khai Spring Security kết hợp với JWT (JSON Web Token) như một giải pháp xác thực và phân quyền. Các tính năng bảo mật đã được tôi thực hiện:
* **Xác thực người dùng**: Thông tin đăng nhập được kiểm tra dựa trên cơ sở dữ liệu người dùng, kết hợp mã hóa bằng BCryptPasswordEncoder để đảm bảo mật khẩu không bị lộ.
* **Phân quyền truy cập (Authorization)**: Tôi định nghĩa các vai trò như ROLE_USER, ROLE_ADMIN, sau đó phân quyền ở từng API endpoint thông qua @PreAuthorize hoặc cấu hình HttpSecurity.
* **Xác thực bằng JWT**: Sau khi người dùng đăng nhập thành công, server sẽ trả về một JWT chứa thông tin định danh. Token này được lưu ở phía client và gửi kèm trong mỗi request tiếp theo qua header Authorization, giúp API luôn stateless và dễ mở rộng.
* **Bảo vệ API theo vai trò**: Các chức năng quan trọng như tạo/sửa/xóa sản phẩm được giới hạn chỉ dành cho admin, trong khi các thao tác mua hàng chỉ cần người dùng đã xác thực.
* **Cấu hình bảo mật linh hoạt**: Toàn bộ luồng bảo mật được định nghĩa trong class SecurityConfig, sử dụng SecurityFilterChain, AuthenticationManager, cùng các custom filter xử lý JWT.

4\. Cấu Trúc Dự Án
---------------------------------

## Frontend
Dự án frontend của tôi được xây dựng với ReactJS, giúp phát triển giao diện người dùng một cách linh hoạt, dễ bảo trì và mở rộng. Dưới đây là mô tả chi tiết các phần chính trong cấu trúc thư mục của ứng dụng:

### **Component**
Thư mục component chứa các thành phần giao diện độc lập (UI Components) của ứng dụng. Đây là nơi tôi định nghĩa tất cả các khối giao diện có thể tái sử dụng, được chia thành hai nhóm chính: admin và common.
**Chức năng**
* **Tách biệt theo vai trò**: Component được chia rõ theo khu vực admin (admin/) và dùng chung (common/).
* **Tái sử dụng và mở rộng**: Mỗi file đại diện cho một giao diện cụ thể như form thêm sản phẩm, chỉnh sửa danh mục, hoặc danh sách sản phẩm.
* **Xây dựng theo hướng module hóa**: Giúp code ngắn gọn, dễ đọc và dễ quản lý khi mở rộng hệ thống.

**Context**
Thư mục context chứa các React Context dùng để quản lý trạng thái toàn cục. Trong dự án này, tôi sử dụng context để quản lý giỏ hàng (CartContext.js), đảm bảo rằng dữ liệu giỏ hàng có thể truy cập từ bất kỳ component nào trong cây component React.
**Chức năng**
* **Chia sẻ trạng thái toàn cục**: Trạng thái giỏ hàng, số lượng sản phẩm, v.v.
* **Thay thế cho Redux trong các trường hợp đơn giản**: Giảm sự phức tạp nhưng vẫn hiệu quả trong quản lý trạng thái.

**Page**
Thư mục pages chứa các trang chính (view) trong ứng dụng. Mỗi file trong đây đại diện cho một trang đầy đủ và thường bao gồm nhiều component nhỏ được kết hợp lại.
**Chức năng**
* **Tổ chức theo routing**: Mỗi page tương ứng với một route, ví dụ /login, /cart, /profile, v.v.
* **Tích hợp logic hiển thị**: Có thể bao gồm gọi API, quản lý state cục bộ, và render component con.

### **Service**
Thư mục service bao gồm các đoạn mã chịu trách nhiệm giao tiếp với backend – thường là các hàm gọi API (RESTful) và logic xử lý liên quan, chúng không trực tiếp render ra giao diện mà chỉ thực hiện các tác vụ về dữ liệu sau đó trả kết quả về cho các component.
**Chức năng**
* **Giao tiếp với API backend**: Gửi và nhận dữ liệu từ Spring Boot thông qua axios hoặc fetch.
* **Tách riêng logic xử lý ra khỏi component**: Giữ cho component đơn giản, chỉ tập trung hiển thị.
* **Quản lý logic nghiệp vụ:** Chứa các hàm để xử lý các logic như đăng nhập, lấy dữ liệu sản phẩm, thanh toán đơn hàng, v.v.

### **Style**
Thư mục style lưu trữ các file định nghĩa kiểu dáng (CSS) riêng biệt cho từng component hoặc trang, là nơi "makeup" cho các giao diện hiển thị, màu sắc, bố cục và kiểu dáng.
**Chức năng**
* **Tạo giao diện người dùng đẹp và nhất quán**: Quy định màu sắc, bố cục, font chữ, v.v.
* **Tối ưu trải nghiệm người dùng (UX)**: Giúp trang phản hồi tốt trên nhiều thiết bị (desktop/mobile).
* **Tách biệt style theo tính năng**: Mỗi file .css tương ứng với một component hoặc trang cụ thể giúp dễ bảo trì.
* **Tái sử dụng**: các style có thể được tái sử dụng trong các component, giúp duy trì tính nhất quán của giao diện và thiết kế.

## Backend
Mô tả

### **Controller**
Controller là nơi xử lý các yêu cầu HTTP từ phía client. Trong Spring Boot, các lớp controller sử dụng annotation @RestController hoặc @Controller để đánh dấu và xử lý các endpoint của API. Controller nhận các yêu cầu từ phía người dùng, gọi các dịch vụ liên quan và trả về kết quả (dữ liệu hoặc thông báo).
**Chức năng:**
*   Xử lý các yêu cầu GET, POST, PUT, DELETE.
*   Gửi yêu cầu đến các service tương ứng.
*   Đảm bảo trả về các dữ liệu dưới định dạng JSON hoặc các phản hồi thích hợp.

### **DTO (Data Transfer Object)**
DTO là các lớp dùng để truyền tải dữ liệu giữa các lớp hoặc giữa server và client. DTO giúp tối ưu hóa dữ liệu trả về và gửi đi, chỉ truyền các trường cần thiết thay vì toàn bộ entity.
**Chức năng:**
*   Giảm thiểu dữ liệu không cần thiết được truyền tải.    
*   Cung cấp một lớp trung gian giữa các tầng trong ứng dụng.

### **Entity**
Entity là các lớp mô phỏng các bảng trong cơ sở dữ liệu. Mỗi entity đại diện cho một bảng dữ liệu trong hệ thống, và các trường trong entity tương ứng với các cột trong bảng. Các lớp entity được đánh dấu với annotation @Entity.
**Chức năng:**
*   Định nghĩa các đối tượng dữ liệu trong hệ thống.    
*   Ánh xạ các trường trong entity vào các cột trong cơ sở dữ liệu.   
*   Xử lý các mối quan hệ giữa các bảng (1-1, 1-n, n-n).   

### **Enums**
Enums chứa các giá trị cố định trong ứng dụng. Chúng giúp định nghĩa các trạng thái hoặc loại dữ liệu có giới hạn, ví dụ như các trạng thái đơn hàng, mức độ quyền hạn người dùng, hoặc các mã lỗi.
**Chức năng:**
*   Cung cấp các giá trị cố định cho các trường hợp đặc biệt.   
*   Tăng cường tính bảo mật và dễ dàng mở rộng khi có thêm các trạng thái hoặc giá trị mới.

### **Exception**
Exception bao gồm các lớp xử lý ngoại lệ (errors). Tôi đã tạo các lớp exception tùy chỉnh để xử lý các lỗi người dùng hoặc hệ thống một cách chi tiết và dễ quản lý. Các lớp này thường được đánh dấu với annotation @ResponseStatus để trả về mã trạng thái HTTP thích hợp.
**Chức năng:**
*   Xử lý các lỗi xảy ra trong quá trình xử lý yêu cầu.    
*   Cung cấp thông tin chi tiết về lỗi cho người dùng.   
*   Đảm bảo ứng dụng không bị dừng đột ngột mà luôn trả về phản hồi hợp lý.   

### **Mapper**
Mapper là các lớp dùng để chuyển đổi giữa các đối tượng khác nhau, ví dụ như từ DTO sang entity và ngược lại. Tôi đã sử dụng thư viện MapStruct hoặc các phương thức thủ công để thực hiện việc ánh xạ này.
**Chức năng:**
*   Chuyển đổi giữa các lớp DTO và entity. 
*   Giảm bớt sự lặp lại khi làm việc với các đối tượng tương tự.

### **Repository**
Repository là lớp để tương tác với cơ sở dữ liệu. Trong Spring Boot, tôi sử dụng JpaRepository hoặc CrudRepository từ Spring Data JPA để dễ dàng truy vấn và thao tác với dữ liệu. Repository giúp thực hiện các thao tác như tìm kiếm, lưu trữ và cập nhật dữ liệu.
**Chức năng:**
*   Tương tác trực tiếp với cơ sở dữ liệu. 
*   Cung cấp các phương thức mặc định để truy vấn, lưu và xóa dữ liệu.    
*   Được Spring Data JPA tự động triển khai.

### **Security**
Security chịu trách nhiệm bảo mật ứng dụng. Trong phần này, tôi đã sử dụng Spring Security để xử lý các yêu cầu về xác thực (authentication) và phân quyền (authorization). Security đảm bảo rằng chỉ người dùng có quyền mới có thể truy cập vào các tài nguyên của hệ thống.
**Chức năng:**
*   Xác thực người dùng (login/logout).   
*   Phân quyền truy cập vào các endpoint API.   
*   Bảo vệ các endpoint khỏi các mối đe dọa từ bên ngoài.

### **Service**
Service chứa logic nghiệp vụ của ứng dụng. Các lớp service thực hiện các phép toán, xử lý các yêu cầu và thực hiện các hành động cần thiết trong hệ thống. Các lớp này thường được đánh dấu với annotation @Service.
**Chức năng:**
*   Chứa logic xử lý nghiệp vụ.    
*   Tương tác với repository để truy vấn hoặc lưu trữ dữ liệu.    
*   Cung cấp các phương thức để controller gọi và trả về kết quả cho người dùng.

### **Specification**
Specification được sử dụng để xây dựng các truy vấn động trong Spring Data JPA. Nó cho phép tạo ra các truy vấn linh hoạt và phức tạp hơn mà không cần phải viết trực tiếp các câu lệnh SQL.
**Chức năng:**
*   Xây dựng các truy vấn động cho các yêu cầu tìm kiếm phức tạp.    
*   Tăng cường khả năng tái sử dụng mã và mở rộng ứng dụng.  

### **Resoures**
Trong dự án Spring Boot, thư mục resources nằm trong src/main/resources là một phần không thể thiếu, đóng vai trò là nơi chứa tài nguyên cấu hình và tệp tĩnh mà ứng dụng cần trong quá trình chạy. Các tệp trong thư mục này sẽ được đóng gói trực tiếp vào file JAR hoặc WAR khi build ứng dụng, và được Spring Boot tự động tải vào classpath.

5\. Entity Diagram
---------------------------

### **Sơ đồ quan hệ ERD**

![ERD_Java](https://github.com/user-attachments/assets/a349f4e1-86c6-4390-b09d-cc195617c430)

### **Mô tả các bảng và quan hệ trong sơ đồ ERD**
1.  **Bảng users**:
    
    *   Lưu trữ thông tin người dùng như tên, email, mật khẩu, số điện thoại, vai trò, và thời gian tạo tài khoản.      
    *   id là khóa chính (PK).      
    *   email là trường duy nhất.
        
2.  **Bảng addresses**:
    
    *   Lưu trữ địa chỉ của người dùng.     
    *   user\_id là khóa ngoại (FK) tham chiếu đến bảng users.      
    *   id là khóa chính (PK).
        
3.  **Bảng categories**:
    
    *   Lưu trữ các danh mục sản phẩm.        
    *   id là khóa chính (PK).        
    *   name là trường duy nhất.
        
4.  **Bảng products**:
    
    *   Lưu trữ thông tin sản phẩm như tên, mô tả, URL ảnh, giá và danh mục sản phẩm.       
    *   category\_id là khóa ngoại (FK) tham chiếu đến bảng categories.       
    *   id là khóa chính (PK).
        
5.  **Bảng orders**:
    
    *   Lưu trữ thông tin đơn hàng, bao gồm tổng giá trị đơn hàng và thời gian tạo đơn.       
    *   id là khóa chính (PK).
        
6.  **Bảng order_items**:
    
    *   Lưu trữ các mục trong mỗi đơn hàng.     
    *   user\_id là khóa ngoại (FK) tham chiếu đến bảng users.     
    *   product\_id là khóa ngoại (FK) tham chiếu đến bảng products.     
    *   order\_id là khóa ngoại (FK) tham chiếu đến bảng orders.     
    *   id là khóa chính (PK).

### **Các quan hệ giữa các bảng trong cơ sở dữ liệu:**

* **Bảng users ↔ Bảng addresses**:   
    *   Một người dùng có thể có nhiều địa chỉ (quan hệ 1-n).        
    *   Mối quan hệ được thể hiện qua trường user\_id trong bảng addresses, tham chiếu đến id trong bảng users.
        
* **Bảng categories ↔ Bảng products**:   
    *   Một danh mục có thể chứa nhiều sản phẩm (quan hệ 1-n).       
    *   Mối quan hệ được thể hiện qua trường category\_id trong bảng products, tham chiếu đến id trong bảng categories.
        
* **Bảng users ↔ Bảng order_items**:  
    *   Một người dùng có thể có nhiều mục trong đơn hàng (quan hệ 1-n).      
    *   Mối quan hệ được thể hiện qua trường user\_id trong bảng order\_items, tham chiếu đến id trong bảng users.
        
* **Bảng products ↔ Bảng order_items**:    
    *   Một sản phẩm có thể xuất hiện trong nhiều mục của đơn hàng (quan hệ 1-n).       
    *   Mối quan hệ được thể hiện qua trường product\_id trong bảng order\_items, tham chiếu đến id trong bảng products.
        
* **Bảng orders ↔ Bảng order_items**:    
    *   Một đơn hàng có thể có nhiều mục (quantities) (quan hệ 1-n).     
    *   Mối quan hệ được thể hiện qua trường order\_id trong bảng order\_items, tham chiếu đến id trong bảng orders.

6\. API Enpoints
-------------------------------------

## Auth
### **Register** 
```bash
curl --location 'http://localhost:8080/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "415quancao@gmail.com",
    "name": "Cao Minh Quân",
    "phoneNumber": "0353670210",
    "password": "123456"
}'
```
Kết quả:
![register_api](https://github.com/user-attachments/assets/5583bdd6-0646-43ea-a7e7-93509041440a)

### **Login**
```bash
curl --location 'http://localhost:8080/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "admin@gmail.com",
    "password": "12341234"
}'
```
Kết quả:

![login_api](https://github.com/user-attachments/assets/c7dab900-5a22-4510-b983-12dd4994e172)

## User
### Get all users (**Only Admin**)
```bash
curl --location 'http://localhost:8080/user/get-all' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:

![getAllUser](https://github.com/user-attachments/assets/b33d2e39-99cf-49fc-a7cb-50bb5341ac79)

### Get user details 
```bash
curl --location 'http://localhost:8080/user/my-info' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI0MTVxdWFuY2FvQGdtYWlsLmNvbSIsImlhdCI6MTc0NjAxODk0NSwiZXhwIjoxNzYxNTcwOTQ1fQ.Y3Hjff9yn0Y2GYWHDtCHZLIOj5cJrLoWr8RfSQCTNeWEYbglrZW791FjOFgSmEYc'
```
Kết quả:
![image](https://github.com/user-attachments/assets/4a69a68a-f1b4-4240-874e-d678b22f09e4)

## Product
### Get all products
```bash
curl --location 'http://localhost:8080/product/get-all' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI0MTVxdWFuY2FvQGdtYWlsLmNvbSIsImlhdCI6MTc0NjAxODk0NSwiZXhwIjoxNzYxNTcwOTQ1fQ.Y3Hjff9yn0Y2GYWHDtCHZLIOj5cJrLoWr8RfSQCTNeWEYbglrZW791FjOFgSmEYc'
```
Kết quả:
![getAllProduct](https://github.com/user-attachments/assets/e7910c40-f044-420d-b42c-a3d7fae751ee)

### Get product details
```bash
curl --location 'http://localhost:8080/product/get-by-product-id/3' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI0MTVxdWFuY2FvQGdtYWlsLmNvbSIsImlhdCI6MTc0NjAxODk0NSwiZXhwIjoxNzYxNTcwOTQ1fQ.Y3Hjff9yn0Y2GYWHDtCHZLIOj5cJrLoWr8RfSQCTNeWEYbglrZW791FjOFgSmEYc'
```
Kết quả:
![getProductDetals](https://github.com/user-attachments/assets/a9a9025f-0bd1-4798-ba12-6acca0b89f6f)

### Get products by category id
```bash
curl --location 'http://localhost:8080/product/get-by-category-id/1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI0MTVxdWFuY2FvQGdtYWlsLmNvbSIsImlhdCI6MTc0NjAxODk0NSwiZXhwIjoxNzYxNTcwOTQ1fQ.Y3Hjff9yn0Y2GYWHDtCHZLIOj5cJrLoWr8RfSQCTNeWEYbglrZW791FjOFgSmEYc'
```
Kết quả:
![getProductByIDCategory](https://github.com/user-attachments/assets/13ca4d21-c704-47bf-9ee1-e7f687e39191)

### Search product
```bash
curl --location 'http://localhost:8080/product/search?searchValue=%C3%A1o%20nam%202'
```
Kết quả:
![searchProduct](https://github.com/user-attachments/assets/b2cb82af-e176-4546-8550-bc297deb58cb)

### Create product (**Only Admin**)
```bash
curl --location 'http://localhost:8080/product/create' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM' \
--form 'categoryId="1"' \
--form 'image=@"/C:/Users/MSI PC/Desktop/CMQNMT/fashion-shop-management/frontend/src/assets/img/products/n10.jpg"' \
--form 'name="Ao polo nam"' \
--form 'description="Ao polo tay ngan nam"' \
--form 'price="55"'
```
Kết quả:
![createProductByAdmin](https://github.com/user-attachments/assets/739c80e4-cf5a-4408-8cbd-0c1c9549c00d)

### Update product (**Only Admin**)
```bash
curl --location --request PUT 'http://localhost:8080/product/update' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM' \
--data-urlencode 'productId=12' \
--data-urlencode 'name=Quan polo nam mau trang'
```
Kết quả:
![updateProductByAdmin](https://github.com/user-attachments/assets/6a7ef507-cfc8-4402-add9-ef144ded68df)

### Delete product (**Only Admin**)
```bash
curl --location --request DELETE 'http://localhost:8080/product/delete/12' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![deleteProductByAdmin](https://github.com/user-attachments/assets/75b6158f-4cc0-4609-bf61-70cce9491e67)

## Category

### Get category
```bash
curl --location 'http://localhost:8080/category/get-category-by-id/2'
```
Kết quả:
![getCategory](https://github.com/user-attachments/assets/91e3e783-0dcb-4e3d-a705-a594ddbb3ae2)

### Get all categories
```bash
curl --location 'http://localhost:8080/category/get-all' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![getAllCategory](https://github.com/user-attachments/assets/6d38c1b9-1f09-4fec-a950-3c3ed668b007)

### Create category (**Only Admin**)
```bash
curl --location 'http://localhost:8080/category/create' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM' \
--data '{
    "name": "Đồ trẻ em"
}'
```
Kết quả:
![createCategoryByAdmin](https://github.com/user-attachments/assets/5c67f09d-361c-4977-897e-1c529d11bb6a)

### Update category (**Only Admin**)
```bash
curl --location --request PUT 'http://localhost:8080/category/update/4' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM' \
--data '{
    "name": "Fashion"
}'
```
Kết quả:
![updateCategoryByAdmin](https://github.com/user-attachments/assets/574cede9-3c3b-481f-998f-990c2223a7b8)

### Delete category (**Only Admin**)
```bash
curl --location --request DELETE 'http://localhost:8080/category/delete/4' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![deleteCategoryByAdmin](https://github.com/user-attachments/assets/cb436d1f-076a-4331-8a4f-bbf9f01bc141)

##Order
### Get all orders (**Only Admin**) 
```bash
curl --location 'http://localhost:8080/order/filter' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![getAllOrderByAdmin](https://github.com/user-attachments/assets/c5146945-b4d0-4ba0-a029-b0c9c6396365)

### Get order item by id
```bash
curl --location 'http://localhost:8080/order/filter?itemId=16' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![getOrderItemByID](https://github.com/user-attachments/assets/9da1b5f2-5114-4527-9f39-ccafa943281a)

### Get order item by status (**Only Admin**)
```bash
curl --location 'http://localhost:8080/order/filter?status=pending' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![getOrderItemByStatus](https://github.com/user-attachments/assets/bf0db55e-a165-44a2-a2d5-84a61ce24ccc)

### Create order
```bash
curl --location 'http://localhost:8080/order/create' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM' \
--data '{
    "items": [
        {
            "productId": 3,
            "quantity": 5
        },
        {
             "productId": 4,
            "quantity": 5
        }
    ]
}'
```
Kết quả:
![createOrder](https://github.com/user-attachments/assets/f45a35f5-268b-4537-9351-abecd1e1c58d)

### Update order item status (**Only Admin**)
```bash
curl --location --request PUT 'http://localhost:8080/order/update-item-status/18?status=CONFIRMED' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NDYwMTgxMjksImV4cCI6MTc2MTU3MDEyOX0.Pnhfbtu6lzuluvOOJtYXdrqo-HzxR4DW763o5hgXDStFsFWO_Zajo5mCnGuMcDGM'
```
Kết quả:
![UpdateOrderItemStatusByAdmin](https://github.com/user-attachments/assets/5b4ab5fd-ccd3-44ee-b9eb-7cd2e98448c1)

## Address
### Save and update address
```bash
curl --location 'http://localhost:8080/address/save' \
--header 'Authorization: Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiI0MTVxdWFuY2FvQGdtYWlsLmNvbSIsImlhdCI6MTc0NjAxODk0NSwiZXhwIjoxNzYxNTcwOTQ1fQ.Y3Hjff9yn0Y2GYWHDtCHZLIOj5cJrLoWr8RfSQCTNeWEYbglrZW791FjOFgSmEYc' \
--header 'Content-Type: application/json' \
--data '{
    "street": "Nguyen Huu Tho",
    "city": "Ho Chi Minh",
    "state": "Tan Phong",
    "zipCode": 7000,
    "country": "VietNam"
}'
```
Kết quả:
![saveAddress](https://github.com/user-attachments/assets/3a1c647c-94c9-4aaf-b87a-f87938bcdad1)

7\. Kiểm Thử Đơn Vị (Unit Test)
------------------------------------------
Unit Test là phương pháp kiểm thử các thành phần nhỏ nhất của ứng dụng, thường là các hàm hoặc phương thức, nhằm đảm bảo rằng chúng hoạt động đúng như mong đợi. Trong dự án, Unit Test đóng vai trò quan trọng trong việc đảm bảo tính đúng đắn, giúp phát hiện và sửa lỗi ngay từ giai đoạn đầu. Đồng thời, Unit Test còn tăng cường độ tin cậy khi đảm bảo các thành phần hoạt động ổn định trong quá trình tích hợp và hỗ trợ bảo trì, cho phép kiểm tra nhanh các ảnh hưởng khi thay đổi hoặc mở rộng ứng dụng.  

Các bài test tại tầng Service được thực hiện khá đầy đủ với các trường hợp thành công và thất bại, giúp đảm bảo logic xử lý chính xác. Tuy nhiên, khi kiểm tra tầng Controller, tôi gặp khó khăn trong việc test các endpoint bảo mật do ứng dụng sử dụng Spring Security. Điều này đòi hỏi phải cấu hình Security Context và giả lập người dùng đã xác thực, khiến việc kiểm thử các endpoint yêu cầu xác thực trở nên phức tạp hơn. Dưới đây là phân tích chi tiết:

![baocaoTest](https://github.com/user-attachments/assets/4813e6ae-d9b7-4096-8069-041348cb22e7)

# Phân tích kết quả JaCoCo Coverage

## Công cụ & Framework sử dụng  
- **JUnit 5**: Khung kiểm thử chính để viết và chạy test case.  
- **Mockito**: Giả lập (mock) các dependency trong tầng Service, giúp cô lập logic cần kiểm thử.  
- **Spring MockMvc**: Kiểm thử các REST endpoint ở tầng Controller, bao gồm cả các tình huống yêu cầu xác thực (sử dụng `@WithMockUser` hoặc `SecurityMockMvcRequestPostProcessors`).

## Phân tích kết quả từ ảnh báo cáo

1. **Tổng quan**  
   - Instruction coverage đạt **71%** (355 lệnh chưa chạy trên tổng 1.265).  
   - Branch coverage chỉ **40%** (44 nhánh chưa chạy trên tổng 74).  
   Đây là mức trung bình, thấp hơn kỳ vọng (thường ≥ 80% instruction và ≥ 60% branch).

2. **Theo package**  
   - **`org.example.service.impl`**  
     Đạt **90%** instruction và **60%** branch. Rõ ràng các bài test Service rất đầy đủ, bao gồm cả kịch bản thành công và thất bại.  
   - **`org.example.controller`**  
     Chỉ **23%** instruction và **0%** branch. Phần lớn endpoint chưa được test, đặc biệt các API yêu cầu xác thực (Spring Security).  
   - **`org.example.service` (interface)**  
     Instruction coverage rất thấp (**12%**), branch coverage bằng 0. Cần bổ sung test cho phương thức giao diện để đảm bảo toàn diện.  
   - **`org.example` (root package)**  
     Coverage tổng hợp ở mức **37%**, branch không áp dụng.

## Kết luận & Định hướng cải thiện  
- **Ưu điểm**:  
  - Tầng Service đã được kiểm thử kỹ, logic xử lý chính xác.  
  - Hạ tầng test (JUnit + Mockito + MockMvc) đã được thiết lập sẵn sàng và hoạt động ổn định.  

- **Hạn chế**:  
  - Tầng Controller thiếu test, nhất là với các endpoint bảo mật.  
  - Branch coverage thấp, dễ bỏ sót các nhánh điều kiện quan trọng.

- **Hướng cải thiện**:  
  Viết thêm test cho Controller — dùng `@WebMvcTest` kết hợp giả lập người dùng (`@WithMockUser`, `SecurityMockMvcRequestPostProcessors`) để bao phủ cả trường hợp thành công và thất bại khi xác thực.  
  Tăng branch coverage — tạo các kịch bản mock trả về exception hoặc giá trị null để kiểm tra nhánh xử lý lỗi.  
  Mục tiêu: ít nhất **80%** instruction coverage và **60%** branch coverage trước khi hoàn thiện module.

8\. Cài Đặt và Thiết Lập
----------------------------------

### **1\. Thiết lập Frontend (React.js)**

#### Bước 1: Cài đặt Node.js và npm
Bạn cần **Node.js** và **npm** (Node Package Manager) để quản lý các phụ thuộc frontend và chạy máy chủ phát triển.
*   **Tải Node.js:** [Node.js Downloads](https://nodejs.org/)
    
Kiểm tra cài đặt:

```bash
node -v
npm -v
```

#### Bước 2: Clone Dự Án React
Clone dự án Spring Boot từ GitHub hoặc hệ thống quản lý phiên bản khác.
```bash
git clone https://github.com/EvoMinhQuan04/project_midterm_javaTechnology.git
```

#### Bước 3: Cài đặt Các Phụ Thuộc
Đi đến thư mục frontend và cài đặt tất cả các phụ thuộc cần thiết.

```bash
cd frontend
npm install
``` 

#### Bước 4: Cấu hình API Endpoints

Đảm bảo rằng ứng dụng React được cấu hình để giao tiếp với backend. Thông thường, điều này được thực hiện trong thư mục src/api hoặc src/services, nơi bạn định nghĩa URL backend cho các cuộc gọi API.
Đảm bảo rằng biến BASE_URL đúng địa chỉ đến server frontend. Bạn có thể kiểm tra trong service/ApiService.js
```bash
BASE_URL = "http://localhost:8080";
```

#### Bước 5: Chạy Máy Chủ Phát Triển React

Khởi động máy chủ phát triển React:

```bash
npm start
``` 
Điều này sẽ khởi động ứng dụng React tại http://localhost:3000 theo mặc định.

#### Bước 6: Kiểm tra Frontend
Sau khi ứng dụng React đã chạy, mở trình duyệt và truy cập vào **http://localhost:3000** để xem ứng dụng.

### **2\. Thiết lập Backend (Spring Boot)**

#### Bước 1: Cài đặt Java và Maven
Đảm bảo rằng Java Development Kit (JDK) và Maven đã được cài đặt trên máy tính của bạn.

*   **JDK:** Spring Boot yêu cầu JDK 8 hoặc phiên bản mới hơn. Tải và cài đặt JDK cho hệ điều hành của bạn.
    *   **Tải JDK:** [AdoptOpenJDK](https://adoptopenjdk.net/)
*   **Maven:** Spring Boot cũng yêu cầu Maven để xây dựng và quản lý các phụ thuộc.    
    *   **Tải Maven:** [Apache Maven](https://maven.apache.org/download.cgi)
        
#### Bước 2: Clone Dự Án Spring Boot
Clone dự án Spring Boot từ GitHub hoặc hệ thống quản lý phiên bản khác.
```bash
git clone https://github.com/EvoMinhQuan04/project_midterm_javaTechnology.git
```

#### Bước 3: Thiết lập Cơ sở Dữ liệu (MySQL)
Đảm bảo bạn đã cài đặt MySQL và thiết lập cơ sở dữ liệu cho ứng dụng Spring Boot.
1.  **Cài đặt MySQL:** Nếu bạn chưa có MySQL, làm theo hướng dẫn tại [MySQL Downloads](https://dev.mysql.com/downloads/).
2.  **Tạo Cơ sở Dữ liệu:** Trong MySQL, tạo cơ sở dữ liệu mà ứng dụng Spring Boot sẽ sử dụng.

```bash
CREATE DATABASE your_db;
```
#### Bước 4: Cấu hình Application Properties
Cấu hình kết nối cơ sở dữ liệu trong tệp application.properties hoặc application.yml nằm trong src/main/resources. Chỉnh sửa lại tên database và username, password của bạn và Xóa **123** ở cuối *aws.s3.accessKey* và *aws.s3.secretKey* để chạy được vì lý do bảo mật nên github đã chặn public key khi push lên github, vì thế phải xóa kí tự tôi đã thêm vào.

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/your_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

#JWT
security.jwt.secret-key =09AsC/ucc50zVPxpaxTXGK5NC90jU1XtzJv62R0ROxtMXQ7ANBsv4TMzkUDopYdR
security.jwt.expiration-time=3600000

# AWS S3 configuration
aws.s3.accessKey=AKIA2ZIOM6RCSLKMPCSY123
aws.s3.secretKey=Kr89ZFzg/JaT4j5UopbA3egLE1vjxODVdkxHN7lc123

# Admin account
admin.email=admin@gmail.com
admin.password=12341234
```

#### Bước 5: Xây dựng và Chạy Backend
1.  Mở terminal trong thư mục gốc của dự án.
2.  Sử dụng Maven để xây dựng và chạy ứng dụng.
    
```bash
./mvnw clean install | mvn clean test (nếu muốn chạy test)
./mvnw spring-boot:run
```
3.  Hoặc bạn có thể chạy ứng dụng từ IDE của mình (IntelliJ IDEA hoặc Eclipse).
4.  Ứng dụng backend sẽ chạy trên http://localhost:8080 theo mặc định.

9\. Link Video Demo Dự án
---------------------------------------
Ấn vào link bên dưới để xem được video demo các chức năng của sản phẩm.
### https://youtu.be/65YVFSXuGNY




