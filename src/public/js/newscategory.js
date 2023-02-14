

// cntt
var demo = $('#demo')
demo.pagination({
    dataSource: '/news/cntt1',
    locator: 'cntt',
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
        url: '/news/cntt1?page=' + value,
        type: 'get',
        success: (function (data) {
            $('#news').html('')
            for (let i = 0; i < data.cntt.length; i++) {
                var iem = ($(`<div class="news">
                <div class="new-img">
                    <a href="/news/${data.cntt[i].id}">
                        <img src="${data.cntt[i].thump}" alt="">
                    </a>
                </div>
                <div class="news-title">
                    <div class="news-heading">
        
        
                        <a href="/news/${data.cntt[i].id}">
                        ${data.cntt[i].heading}
                        </a>
        
        
                    </div>
                    <div class="news-summary">
                        <p>
                        ${data.cntt[i].title}
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


// htpt
// htpt




