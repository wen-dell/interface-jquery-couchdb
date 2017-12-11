buscarIds();

var id = 1;

function atribuirId(resultado) {
    id = resultado.rows[resultado.rows.length - 1].id;
    id++;
}

function buscarPorId(id) {
    $.ajax({
        url: "http://localhost:5984/meu_bd/" + id,
        type: "get",
        success: function(resultado) {
            adicionarNaTabela(resultado);
        }
    });
}

function buscarIds() {
    $.ajax({
        url: "http://localhost:5984/meu_bd/_all_docs",
        type: "get",
        success: function(result) {
            if (result.rows.length != 0) {
                atribuirId(result);
                buscarDados(result.rows);
            }
        }
    });
}

function buscarDados(array) {
    for(let i = 0; i < array.length; i++) {
        $.ajax({
            url: "http://localhost:5984/meu_bd/" + array[i].id,
            type: "get",
            success: function (resultado) {
                adicionarNaTabela(resultado);
            }
        });
    }
}

function adicionarNaTabela(resultado) {
    $("#listagem").append("<tr class='text-center'></tr>");
    $("#listagem tr:last-child").append("<td>" + resultado.nome + "</td>");
    $("#listagem tr:last-child").append("<td>" + resultado.profissao + "</td>");
    $("#listagem tr:last-child").append("<td>" + resultado.estado + "</td>");
}

function salvar() {

    let objeto = {
        nome: $("#nome").val(),
        profissao: $("#profissao").val(),
        estado: $("#estado").val()
    };

    $.ajax({
        url: "http://localhost:5984/meu_bd/" + id,
        type: "put",
        data: JSON.stringify(objeto),
        success: function (resultado) {
            limpar();
            buscarPorId(resultado.id);
            id++;
        }
    });

}

function limpar() {
    $("#nome").val("");
    $("#profissao").val("");
    $("#estado").val("AC");
}