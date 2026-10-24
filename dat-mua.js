// Biểu mẫu đặt mua — TEC-87. Theo DESIGN.md TEC-85 mục 6.
// Lưu ý: chưa có backend — gửi đơn hiện chỉ kiểm tra dữ liệu tại chỗ và
// hiện thông báo xác nhận + mã đơn tạm. Tích hợp gửi đơn thật là việc riêng.
(function () {
  "use strict";

  var QUY_CACH = {
    "mat-ong-rung": ["Lọ thủy tinh 500ml", "Lọ thủy tinh 1 lít"],
    "mat-ong-hoa-ca-phe": ["Lọ thủy tinh 500ml", "Lọ thủy tinh 1 lít"],
    "ca-phe-hat": ["Túi 250g", "Túi 500g", "Túi 1kg"],
    "ca-phe-bot": ["Túi 250g", "Túi 500g"]
  };

  var TEN_SAN_PHAM = {
    "mat-ong-rung": "Mật ong rừng nguyên chất",
    "mat-ong-hoa-ca-phe": "Mật ong hoa cà phê",
    "ca-phe-hat": "Cà phê hạt rang nguyên chất",
    "ca-phe-bot": "Cà phê bột pha phin"
  };

  var form = document.getElementById("order-form");
  var sanPham = document.getElementById("san-pham");
  var quyCach = document.getElementById("quy-cach");
  var submitBtn = document.getElementById("submit-btn");
  var confirmation = document.getElementById("confirmation");

  function setError(id, message) {
    var el = document.getElementById(id);
    if (!message) { el.hidden = true; el.textContent = ""; return false; }
    el.hidden = false;
    el.textContent = message;
    return true;
  }

  function capNhatQuyCach() {
    var list = QUY_CACH[sanPham.value] || [];
    quyCach.innerHTML = "";
    var macDinh = document.createElement("option");
    macDinh.value = "";
    macDinh.textContent = list.length ? "— Chọn quy cách —" : "— Chọn sản phẩm trước —";
    quyCach.appendChild(macDinh);
    list.forEach(function (qc) {
      var opt = document.createElement("option");
      opt.value = qc;
      opt.textContent = qc;
      quyCach.appendChild(opt);
    });
    quyCach.disabled = list.length === 0;
    setError("err-san-pham", "");
    setError("err-quy-cach", "");
  }

  // Chọn sẵn sản phẩm khi trang chính dẫn tới kèm ?san-pham=<mã>
  // (theo DESIGN.md: nút "Đặt mua" ở thẻ sản phẩm chọn sẵn sản phẩm đó).
  function chonSanTuThamSo() {
    var params = new URLSearchParams(window.location.search);
    var ma = params.get("san-pham");
    if (ma && QUY_CACH[ma]) {
      sanPham.value = ma;
      capNhatQuyCach();
    }
  }

  function kiemTra() {
    var coLoi = false;
    var hoTen = document.getElementById("ho-ten").value.trim();
    var sdt = document.getElementById("so-dien-thoai").value.replace(/[\s.]/g, "");
    var diaChi = document.getElementById("dia-chi").value.trim();
    var tinhThanh = document.getElementById("tinh-thanh").value.trim();
    var soLuongRaw = document.getElementById("so-luong").value.trim();
    var soLuong = Number(soLuongRaw);

    coLoi = setError("err-ho-ten", hoTen ? "" : "Vui lòng nhập họ tên.") || coLoi;
    coLoi = setError("err-so-dien-thoai",
      /^0\d{9}$/.test(sdt) ? "" : "Số điện thoại phải có 10 số, bắt đầu bằng 0.") || coLoi;
    coLoi = setError("err-dia-chi", diaChi ? "" : "Vui lòng nhập địa chỉ giao hàng.") || coLoi;
    coLoi = setError("err-tinh-thanh", tinhThanh ? "" : "Vui lòng nhập tỉnh/thành.") || coLoi;
    coLoi = setError("err-san-pham", sanPham.value ? "" : "Vui lòng chọn sản phẩm.") || coLoi;
    coLoi = setError("err-quy-cach", quyCach.value ? "" : "Vui lòng chọn quy cách đóng gói.") || coLoi;
    coLoi = setError("err-so-luong",
      (soLuongRaw !== "" && Number.isInteger(soLuong) && soLuong >= 1)
        ? "" : "Số lượng phải là số nguyên từ 1 trở lên.") || coLoi;
    return !coLoi;
  }

  function taoMaDon() {
    var now = new Date();
    function pad(n) { return String(n).padStart(2, "0"); }
    return "DH-" + now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate())
      + "-" + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
  }

  sanPham.addEventListener("change", capNhatQuyCach);
  chonSanTuThamSo();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    setError("err-form", "");
    confirmation.hidden = true;
    if (!kiemTra()) {
      var firstError = form.querySelector(".error:not([hidden])");
      if (firstError) { firstError.scrollIntoView({ block: "center" }); }
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Đang gửi...";
    // Không có backend: mô phỏng gửi đơn rồi hiện xác nhận tại chỗ.
    setTimeout(function () {
      var ghiChu = document.getElementById("ghi-chu").value.trim();
      document.getElementById("ma-don").textContent = taoMaDon();
      document.getElementById("tom-tat-don").innerHTML = "";
      var rows = [
        ["Họ tên", document.getElementById("ho-ten").value.trim()],
        ["Số điện thoại", document.getElementById("so-dien-thoai").value.replace(/[\s.]/g, "")],
        ["Địa chỉ", document.getElementById("dia-chi").value.trim()
          + ", " + document.getElementById("tinh-thanh").value.trim()],
        ["Sản phẩm", TEN_SAN_PHAM[sanPham.value]],
        ["Quy cách", quyCach.value],
        ["Số lượng", document.getElementById("so-luong").value.trim()]
      ];
      if (ghiChu) { rows.push(["Ghi chú", ghiChu]); }
      var dl = document.getElementById("tom-tat-don");
      rows.forEach(function (row) {
        var dt = document.createElement("dt");
        dt.textContent = row[0];
        var dd = document.createElement("dd");
        dd.textContent = row[1];
        dl.appendChild(dt);
        dl.appendChild(dd);
      });
      confirmation.hidden = false;
      confirmation.scrollIntoView({ block: "center" });
      submitBtn.disabled = false;
      submitBtn.textContent = "Gửi đơn đặt mua";
    }, 500);
  });
})();
