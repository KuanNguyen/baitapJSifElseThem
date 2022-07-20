/**
 * Author: Nguyễn Minh Quân
 * Function: Bài tập 1 : sắp xếp 3 số theo thứ tự tăng dần
 * Release: 16/07/2022
 */

/**
 * Khối 1: input
 *  month , year
 * 
 * khối 2 các bước xử lí
 *     + nếu tháng có 31 ngày ( 1, 3, 5, 7, 8 ,10,12)
 *         cho hiện Tháng " + month + " năm " + year + " có 31 ngày ";
 *     + nếu tháng có 30 ngày (4, 6, 9,11)
 *          cho hiện Tháng " + month + " năm " + year + " có 30 ngày ";
 *     + nếu người dùng nhập tháng trên 12 hoặc dưới 1
 *          cho hiện " tháng không hợp lệ"
 * khối 3 : Out put
 *      in ngày trong tháng
 */


















function soNgay(){
    var month = document.getElementById("thang2").value;
    var year = document.getElementById("nam2").value;

   if(month == 1  || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ){
    document.getElementById("alert2").innerHTML = "Tháng " + month + " năm " + year + " có 31 ngày ";
   }else if(month == 4 || month == 6 || month == 9 || month == 11){
    document.getElementById("alert2").innerHTML = "Tháng " + month + " năm " + year + " có 30 ngày ";
   }else if(month == 2){
    if(Number(year) % 4 == 0){
        document.getElementById("alert2").innerHTML = "Tháng " + month + " năm " + year + " có 29 ngày ";
    }else{
        document.getElementById("alert2").innerHTML = "Tháng " + month + " năm " + year + " có 28 ngày ";
    }
   }else if (month < 1 || month > 12){
    document.getElementById("alert2").innerHTML = "Tháng không hợp lệ"
   }
}

document.getElementById("tringNgay").onclick = soNgay;