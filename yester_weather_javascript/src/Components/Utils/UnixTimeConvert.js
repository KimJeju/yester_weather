function UnixTimeConvert(t){
    var date = new Date(t*1000);
    var hour =  date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    // return hour + "시" + minute + "분" + second + "초";
    return hour + "시" + minute + "분"
}

export default UnixTimeConvert;