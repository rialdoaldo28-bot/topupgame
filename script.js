const games = document.querySelectorAll('.game');
let selectedGame = '';

games.forEach(g => {
  g.addEventListener('click', () => {
    games.forEach(x => x.style.borderColor = 'transparent');
    g.style.borderColor = '#4f46e5';
    selectedGame = g.dataset.game;
  });
});

const orderBtn = document.getElementById('orderBtn');
const result = document.getElementById('result');
const resultText = document.getElementById('resultText');

orderBtn.addEventListener('click', () => {
  const playerId = document.getElementById('playerId').value.trim();
  const nominal = document.getElementById('nominal').value;
  const payment = document.getElementById('payment').value;

  if (!selectedGame || !playerId || !nominal || !payment) {
    alert('Lengkapi semua data dulu!');
    return;
  }

  result.classList.remove('hidden');
  resultText.innerHTML = `
    Game: <b>${selectedGame}</b><br>
    ID: <b>${playerId}</b><br>
    Nominal: <b>${nominal}</b><br>
    Pembayaran: <b>${payment}</b><br><br>
    <i>Simulasi berhasil, belum terhubung pembayaran asli.</i>
  `;
});
// --- Efek diamond jatuh ---
function createDiamond() {
  const diamond = document.createElement('img');
  diamond.src = 'diamond.jpeg'; // path gambar
  diamond.classList.add('diamond');

  // posisi random
  diamond.style.left = Math.random() * 100 + "vw";
  diamond.style.animationDuration = (3 + Math.random() * 2) + "s"; // 3-5 detik

  document.getElementById('diamond-container').appendChild(diamond);

  // hapus setelah jatuh
  setTimeout(() => {
    diamond.remove();
  }, 5000);
}

// munculin diamond tiap 300ms
setInterval(createDiamond, 300);
