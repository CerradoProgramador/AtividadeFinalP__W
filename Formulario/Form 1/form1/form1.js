const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) { 
    event.preventDefault(); 

    const nome = document.getElementById('fname').value;  
    const data = document.getElementById('bday').value;  

    console.log('Nome Pessoa: ', nome);  
    console.log('Data Aniversário: ', data);  
});
