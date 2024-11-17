const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('fname').value;
    const data = document.getElementById('bday').value;


    if (nome.length < 3 || nome.length > 120 || /\d/.test(nome)) {
        alert("O nome deve ter entre 3 e 120 caracteres e não pode conter números.");
        return;
    }

    if (!validarData(data)) {
        return;
    }

    console.log('Nome Pessoa: ', nome);
    console.log('Data Aniversário: ', data);
});

function validarData(data) {

    const regex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!regex.test(data)) {
        alert('Formato de data inválido. Use DD/MM/AAAA ou DD-MM-AAAA.');
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


    const dataValida = new Date(ano, mes - 1, dia);
    if (dataValida.getDate() !== dia || dataValida.getMonth() + 1 !== mes || dataValida.getFullYear() !== ano) {
        alert('Data inválida.');
        return false;
    }

    return true;
}