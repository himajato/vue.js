class Format{


    /**---------------------------------------------------------
    * Format ngày tháng năm sinh từ bảng vào form sửa thông tin
    * @param {date} dob 
    * @returns 
    */
     dobFormatToForm(dob) {
        if (dob != null) {
            var date = new Date(dob);
            var day = date.getDate();
            var mon = date.getMonth() + 1;
            var year = date.getFullYear();
            day = day < 10 ? '0' + day : day;
            mon = mon < 10 ? '0' + mon : mon;
            return year + '-' + mon + '-' + day;
        } else return '';
    }

    /**-------------------------------------------
     * Format salary thành dạng 1.000.000.000
     * @param {number} salary kiểu dữ liệu là một số
     * @returns 
     * created by: NHNGHIA (19/7/2021)
     */
    salaryFormat(salary) {
        var result = '';
        if (salary != null) {
            for (var i = String(salary).length; i > 0; i = i - 3) {
                if (i > 3) {
                    var num = String(salary).slice(i - 3, i);
                    result += num.split("").reverse().join("") + ".";
                } else {
                    var num1 = String(salary).slice(0, i);
                    result += num1.split("").reverse().join("");
                }
            }
            return result.split("").reverse().join("");
        } else return '';
    }

    /**------------------------------------------------
    * Format ngày tháng năm sinh thành dạng dd/mm/yyyy
    * @param {any} dob tham số có kiểu dữ liệu bất kì
    * @returns 
    * created by: NHNGHIA (19/7/2021)
    */
     dobFormat(dob) {
        if (dob != null) {
            var date = new Date(dob);
            var day = date.getDate();
            var mon = date.getMonth() + 1;
            var year = date.getFullYear();
            day = day < 10 ? '0' + day : day;
            mon = mon < 10 ? '0' + mon : mon;
            return day + '/' + mon + '/' + year;
        } else return '';
    }
}

export default new Format();