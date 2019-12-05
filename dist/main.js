renderer = new Renderer()

$('button').on('click', function () {
    $.get(`/recipes/${$("input").val()}`, function (data) {
        console.log(data)
        renderer.render(data)
    })
})