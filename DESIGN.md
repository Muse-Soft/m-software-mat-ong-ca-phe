# Thiết kế giao diện — Landing page Nông trại Đắk Lắk: Mật ong rừng & Cà phê nguyên chất

- Mã việc: TEC-85 | Epic: TEC-84 | Project Linear: m-software-mat-ong-ca-phe
- Repo: Muse-Soft/m-software-mat-ong-ca-phe
- Đối tượng: khách lẻ toàn quốc mua mật ong rừng và cà phê nguyên chất.
- Mục tiêu: khách hiểu câu chuyện nông trại trong 30 giây, chọn được sản phẩm + quy cách, và gửi đơn đặt mua trong 2 phút, ngay trên điện thoại.

## 1. Nguyên tắc thiết kế

- Mobile-first: thiết kế cho màn hình điện thoại trước, rồi mở rộng lên desktop.
- Một màn hình, một việc: mỗi mục chỉ trả lời một câu hỏi của khách ("Đây là ai?", "Mua gì?", "Làm ra sao?", "Giao hàng thế nào?", "Đặt mua ra sao?").
- Nút đặt mua luôn thấy được: nút CTA chính lặp lại cuối mỗi mục sản phẩm và cố định ở cuối màn hình mobile.
- Ảnh thật của nông trại được ưu tiên hơn ảnh minh họa; mỗi sản phẩm có đúng một ảnh đại diện rõ lọ/hộp và quy cách.

## 2. Design tokens

### 2.1. Màu sắc (tông vàng mật ong + nâu cà phê)

| Token | Giá trị | Dùng cho |
|---|---|---|
| `--honey-500` (vàng mật ong chủ đạo) | `#E8A020` | Nút CTA chính, tiêu đề mục, điểm nhấn |
| `--honey-300` (vàng mật nhạt) | `#F5C86B` | Nền highlight, badge "Bán chạy" |
| `--honey-100` (vàng kem) | `#FDF3DC` | Nền các mục xen kẽ |
| `--coffee-900` (nâu cà phê đậm) | `#3B2314` | Tiêu đề, chữ chính, footer |
| `--coffee-700` (nâu cà phê) | `#5C3A21` | Chữ phụ, viền thẻ |
| `--coffee-500` (nâu vừa) | `#8A5A32` | Icon, đường phân cách |
| `--cream` (kem nền) | `#FFFBF2` | Nền trang |
| `--white` | `#FFFFFF` | Nền thẻ sản phẩm |
| `--leaf` (xanh lá điểm xuyết, dùng ít) | `#4E7A3A` | Badge "Nguyên chất", "Thu hoạch tự nhiên" |
| `--danger` (đỏ cảnh báo, chỉ dùng cho lỗi form) | `#C0392B` | Thông báo lỗi biểu mẫu |

Quy tắc: nền trang kem, chữ nâu đậm, CTA vàng mật ong với chữ nâu đậm (đảm bảo tương phản đọc được). Không dùng quá 3 màu nhấn trên một màn hình.

### 2.2. Typography

- Font tiêu đề: một font serif đậm, ấm (ví dụ Playfair Display hoặc Be Vietnam Pro Bold) — cảm giác thủ công, nông trại.
- Font nội dung: font sans-serif rõ ràng trên mobile (ví dụ Be Vietnam Pro Regular) — hỗ trợ tốt tiếng Việt có dấu.
- Cỡ chữ mobile: tiêu đề lớn 28px, tiêu đề mục 22px, tiêu đề thẻ 17px, nội dung 15–16px, chú thích 13px. Dòng cách nhau tối thiểu 1,5 lần cỡ chữ.

### 2.3. Khoảng cách & lưới

- Lề hai bên mobile: 16px; desktop: nội dung tối đa 1140px, căn giữa.
- Khoảng cách giữa các mục: 48px mobile / 72px desktop.
- Thẻ sản phẩm: bo góc 16px, bóng nhẹ, ảnh tỉ lệ 4:3.

## 3. Bố cục trang (theo thứ tự từ trên xuống)

### Mục 1 — Hero (màn hình đầu tiên)

- Ảnh nền: tổ ong / rẫy cà phê Đắk Lắk, phủ lớp nâu mờ để chữ đọc được.
- Tiêu đề: "Mật ong rừng & cà phê nguyên chất — từ nông trại Đắk Lắk đến tận nhà bạn."
- Dòng phụ 1 câu: không pha trộn, thu hoạch thủ công, giao toàn quốc.
- 2 nút: "Xem sản phẩm" (vàng mật ong) và "Đặt mua ngay" (viền nâu).
- 3 badge tin cậy: "Nguyên chất 100%", "Thu hoạch thủ công", "Giao toàn quốc".

### Mục 2 — Câu chuyện nông trại

- Tiêu đề: "Câu chuyện nông trại".
- Bố cục mobile: ảnh nông trại (trên) + 3 đoạn ngắn (dưới), mỗi đoạn 2–3 câu:
  1. Nông trại ở đâu, làm từ khi nào (Đắk Lắk).
  2. Nuôi ong lấy mật rừng và trồng cà phê ra sao.
  3. Cam kết nguyên chất: không pha đường, không hương liệu.
- Desktop: 2 cột (ảnh trái, chữ phải). Có 1 câu trích dẫn ngắn của chủ trại làm điểm nhấn.

### Mục 3 — Danh sách sản phẩm (kèm giá và quy cách đóng gói)

- Tiêu đề: "Sản phẩm".
- Mỗi sản phẩm là một thẻ gồm: ảnh, tên, mô tả 1 dòng, **giá**, **quy cách đóng gói**, nút "Đặt mua" (cuộn tới biểu mẫu và chọn sẵn sản phẩm đó).
- Danh mục gợi ý cho Dev (giá và quy cách là khung mẫu — Dev/PO điền số liệu thật trước khi công bố, không tự bịa giá bán):
  - Mật ong rừng nguyên chất — lọ thủy tinh 500ml / 1 lít.
  - Mật ong hoa cà phê — lọ thủy tinh 500ml / 1 lít.
  - Cà phê hạt rang nguyên chất — túi 250g / 500g / 1kg.
  - Cà phê bột pha phin — túi 250g / 500g.
- Lưu ý cho Dev: giá hiển thị dạng "xxx.xxx ₫ / quy cách"; nếu chưa có giá thật thì để trống và gắn cờ chờ PO xác nhận, không tự điền số.
- Bố cục: mobile 1 cột; tablet 2 cột; desktop 3–4 cột. Thẻ "Bán chạy" gắn badge vàng mật ong.

### Mục 4 — Quy trình thu hoạch và chế biến

- Tiêu đề: "Từ rẫy về tới nhà bạn".
- Dạng timeline 4 bước, mobile xếp dọc, mỗi bước có số thứ tự + icon + mô tả 1–2 câu:
  1. Thu hoạch: lấy mật đúng mùa hoa; hái cà phê chín tay.
  2. Sơ chế: lọc mật thô, phơi/sấy cà phê.
  3. Chế biến: rang cà phê vừa tới, đóng mật không qua xử lý nhiệt cao.
  4. Đóng gói & kiểm tra: niêm phong, kiểm tra trước khi giao.
- Mỗi bước kèm ảnh nhỏ (nếu có ảnh thật).

### Mục 5 — Chính sách giao hàng toàn quốc

- Tiêu đề: "Giao hàng toàn quốc".
- 4 thẻ thông tin ngắn, dạng icon + 1 dòng: phạm vi (63 tỉnh thành), thời gian giao dự kiến, phí giao hàng (theo khu vực / miễn phí theo đơn tối thiểu — chờ PO chốt số), đổi trả khi sản phẩm lỗi do vận chuyển.
- Lưu ý cho Dev: các con số phí/thời gian là khung mẫu, phải do PO xác nhận trước khi công bố; không tự điền số liệu.

### Mục 6 — Biểu mẫu đặt mua

- Tiêu đề: "Đặt mua".
- Các trường: họ tên (*), số điện thoại (*), địa chỉ giao hàng (*), tỉnh/thành (*), sản phẩm + quy cách (chọn từ danh sách, chọn sẵn khi bấm "Đặt mua" ở thẻ sản phẩm), số lượng (*, mặc định 1), ghi chú (tùy chọn).
- Nút gửi: "Gửi đơn đặt mua" (vàng mật ong, toàn chiều rộng trên mobile).
- Sau khi gửi: hiện thông báo xác nhận "Đã nhận đơn — nông trại sẽ liên hệ xác nhận trong 24h" và mã đơn tạm (nếu có).
- Kiểm tra form: bắt buộc họ tên, số điện thoại đúng định dạng Việt Nam (10 số, bắt đầu bằng 0), địa chỉ không trống; lỗi hiện chữ đỏ ngay dưới trường sai.

### Footer

- Tên nông trại, địa chỉ Đắk Lắk, số điện thoại, giờ liên hệ, link chính sách (giao hàng, đổi trả). Nền nâu cà phê đậm, chữ kem.

## 4. Responsive & trạng thái

- Breakpoint: mobile < 768px (1 cột, CTA cố định dưới màn hình); tablet 768–1024px (2 cột sản phẩm); desktop > 1024px (nội dung tối đa 1140px).
- Ảnh co theo chiều rộng màn hình, không tràn lề; chữ không nhỏ dưới 13px trên mobile.
- Trạng thái cần Dev xử lý: đang gửi đơn (nút mờ + chữ "Đang gửi..."), gửi thành công, gửi lỗi (hiện thông báo thử lại, giữ nguyên dữ liệu đã nhập).
- Tương phản: chữ nâu đậm trên nền kem/vàng nhạt đạt tỉ lệ tương phản tối thiểu 4,5:1 cho nội dung.

## 5. Bàn giao cho Dev

- File này là tài liệu thiết kế duy nhất của TEC-85; Dev ở task sau làm theo đúng thứ tự 6 mục và tokens ở mục 2.
- Các mục cần PO xác nhận trước khi công bố (không tự điền): giá bán + quy cách thật, phí/thời gian giao hàng, số điện thoại/địa chỉ nông trại, ảnh thật của nông trại và sản phẩm.
- Checklist đối chiếu AC của TEC-85: câu chuyện nông trại (mục 2) ✓; sản phẩm kèm giá + quy cách (mục 3) ✓; quy trình thu hoạch/chế biến (mục 4) ✓; chính sách giao hàng toàn quốc (mục 5) ✓; biểu mẫu đặt mua (mục 6) ✓; tông vàng mật ong + nâu cà phê (mục 2) ✓; hiển thị tốt trên mobile (mục 4) ✓.
