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

function devolverObjeto() {

}

function isCamposValidos() {
    let nome = $("#nome").val();
    let profissao = $("#profissao").val();
    let estado = $("#estado").val();

    if (nome.length == 0 || profissao.length == 0 || estado.length == 0) {
        alert("Preencha todos os campos!");
    } else {
        return objeto = {
            nome: nome,
            profissao: profissao,
            estado: estado
        };
    }
}

function salvar() {

    let objeto = isCamposValidos();

    if (objeto) {
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

}

function limpar() {
    $("#nome").val("");
    $("#profissao").val("");
    $("#estado").val("AC");
}