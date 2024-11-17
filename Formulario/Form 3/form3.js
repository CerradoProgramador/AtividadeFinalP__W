const formulario = document.getElementById('formSubmit');
const nomeInput = document.getElementById('fname');
const dataInput = document.getElementById('bday');
const mensagemH1 = document.getElementById('mensagem');
const tabelaDados = document.querySelector('#tabela-dados tbody');
const erroDiv = document.getElementById('erro');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = nomeInput.value;
    const data = dataInput.value;

    if (nome.length < 3 || nome.length > 120 || /\d/.test(nome)) {
        alert("O nome deve ter entre 3 e 120 caracteres e não pode conter números.");
        return;
    }

    // Validação da data
    if (!validarData(data)) {
        return;
    }


    mensagemH1.textContent = `Feliz aniversário, ${nome}! 🎉🎈`;
    erroDiv.textContent = ''; 


    adicionarTabela(nome, data);
    

    nomeInput.value = '';
    dataInput.value = '';
});

// Função de validação de data
function validarData(data) {
    const regex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regex.test(data)) {
        alert('Formato de data inválido. Use DD/MM/AAAA.');
        return false;
    }

    const partes = data.split(/[-/]/);
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const ano = parseInt(partes[2], 10);

    if (mes < 1 || mes > 12) {
        alert('Mês inválido. O mês deve estar entre 1 e 12.');
        return false;
    }

    const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (dia < 1 || dia > diasNoMes[mes - 1]) {
        alert('Dia inválido para o mês especificado.');
        return false;
    }

    if (ano < 1900 || ano > 2024) {
        alert('Ano inválido. Informe um ano entre 1900 e 2024.');
        return false;
    }

    return true;
}

function adicionarTabela(nome, data) {
    const tr = document.createElement('tr');
    
    const tdNome = document.createElement('td');
    tdNome.textContent = nome;
    
    const tdData = document.createElement('td');
    tdData.textContent = data;
    
    const tdAcoes = document.createElement('td');
    
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.onclick = function () {
        editarLinha(tr, nome, data);
    };
    
    const btnExcluir = document.createElement('button');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.onclick = function () {
        excluirLinha(tr);
    };
    
    tdAcoes.appendChild(btnEditar);
    tdAcoes.appendChild(btnExcluir);

    tr.appendChild(tdNome);
    tr.appendChild(tdData);
    tr.appendChild(tdAcoes);

    tabelaDados.appendChild(tr);
}

function editarLinha(linha, nome, data) {
    nomeInput.value = nome;
    dataInput.value = data;
    excluirLinha(linha);
}

function excluirLinha(linha) {
    tabelaDados.removeChild(linha);
}
