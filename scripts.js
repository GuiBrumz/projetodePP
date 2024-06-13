let button = document.getElementById("handleSubmit");
 
button.onclick = async function() {
    let title = document.getElementById("title").value;
    //let description = document.getElementById("description").value;
    let data = {title}
 
    const response = await fetch('http://localhost:3000/api/store/task', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });
 
    let content = await response.json();
 
    if(content.success) {
        alert("Sucesso")
    } else{
        alert('Não');
    }
}

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtenha o valor do campo de entrada
    const title = document.getElementById('title').value;

    // Verifique se o campo de entrada não está vazio
    if (title.trim() !== '') {
        // Crie um novo elemento de mensagem
        const message = document.createElement('div');
        message.className = 'message';

        // Adicione o título da mensagem
        message.innerHTML = `
            <h3>User</h3>
            <p>${title}</p>
        `;

        // Adicione a nova mensagem ao contêiner de mensagens
        document.getElementById('messages').appendChild(message);

        // Limpe o campo de entrada
        document.getElementById('title').value = '';
    } else {
        alert('Por favor, insira um título.');
    }
});

function redirectToIndex() {
    window.location.href = "index.html";
}