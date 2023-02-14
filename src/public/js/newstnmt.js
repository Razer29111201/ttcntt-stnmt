

// cntt
var demo = $('#demo')
demo.pagination({
    dataSource: '/news/tnmt3',
    locator: 'tnmt',
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
        url: '/news/tnmt3?page=' + value,
        type: 'get',
        success: (function (data) {
            $('#news').html('')
            for (let i = 0; i < data.tnmt.length; i++) {
                var iem = ($(`<div class="news">
                <div class="new-img">
                    <a href="/news/${data.tnmt[i].id}">
                        <img src="${data.tnmt[i].thump}" alt="">
                    </a>
                </div>
                <div class="news-title">
                    <div class="news-heading">
        
        
                        <a href="/news/${data.tnmt[i].id}">
                        ${data.tnmt[i].heading}
                        </a>
        
        
                    </div>
                    <div class="news-summary">
                        <p>
                        ${data.tnmt[i].title}
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




