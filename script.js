const { ipcRenderer } = require('electron');

// Lógica para fechar o App
document.getElementById('close-btn').addEventListener('click', () => {
    ipcRenderer.send('close-app');
});

// Lógica para atualizar a data
function updateCalendar(){
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", 
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const month = monthNames[now.getMonth()];

    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

// Inicializa o calendário
updateCalendar();