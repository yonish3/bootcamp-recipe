renderer = new Renderer()

$('button').on('click', function () {
    $.get(`/recipes/${$("input").val()}`, function (data) {
        renderer.render(data)
    })
})

$('#container').on('click', 'img', function () {
    console.log($(this).next().text())
})
