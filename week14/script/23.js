addEventListener(window.open, openAdd());
addEventListener(window.close, closeAdd());
function openAdd() {
    var timestamp = "페이지 열림: " + new Date().toLocaleString();
    var history = getHistory();

    history.push(timestamp);
    saveHistory(history);
    displayHistory();
}

function closeAdd() {
    var timestamp = "페이지 닫힘: " + new Date().toLocaleString();
    var history = getHistory();

    history.push(timestamp);
    saveHistory(history);
    displayHistory();
}

function clearHistory() {
    localStorage.removeItem('history');
    displayHistory();
}

function getHistory() {
    var history = localStorage.getItem('history');

    if (history) {
        return JSON.parse(history);
    } else {
        return [];
    }
}

function saveHistory(history) {
    localStorage.setItem('history', JSON.stringify(history));
}

function displayHistory() {
    var history = getHistory();
    var historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';

    if (history.length > 0) {
        for (var i = 0; i < history.length; i++) {
            var timestamp = history[i];
            var p = document.createElement('p');
            p.textContent = timestamp;
            historyDiv.appendChild(p);
        }
    } else {
        historyDiv.textContent = '방문 기록이 없습니다.';
    }
}

displayHistory();