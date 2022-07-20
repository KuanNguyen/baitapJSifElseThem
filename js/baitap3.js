/**
 * Author: Nguyễn Minh Quân
 * Function: Bài tập 1 : sắp xếp 3 số theo thứ tự tăng dần
 * Release: 16/07/2022
 */


/**
 * Khối 1: Input
 * num
 * 
 * 
 * khối 2 : các bước xử lí 
 *      tạo ba biến chứa dữ liệu soHangTram, soHangChuc, soHangDonvi
 *      trích số ở số hàng trăm và luu vào biến soHangTram
 *      trích số ở số hàng chục và lưu vào biến soHangChuc
 *      trích số ở số hàng Đon vị và lưu vào biến soHangDonVi
 *      
 *      tạo mệnh đề switch case cho cách đọc số hàng trăm
 *      tạo mệnh đề switch case cho cách đọc số hàng chục
 *      tạo mệnh đề switch case cho cách đọc số hàng dơn vị
 * 
 *khối 3 : output
    in cách đọc số 
 *      
 *       
 */











function docSo() {
    var num = document.getElementById("so").value;
    var soHangtram = 0;
    var soHnagChuc = 0;
    var soHangDonVi = 0;
    var soTram = "";
    var soChuc = "";
    var soDonVi = "";

    if (num < 100 && num > 999) {
        document.getElementById("alert3").innerHTML = "Nhập số tự nhiên có 3 chũ số"
    }

    soHangtram = Math.floor(num / 100);
    soHnagChuc = Math.floor(num % 100 / 10);
    soHangDonVi = num % 100 % 10;


    switch (soHangtram) {
        case 1:
            soTram = "Một trăm";
            break;
        case 2:
            soTram = "Hai trăm";
            break;
        case 3:
            soTram = "Ba trăm";
            break;
        case 4:
            soTram = "Bốn trăm";
            break;
        case 5:
            soTram = "Năm trăm";
            break;
        case 6:
            soTram = "Sáu trăm";
            break;
        case 7:
            soTram = "Bảy trăm";
            break;
        case 8:
            soTram = "Tám trăm";
            break;
        case 9:
            soTram = "Chín trăm";
            break;
        default:
            break;
    }

    switch (soHnagChuc) {
        case 0:
            soChuc = " lẻ "
            console.log(soChuc)
            break;
        case 1:
            soChuc = " mười "
            break;
        case 2:
            soChuc = " hai mươi "
            break;
        case 3:
            soChuc = "ba mươi";
            break;
        case 4:
            soChuc =  "bốn mươi";
            break;
        case 5:
            soChuc =  "năm mươi";
            break;
        case 6:
            soChuc = "sáu mươi";
            break;
        case 7:
            soChuc = "bảy mươi";
            break;
        case 8:
            soChuc = "tám mươi";
            break;
        case 9:
            soChuc =  "chín mươi";
            break;
        default:
        break;
    }

    switch (soHangDonVi) {
        case 0:
            soDonVi = "";
            break;
        case 1:
            soDonVi ="một"
            break;
        case 2:
            soDonVi = "hai";
            break;
        case 3:
            soDonVi = "ba";
            break;
        case 4:
            soDonVi = "bốn";
            break;
        case 5:
            soDonVi = "năm";
            break;
        case 6:
            soDonVi = "sáu";
            break;
        case 7:
            soDonVi = "bảy";
            break;
        case 8:
            soDonVi = "tám";
            break;
        case 9:
            soDonVi = "chín";
            break;
        default:
            break;
    }

    document.getElementById("alert3").innerHTML = soTram + soChuc + soDonVi;

}

document.getElementById("docSo").onclick = docSo;