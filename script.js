let counts = {
  happy: 0,
  neutral: 0,
  sad: 0
};

function increment(type) {
  counts[type]++;
  document.getElementById(`${type}-count`).textContent = counts[type];
}

// Recupera os dados salvos ou inicia com 0
let happyCount = parseInt(localStorage.getItem('happy')) || 0;
let neutralCount = parseInt(localStorage.getItem('neutral')) || 0;
let sadCount = parseInt(localStorage.getItem('sad')) || 0;

// Atualiza os elementos na tela
document.getElementById('happy-count').textContent = happyCount;
document.getElementById('neutral-count').textContent = neutralCount;
document.getElementById('sad-count').textContent = sadCount;

// Funções de clique
document.getElementById('happy').addEventListener('click', () => {
  happyCount++;
  document.getElementById('happy-count').textContent = happyCount;
  localStorage.setItem('happy', happyCount);
});

document.getElementById('neutral').addEventListener('click', () => {
  neutralCount++;
  document.getElementById('neutral-count').textContent = neutralCount;
  localStorage.setItem('neutral', neutralCount);
});

document.getElementById('sad').addEventListener('click', () => {
  sadCount++;
  document.getElementById('sad-count').textContent = sadCount;
  localStorage.setItem('sad', sadCount);
});