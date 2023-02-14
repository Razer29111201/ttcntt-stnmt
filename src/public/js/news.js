var demo = $('#demo')

demo.pagination({
    dataSource: '/news/ajj',
    locator: 'news',
    pageSize: 8,
    totalNumberLocator: function (response) {

        console.log(response.total);
        return response.total;
    },
    afterPageOnClick: function (a, b) {
        loadpage(b)
    },
    afterPreviousOnClick: function (a, b) {
        loadpage(b)
    },
    afterNextOnClick: function (a, b) {
        loadpage(b)
    }

})
function loadpage(value) {




    $.ajax({
        url: '/news/ajj?page=' + value,
        type: 'get',
        success: (function (data) {
            $('#news').html('')
            for (let i = 0; i < data.news.length; i++) {
                var iem = ($(`<div class="news">
                <div class="new-img">
                    <a href="/news/${data.news[i].id}">
                        <img src="${data.news[i].thump}" alt="">
                    </a>
                </div>
                <div class="news-title">
                    <div class="news-heading">
        
        
                        <a href="/news/${data.news[i].id}">
                        ${data.news[i].heading}
                        </a>
        
        
                    </div>
                    <div class="news-summary">
                        <p>
                        ${data.news[i].title}
                        </p>
                        <span>29/11/2023</span>
                    </div>
                </div>
            </div>`))
                $('#news').append(iem)
            }

        }),
        error: function (e) {
            console.log(e.message);
        }
    })
}
console.log($('#dem'));



