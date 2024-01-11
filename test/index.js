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

    const userMessage = `이름:${userName}/2023키워드:${selectedKeyword2023}/2024키워드:${selectedKeyword2024}`;
    
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
        document.getElementById('result-message').textContent = result;
    });
}

function checkInput(inputId, containerId, content)
{
    const inputValue = document.getElementById(inputId).value;
    if (inputValue == "") {
        alert(`${content} 입력해주세요`);
    } else {
        if (inputId == 'keyword-2024') {
            generateMessage();
            document.getElementById("container-2024").style.display = "none";
            document.getElementById("container-loading").style.display = "block";
            setTimeout(function () {
                document.getElementById("container-loading").style.display = "none";
                document.getElementById("container-message").style.display = "block";
            }, 5000);
        } else {
            showContainer(containerId);
        }
    }
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
    checkInput('user-name', 'container-2023', '이름을')
}

function move2024() {
    checkInput('keyword-2023', 'container-2024', '2023키워드를')
}

function moveMessageCard() {
    checkInput('keyword-2024', 'container-message', '2024키워드를')
}

function CreateNewCard() {
    showContainer('container-intro');
}