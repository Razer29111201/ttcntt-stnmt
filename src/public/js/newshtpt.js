

// cntt
var demo = $('#demo')
demo.pagination({
    dataSource: '/news/htpt2',
    locator: 'htpt',
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
        url: '/news/htpt2?page=' + value,
        type: 'get',
        success: (function (data) {
            $('#news').html('')
            for (let i = 0; i < data.htpt.length; i++) {
                var iem = ($(`<div class="news">
                <div class="new-img">
                    <a href="/news/${data.htpt[i].id}">
                        <img src="${data.htpt[i].thump}" alt="">
                    </a>
                </div>
                <div class="news-title">
                    <div class="news-heading">
        
        
                        <a href="/news/${data.htpt[i].id}">
                        ${data.htpt[i].heading}
                        </a>
        
        
                    </div>
                    <div class="news-summary">
                        <p>
                        ${data.htpt[i].title}
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




