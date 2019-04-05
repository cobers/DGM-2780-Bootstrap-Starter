// Custom JS here

$('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

$('.carousel').carousel({
    keyboard: true,
    touch: true
})