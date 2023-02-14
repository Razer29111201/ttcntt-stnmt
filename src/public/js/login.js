
var c = document.getElementById('loi1')
var input = document.querySelectorAll('input')





var inpt = document.querySelectorAll('input')

var user = document.querySelector('#user')
var pass = document.querySelector('#pass')


var formm = document.querySelector('form')




function shower(input, mess) {
    var par = input.parentElement
    var que = par.querySelector('small')
    par.classList.add('error')
    que.innerText = mess
}

function showses(input) {
    var par = input.parentElement
    var que = par.querySelector('small')
    par.classList.remove('error')
    que.innerText = ''

}
function checkemer(listInput) {
    var err = false
    listInput.forEach(function (input) {
        input.value = input.value.trim()

        if (!input.value) {
            err = true
            shower(input, 'BĂ¡ÂºÂ¡n Ă„â€˜ang dĂ¡Â»Æ’ trĂ¡Â»â€˜ng')

        }
        else {
            showses(input)
        }
    });
    return err
}
function checklenger(input, max, min) {
    input.value = input.value.trim()
    if (input.value.length < min) {
        shower(input, `Báº¡n Pháº£i Nháº­p TrĂªn ${min} KĂ½ Tá»±`)
        return true
    }
    if (input.value.length > max) {
        shower(input, `Báº¡n Pháº£i Nháº­p DÆ°á»›i${max} KĂ½ Tá»±`)
        return true
    }
    showses(input)
    console(input)
    return false

}
console.log(input);
input.forEach(element => {
    element.oninput = function () {
        checklenger(element, 20, 6)
        console.log(element.value)
    }
    element.onblur = function () {
        checklenger(element, 20, 6)

    }
});


formm.addEventListener('submit', function (e) {
    e.preventDefault()
    var err = checkemer([user, pass])
    var checkus = checklenger(user, 20, 6)
    var checkps1 = checklenger(pass, 20, 6)


    checkerrsex()


})







