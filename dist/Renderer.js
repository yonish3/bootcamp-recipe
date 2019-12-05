class Renderer{
    render(data){
        const source = $('#recipes-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(data)
        $('#container').empty().append(newHTML); 
    }
}