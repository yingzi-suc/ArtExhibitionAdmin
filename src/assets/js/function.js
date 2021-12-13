const fn = {
    getDate() {
        let date = new Date(); //创建日期对象
        let year = date.getFullYear(); //年
        let month = date.getMonth() + 1; //月           
        let day = date.getDate();    //获取当前日（1 - 31）	
        let hour = date.getHours();   //获取当前小时（0-23）
        let minutes = date.getMinutes(); //获取当前分钟（0-59）
        //如果小于10 就拼接个0 否则不变
        month = month < 10 ? '0' + month : month;
        hour = hour < 10 ? '0' +hour:hour;
        minutes = minutes < 10 ? '0' +minutes:minutes;
        return year + '-' + month + '-' + day +' '+ hour +':'+ minutes
    }
}
export default fn