function time() {

    var today = new Date()
    var crrday = today.getDay()
    var second = today.getSeconds()
    var minutes = today.getMinutes()
    var hour = today.getHours()
    var date = today.getDate()
    var dayname = '';
    if (second < 10) {
        second = '0' + second;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    switch (crrday) {
        case 0:
            dayname = "Chủ nhật";
            break;
        case 1:
            dayname = "Thứ hai";
            break;
        case 2:
            dayname = "Thứ ba";
            break;
        case 3:
            dayname = "Thứ tư";
            break;
        case 4:
            dayname = "Thứ năm";
            break;
        case 5:
            dayname = "Thứ sau";
            break;
        case 6:
            dayname = "Thứ bảy";
    }

    var time = dayname + ', ' + date + '/' + today.getMonth() + 1 + '/'
        + today.getFullYear() + ', ' + hour + 'h' + ":"
        + minutes + 'p' + ' (GMT +7)';
    document.getElementById("time").innerHTML = time;
    setTimeout("time()", 1000)

}
time()



var itemLi = document.querySelectorAll('.dashboard-item')
var news = document.querySelectorAll('.dashboard-content')
console.log(news);

function dashboard(index) {
    itemLi.forEach(item => {
        item.classList.remove('active')
    })
    news.forEach(item => {
        item.classList.add('hiden')
    })

    news[index].classList.remove('hiden')
    itemLi[index].classList.add('active')

}
itemLi.forEach((ieli, index) => {
    ieli.onclick = function () {
        dashboard(index)
    }
})


