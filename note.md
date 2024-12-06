# Queue

- Danh sách các công việc được chờ xử lý
- Công việc nào đưa vào trước -> Ưu tiên xử lý trước
- Công việc nào đưa vào sau -> Xử lý sau
- Công việc đã xử lý xong -> Xóa khỏi hàng đợi (Dành cho các công việc tiếp theo được xử lý)

## Cấu trúc

```
Queue 1
    - Job 1
    - Job 2
    - Job 3
    ...

Queue 2
    - Job 1
    - Job 2
    - Job 3
    ....
```

## Bài toán

### Case 1: Xây dựng chức năng đăng ký tài khoản

- Bước 1: Submit Form

- Bước 2: Thêm data vào database

- Bước 3: Gửi email ==> Chậm hoặc không thành công

- Bước 4: Chuyển trang cảm ơn

Giải pháp:

- Bước 1: Submit Form

- Bước 2: Thêm data vào database

- Bước 3: Mô tả công việc gửi email và đưa vào hàng đợi ==> Xử lý sau

- Bước 4: Chuyển trang cảm ơn

Server ==> Đọc các job hàng đợi ==> Lấy job và thực thi (Background Task)

- Người dùng không phải đợi quá trình thực thi nếu task mất thời gian
- Nếu bị failed --> Retry job (3 lần) --> Nếu vẫn failed gửi thông báo cho quản trị viên

### Case 2: Upload video

Bước 1: Chọn file video

Bước 2: Đẩy video lên server

Bước 3: Xử lý video (Transcode)

Mô tả quá trình transcode và đưa vào hàng đợi

Server => Lấy job => Tự động xử lý (Background Task) ==> Người dùng không phải đợi

Ví dụ: Youtube

### Case 3: Gửi email hàng loạt

- Bước 1: Soạn tiêu đề và nội dung email

- Bước 2: Chọn danh sách email cần gửi đến (2000 email)

- Bước 3: Lặp và gửi

## Cấu trúc của 1 job

- Action: Logic cần xử lý trong job
- Data: Dữ liệu muốn đưa vào job

```
{
    data: {"email": "hoangan.web@gmail.com", "subject": "Tiêu đề", "message": "Nội dung"},
    handler: "sendMailAfterRegister"
}
{
    data: {"email": "hoangan.web@gmail.com", "subject": "Tiêu đề", "message": "Nội dung"},
    handler: "sendMailAfterRegister"
}
{
    data: {"email": "hoangan.web@gmail.com", "subject": "Tiêu đề", "message": "Nội dung"},
    handler: "sendMailAfterRegister"
}
```

## Queue Store

- Nơi lưu trữ hàng đợi
- Database, Redis, File,...

## Vấn đề trong Queue

- Driver: Redis
- Thêm job vào queue
- Có delay không?
- Có retry không? Nếu có xác định số lần (Lời khuyên: 3 lần)

# Event

- Lan tỏa hành động tới toàn bộ dự án
- B1: Dispatch Event
- B2: Listener

Ví dụ:

User login ==> Thực hiện 1 số công việc ==> Dispatch Event: user.login

Bất kỳ đâu trong project -> Lắng nghe event user.login

- Gửi email cho chính nó

Bất kỳ đâu trong project -> Lắng nghe event user.login

- Gửi thông báo lên trình duyệt

Kỹ thuật đặt tên event

- product.saving
- product.saved
- product.creating
- product.created
- product.updating
- product.updated
- product.deleting
- product.deleted

Lưu ý: Không hardcode dưới mọi hình thức

## Đặt giá khuyến mãi

price
sale_price
sale_end_date
