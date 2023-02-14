

// cntt
var demo = $('#demo')
demo.pagination({
    dataSource: '/news/hdnb4',
    locator: 'hdnb',
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
        url: '/news/hdnb?page=' + value,
        type: 'get',
        success: (function (data) {
            $('#news').html('')
            for (let i = 0; i < data.hdnb.length; i++) {
                var iem = ($(`<div class="news">
                <div class="new-img">
                    <a href="/news/${data.hdnb[i].id}">
                        <img src="${data.hdnb[i].thump}" alt="">
                    </a>
                </div>
                <div class="news-title">
                    <div class="news-heading">
        
        
                        <a href="/news/${data.hdnb[i].id}">
                        ${data.hdnb[i].heading}
                        </a>
        
        
                    </div>
                    <div class="news-summary">
                        <p>
                        ${data.hdnb[i].title}
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




