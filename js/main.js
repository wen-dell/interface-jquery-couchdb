function salvar() {
    let nome = $("#nome").val();
    let profissao = $("#profissao").val();
    let estado = $("#estado").val();

    let objeto = {
        nome: nome,
        profissao: profissao,
        estado: estado
    };

    $.ajax({
        url: "http://localhost:5984/meu_bd/001",
        type: "put",
        data: JSON.stringify(objeto),
        success: function (result) {
            console.log(result);
        }
    });
}