document.addEventListener("DOMContentLoaded", loadTopics);

function loadTopics() {
    const topics = JSON.parse(localStorage.getItem('topics')) || [];
    const topicsContainer = document.getElementById('topics');
    topicsContainer.innerHTML = '';
    topics.forEach((topic, index) => {
        const topicElement = document.createElement('div');
        topicElement.className = 'topic';
        topicElement.innerHTML = `
            <h2>${topic.title}</h2>
            <p>${topic.content}</p>
            <input type="text" placeholder="Comentar" id="comment-${index}">
            <button onclick="addComment(${index})">Adicionar Comentário</button>
            <div id="comments-${index}">
                ${topic.comments.map(comment => `<p>${comment}</p>`).join('')}
            </div>
        `;
        topicsContainer.appendChild(topicElement);
    });
}

function addTopic() {
    const title = document.getElementById('new-topic-title').value;
    const content = document.getElementById('new-topic-content').value;
    if (title && content) {
        const topics = JSON.parse(localStorage.getItem('topics')) || [];
        topics.push({ title, content, comments: [] });
        localStorage.setItem('topics', JSON.stringify(topics));
        document.getElementById('new-topic-title').value = '';
        document.getElementById('new-topic-content').value = '';
        loadTopics();
    } else {
        alert('Preencha o título e o conteúdo do tópico.');
    }
}

function addComment(index) {
    const commentInput = document.getElementById(`comment-${index}`);
    const comment = commentInput.value;
    if (comment) {
        const topics = JSON.parse(localStorage.getItem('topics'));
        topics[index].comments.push(comment);
        localStorage.setItem('topics', JSON.stringify(topics));
        commentInput.value = '';
        loadTopics();
    } else {
        alert('Preencha o comentário.');
    }
}