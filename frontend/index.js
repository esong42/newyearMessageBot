// 서버랑 연결되는 지 확인하기 위해 이전에 만들었던 코드 넣어봤습니다.
// 일단 나중에 다시 수정은 해야합니당
// backend\index.js에서 key넣고, 터미널에서 cd backend한 뒤에 node index.js하고,
// test\index.html 웹사이트 켜서 이름이랑 각 키워드들 넣고 버튼 쭉쭉 누르면 됩니당
function generateMessage() {
    const userName = document.getElementById('user-name').value;
    const selectedKeyword2023 = document.getElementById('keyword-2023').value;
    const selectedKeyword2024 = document.getElementById('keyword-2024').value;

    const userMessage = `이름:${userName}/2023키워드:${selectedKeyword2023}/2024키워드:${selectedKeyword2024}`;
    
    fetch('http://localhost:3000/keyword', {
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
        document.getElementById('result-content').textContent = result;
    });
}

function generateMessage_random() {
    const userName = document.getElementById('user-name').value;

    const userMessage = `이름:${userName}`;
    
    fetch('http://localhost:3000/random', {
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
        document.getElementById('result-content').textContent = result;
    });
    document.getElementById("container-name").style.display = "none";
    document.getElementById("container-loading").style.display = "flex";
    setTimeout(function () {
        document.getElementById("container-loading").style.display = "none";
        document.getElementById("container-message").style.display = "flex";
    }, 7000);
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
            document.getElementById("container-loading").style.display = "flex";
            setTimeout(function () {
                document.getElementById("container-loading").style.display = "none";
                document.getElementById("container-message").style.display = "flex";
            }, 7000);
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

function moveIntro() {
    showContainer('container-intro');
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
    // 새로고침
    location.reload(true);
}

function copyToClipboard() {
    // 텍스트를 선택할 요소를 가져옵니다.
    var messageElement = document.getElementById("result-content");
    var messageText = messageElement.innerText;

    // 복사 명령을 실행합니다.
    navigator.clipboard.writeText(messageText)
    .then(function() {
      alert("메시지가 클립보드에 복사되었습니다!");
    })
    .catch(function(err) {
        console.error('클립보드 복사 실패: ', err);
      });
  }

function handleKeyPress(event, callback) {
    if (event.keyCode === 13) {
        callback();
    }
}