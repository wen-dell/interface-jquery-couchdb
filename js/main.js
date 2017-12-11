function buscarIds() {
    $.ajax({
        url: "http://localhost:5984/meu_bd/_all_docs",
        type: "get",
        success: function(result) {
            buscarDados(result.rows);
        }
    });
}

function buscarDados(array) {
    for(let i = 0; i < array.length; i++) {
        $.ajax({
            url: "http://localhost:5984/meu_bd/" + array[i].id,
            type: "get",
            success: function (result) {
                $("#listagem").append("<tr></tr>");
                $("#listagem tr:last-child").append("<td>" + result.nome + "</td>");
                $("#listagem tr:last-child").append("<td>" + result.profissao + "</td>");
                $("#listagem tr:last-child").append("<td>" + result.estado + "</td>");
            }
        });
    }
}

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

function apagar() {

    $.ajax({
        url: "http://localhost:5984/meu_bd/001?rev=4-71aa911e2b3bbbe368de589d9f82f32c",
        type: "delete",
        success: function (result) {
            console.log(result);
        }
    });
}

function atualizar() {

    let nome = $("#nome").val();
    let profissao = $("#profissao").val();
    let estado = $("#estado").val();

    let objeto = {
        nome: nome,
        profissao: profissao,
        estado: estado,
        _rev: "6-5a133f0846bdeb0e4c837409d5354bad"
    };

    $.ajax({
        url: "http://localhost:5984/meu_bd/001/",
        type: "put",
        data: JSON.stringify(objeto),
        success: function (result) {
            console.log(result);
        }
    });
}