/**
 * Author: Nguyễn Minh Quân
 * Function: Bài tập 1 : sắp xếp 3 số theo thứ tự tăng dần
 * Release: 16/07/2022
 */



/**
 * Khối 1 : input 
 * ngay, thang , nam
 * 
 * 
 * khối 2 : các bước xử lí 
 *  - Nút ngayHomQua :
 *       + tháng 1:
 *       nếu ngày nhập là 1
 *       cho hiện kết quá là : 31/12/ nam -1 
 *       nếu ngày nhập là trên 1 và dưới 31 
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 31 hoặc bé hơn 1
 *       cho hiện kết quả là : "Ngày không hợp lệ" 
 *       + tháng 2:
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 31/thang - 1/nam
 *       nếu ngày nhập là trên 1 và dưới 28
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 28 hoặc bé hơn 1
 *       cho hiện kết quả là : "Ngày không hợp lệ"
 *      + tháng 3:
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 28/thang - 1/nam
 *       nếu ngày nhập là trên 1 và dưới 31
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 31 hoặc bé hơn 1
 *       cho hiện kết quả là : ngày không hợp lệ
 *       + Với những tháng có 30 ngày (4,6,9,11)
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 31/thang - 1/nam
 *       nếu ngày nhập là trên 1 và dưới 30
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 30 hoạc bé hơn 1
 *       cho hiện kết quả là : ngày không hợp lệ
 *        + Với những tháng có 31 ngày (5,7,8,10,12)
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 30/thang - 1/nam
 *       nếu ngày nhập là trên 1 và dưới 31
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 31 hoặc bé hơn 1
 *       cho hiện kết quả là : ngày không hợp lệ
 * 
 * 
 *      Khối 3: in kết quả
 *         ngay/ thang / nam
 *        
 * 
 */










function dateDown() {
    var date = document.getElementById("ngay").value;
    var month = document.getElementById("thang").value;
    var year = document.getElementById("nam").value;



    if (month == 1) {
        if (date > 1 && date <= 31) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) - 1 + " / " + month + " / " + year;
        } else if (date == 1) {
            document.getElementById("alert1").innerHTML = "31 / 12 / " + (Number(year) - 1);
        } else if (date > 31 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    } else if (month == 2) {
        if (date > 1 && date <= 28) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) - 1 + " / " + month + " / " + year;
        } else if (date == 1) {
            document.getElementById("alert1").innerHTML = "31 / " + (Number(month) - 1) + " / " + year;
        } else if (date > 28 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    } else if (month == 3) {
        if (date > 1 && date <= 31) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) - 1 + " / " + month + " / " + year;
        } else if (date == 1) {
            document.getElementById("alert1").innerHTML = "28 / " + (Number(month) - 1) + " /" + year;
        } else if (date > 31 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (date > 1 && date <= 30) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) - 1 + " / " + month + " / " + year;
        } else if (date == 1) {
            document.getElementById("alert1").innerHTML = "31 / " + (Number(month) - 1) + year;
        } else if (date > 30  || date < 1 ) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    } else if (month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        if (date > 1 && date <= 31) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) - 1 + " / " + month + " / " + year;
        } else if (date == 31) {
            document.getElementById("alert1").innerHTML = "1 / " + (Number(month) + 1) + year;
        } else if (date > 31  || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    }
}

document.getElementById("ngayHomQua").onclick = dateDown;




/**
 * Khối 1 : input 
 * ngay, thang , nam
 * 
 * 
 * khối 2 : các bước xử lí 
 *  - Nút ngayHomSau :
 *       + tháng 2:
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 31/thang + 1/nam
 *       nếu ngày nhập là trên 1 và dưới 28
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 28 hoặc bé hơn 1
 *       cho hiện kết quả là : "Ngày không hợp lệ"
 *       + Với những tháng có 30 ngày (4,6,9,11)
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 31/thang - 1/nam
 *       nếu ngày nhập là trên 1 và dưới 30
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 30 hoặc bé hơn 1
 *       cho hiện kết quả là : ngày không hợp lệ
 *        + Với những tháng có 31 ngày (1,3,5,7,8,10)
 *       nếu ngày nhập là 1 
 *       cho hiện kết quả là : 30/thang - 1/nam
 *       nếu ngày nhập là trên 1 và dưới 31
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 31 hoặc bé hơn 1
 *       cho hiện kết quả là : ngày không hợp lệ
 *  + tháng 12:
 *       nếu ngày nhập là 1
 *       cho hiện kết quá là : 31/12/ nam -1 
 *       nếu ngày nhập là trên 1 và dưới 31 
 *       cho hiện kết quả là : ngày - 1/thang/nam 
 *       nếu ngày nhập là trên 31 hoạc bé hơn 1 
 *       cho hiện kết quả là : "Ngày không hợp lệ" 
 * 
 * 
 *      Khối 3: in kết quả
 *         ngay/ thang / nam
 *        
 * 
 */


function dateUp() {
    var date = document.getElementById("ngay").value;
    var month = document.getElementById("thang").value;
    var year = document.getElementById("nam").value;




    if (month == 2) {
        if (date >= 1 && date <= 28) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) + 1 + " / " + month + " / " + year;
        } else if (date == 28) {
            document.getElementById("alert1").innerHTML = "1 / " + (Number(month) + 1) + year;
        } else if (date > 28 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    }  else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (date >= 1 && date <= 30) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) + 1 + " / " + month + " / " + year;
        } else if (date == 30) {
            document.getElementById("alert1").innerHTML = "1 / " + (Number(month) + 1) + year;
        } else if (date > 30 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
        if (date >= 1 && date <= 31) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) + 1 + " / " + month + " / " + year;
        } else if (date == 31) {
            document.getElementById("alert1").innerHTML = "1 / " + (Number(month) + 1) + year;
        } else if (date > 31 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    } else if (month == 12) {
        if (date >= 1 && date < 31) {
            console.log(date, month, year);
            document.getElementById("alert1").innerHTML = Number(date) + 1 + " / " + month + " / " + year;
        } else if (date == 31) {
            document.getElementById("alert1").innerHTML = "1 / 1 " + "/" + (Number(year) + 1);
        } else if (date > 31 || date < 1) {
            document.getElementById("alert1").innerHTML = "Ngày không hợp lệ";
        }
    }
}
document.getElementById("ngayHomSau").onclick = dateUp;