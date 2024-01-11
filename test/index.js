// 서버랑 연결되는 지 확인하기 위해 이전에 만들었던 코드 넣어봤습니다.
// 일단 나중에 다시 수정은 해야합니당
// backend\index.js에서 key넣고, 터미널에서 cd backend한 뒤에 node index.js하고,
// test\index.html 웹사이트 켜서 이름이랑 각 키워드들 넣고 버튼 쭉쭉 누르면 됩니당
function generateMessage() {
    const userName = document.getElementById('user-name').value;
    const selectedYear2023 = '2023';
    const selectedKeyword2023 = document.getElementById('keyword-2023').value;
    const selectedYear2024 = '2024';
    const selectedKeyword2024 = document.getElementById('keyword-2024').value;

    const userMessage = `${userName}/${selectedKeyword2023}/${selectedKeyword2024}`;
    
    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            userMessage: userMessage,
        }),
    })
    .then((response) => response.text())
    .then((result) => {
        alert(result);
        closePopup();
    });
}

function showContainer(containerId) {
    // 모든 container를 숨김
    document.querySelectorAll('.container').forEach(function(container) {
        container.style.display = 'none';
    });

    // 특정 container만 보이도록 설정
    document.getElementById(containerId).style.display = 'flex';
}

function moveName() {
    showContainer('container-name');
}

function move2023() {
    showContainer('container-2023');
}

function move2024() {
    showContainer('container-2024');
}

function moveMessageCard() {
    showContainer('container-message');
    generateMessage();
}

function CreateNewCard() {
    showContainer('container-intro');
}

// const containerIntro = document.getElementById('container-intro');
// const containerName = document.getElementById('container-name');
// const container2023 = document.getElementById('container-2023');
// const container2024 = document.getElementById('container-2024');
// const containerMessage = document.getElementById('container-message');

// function moveName() {
//     containerIntro.style.display = 'none';
//     containerName.style.display = 'block';
// }

// function move2023() {
//     containerName.style.display = 'none';
//     container2023.style.display = 'block';
// }

// function move2024() {        
//     container2023.style.display = 'none';
//     container2024.style.display = 'block';
// }

// function moveMessageCard() {
//     container2024.style.display = 'none';
//     containerMessage.style.display = 'block';
// }