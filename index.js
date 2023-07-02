//bài 1
/**
 * input: lấy giá trị người dùng nhập
 * Progress: tính tổng số điểm thí sinh (đậu hay rớt)
 * Output: show kết quả tổng điểm của thí sinh, (đậu hay rớt)
 */
document.getElementById('btnBai1').onclick = function () {
  // Lấy giá trị từ các ô nhập liệu
  var diem_chuan = parseFloat(document.getElementById("diem_chuan").value);
  var diem_1 = parseFloat(document.getElementById("diem_1").value);
  var diem_2 = parseFloat(document.getElementById("diem_2").value);
  var diem_3 = parseFloat(document.getElementById("diem_3").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doi_tuong = parseInt(document.getElementById("doiTuong").value);

  // Tính điểm ưu tiên khu vực
  var diemUuTienKhuVuc = 0;
  if (khuVuc === "A") {
    diemUuTienKhuVuc = 2;
  } else if (khuVuc === "B") {
    diemUuTienKhuVuc = 1;
  } else if (khuVuc === "C") {
    diemUuTienKhuVuc = 0.5;
  }

  // Tính tổng điểm
  var diemTongKet = diem_1 + diem_2 + diem_3 + diemUuTienKhuVuc;

  // Tính điểm ưu tiên đối tượng
  var diemUuTienDoiTuong = 0;
  if (doi_tuong === 1) {
    diemUuTienDoiTuong = 2.5;
  } else if (doi_tuong === 2) {
    diemUuTienDoiTuong = 1.5;
  } else if (doi_tuong === 3) {
    diemUuTienDoiTuong = 1;
  }

  // Tính tổng điểm
  diemTongKet += diemUuTienDoiTuong;

  // Kiểm tra kết quả
  var ketQua = "";
  if (diemTongKet >= diem_chuan) {
    ketQua = "Đậu";
  } else {
    ketQua = "Rớt";
  }

  // Hiển thị kết quả lên trang web
 document.getElementById("ketQuaB1").innerHTML = "Tổng điểm: " + diemTongKet + "<br>Kết quả: " + ketQua;
};
// bài 2
/**
 * Input: lấy giá trị ng dùng nhập
 * Progress: Tính tiền điện
 * Output: Đưa ra kết quả tiền điện
 */

document.getElementById('btnBai2').onclick = function () {
  var ten = document.getElementById('ten').value
  var soKw = parseFloat(document.getElementById('soKw').value)
  // tính tiền điện
  var tienDien = 0;
  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 150) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else {
    tienDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKw - 150) * 1100;
  }
  // show kết quả
  var ketQua = document.getElementById('ketQuaB2');
  ketQua.innerHTML = '<p>Tên: ' + ten + '</p><p>Số Kw tiêu thụ: ' + soKw + '</p><p>Tổng tiền điện: ' + tienDien + ' đồng</p>';
}

//bài 3
/**
 *   Input: lấy giá trị ng dùng nhập
Progress: Tính tiền thuế thu nhâp cá nhân
Output: Đưa ra kết quả tiền thuế thu nhâp cá nhân

*/

document.getElementById('btnBai3').onclick = function () {
  // Lấy thông tin từ các trường input
  let hoTen = document.getElementById('hoTen').value;
  let tongThuNhap = parseFloat(document.getElementById('tongThuNhap').value);
  let soNguoiPhuThuoc = parseInt(document.getElementById('soNguoiPhuThuoc').value);

  // Tính thu nhập chịu thuế
  let thuNhapChiuThue = tongThuNhap - 4e+6 - (soNguoiPhuThuoc * 16e+5);

  // Tính thuế thu nhập cá nhân dựa trên mức thuế suất
  let thue = 0;
  if (thuNhapChiuThue > 0) {
    if (thuNhapChiuThue <= 6e+7) {
      thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 12e+7 && thuNhapChiuThue >6e+7 ) {
      thue = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue <= 21e+7 && thuNhapChiuThue> 12e+7) {
      thue = thuNhapChiuThue * 0.15;
    } else if (thuNhapChiuThue <= 384e+6 && thuNhapChiuThue >21e+7 ) {
      thue =thuNhapChiuThue  * 0.2;
    } else if (thuNhapChiuThue <= 624e+6 && thuNhapChiuThue > 384e+6) {
      thue =thuNhapChiuThue  * 0.25;
    } else if (thuNhapChiuThue <= 96e+7 && thuNhapChiuThue >624e+6) {
      thue =thuNhapChiuThue * 0.3;
    }else {
      thue = thuNhapChiuThue  * 0.35;
    }
  }

  // Hiển thị kết quả
  let ketQua = document.getElementById('ketQuaB3');
  ketQua.innerHTML = `${hoTen}, số tiền thuế thu nhập cá nhân phải nộp là ${thue} triệu đồng.`;
};
//bài 4
// input: lấy giá trị ng dùng nhập
// Progress:Tính tiền cap
// Output: đưa ra kết quả tiền cap 
document.getElementById('loaiKhachHang').addEventListener('change', function () {
  var select = document.getElementById('loaiKhachHang');
  var inputSoKetNoi = document.getElementById('soKetNoi');
  if (select.value === 'Nhà dân') {
    inputSoKetNoi.disabled = true;
    inputSoKetNoi.value = '';
  } else if (select.value === 'Doanh nghiệp') {
    inputSoKetNoi.disabled = false;
  }
});

document.getElementById('btnBai4').onclick = function () {
  var maKhachHang = document.getElementById('maKhachHang').value * 1;
  var soKenhCaoCap = document.getElementById('soKenhCaoCap').value * 1;
  var loaiKhachHang = document.getElementById('loaiKhachHang').value;
  var soKetNoi = 0;

  if (loaiKhachHang == 'Doanh nghiệp') {
    soKetNoi = document.getElementById('soKetNoi').value * 1;
  }
  var phiXuLyHoaDon, phiDichVuCoBan, phiThueKenh, tongTien;

  if (loaiKhachHang == 'Nhà dân') {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    phiThueKenh = 7.5 * soKenhCaoCap;
    tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenh;
  } else if (loaiKhachHang == 'Doanh nghiệp') {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
    phiThueKenh = 50 * soKenhCaoCap;
    tongTien = phiXuLyHoaDon + phiDichVuCoBan + phiThueKenh;
  }
  var ketQua = `Mã khách hàng : ${maKhachHang} | Loại khách hàng : ${loaiKhachHang} | Số kết nối : ${soKetNoi} | Số kênh cao cấp: ${soKenhCaoCap} | Tổng tiền: ${tongTien} USD`;

  document.getElementById('ketQuaB4').innerHTML = ketQua;
};

