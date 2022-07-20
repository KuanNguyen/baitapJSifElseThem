/**
 * Khối 1: input
 *   ten sinh vien 1 : name1;
 *   ten sinh vien 2 : name2;
 *   ten sinh vien 3 : name3;
 *   toa do sinh vien 1 : x1,y1;
 *   toa do sinh vien 2 : x2,y2;
 *   toa do sinh vien 3 : x3,y3;
 *   toa do truong hoc : x4,y4;
 * 
 * khối 2 : các bước xử lí 
 *   tạo 3 biến d1 , d2 , d3 ứng với quãng đường từ nhà đến trường của ba sinh viên 1,2,3
 *   tính quãng dường từ nhà ba sinh viên 
 *   d1, d2, d3 = căn bậc hai của bình phương x1 - x4 + bình bương y1 - y4  
 * 
 *   nếu d1 > d2 và d1 > d3
 *     nhà của sinh viên 1 xa nhất
 *   hoặc nếu d2 lớn hơn d3 
 *     nhà của sinh viên 2 xa nhất
 *   nếu khoogn thỏa hai điều kiện trên
 *      nhà của sinh viên 3 xa nhất 
 * 
 * khối 3
 *    in tên của sinh viên có nhà xa nhất
 */











function svXaNhat() {
    var name1 = document.getElementById("ten1").value;
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var name2 = document.getElementById("ten2").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;
    var name3 = document.getElementById("ten3").value;
    var x3 = document.getElementById("x3").value;
    var y3 = document.getElementById("y3").value;
    
    var x4 = document.getElementById("x4").value;
    var y4 = document.getElementById("y4").value;


    var d1 = Math.sqrt(Math.pow((Number(x1) - Number(x4)),2) + ((Math.pow(Number(y1) - Number(y4)),2)));
    console.log(d1);
    var d2 = Math.sqrt(Math.pow((Number(x2) - Number(x4)),2) + ((Math.pow(Number(y2) - Number(y4)),2)));
    console.log(d2);
    var d3 = Math.sqrt(Math.pow((Number(x3) - Number(x4)),2) + ((Math.pow(Number(y3) - Number(y4)),2)));
    console.log(d3);


    if (d1 > d2 && d1 > d3) {
        document.getElementById("alert4").innerHTML = "Nhà sinh viên " + name1 + " xa nhất";
    } else if (d2 > d3) {
        document.getElementById("alert4").innerHTML = "Nhà sinh viên " + name2 + " xa nhất";
    } else {
        document.getElementById("alert4").innerHTML = "Nhà sinh viên " + name3 + " xa nhất";
    }
   
}

document.getElementById("svXaNhat").onclick = svXaNhat;