const containerIntro = document.getElementById('container-intro');
const containerName = document.getElementById('container-name');
const container2023 = document.getElementById('container-2023');
const container2024 = document.getElementById('container-2024');
const containerMessage = document.getElementById('container-message');

function moveName() {
    containerIntro.style.display = 'none';
    containerName.style.display = 'block';
}

function move2023() {
    containerName.style.display = 'none';
    container2023.style.display = 'block';
}

function move2024() {        
    container2023.style.display = 'none';
    container2024.style.display = 'block';
}

function moveMessageCard() {
    container2024.style.display = 'none';
    containerMessage.style.display = 'block';
}