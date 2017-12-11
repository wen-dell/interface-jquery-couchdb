function buscarDadosCoucheDB() {
    $.ajax({
        url: "http://localhost:5984/meu_bd/001",
        type: "put",
        data: JSON.stringify(objeto),
        success: function (result) {
            console.log(result);
        }
    });
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