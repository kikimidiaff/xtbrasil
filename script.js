// Selecionando os botões e as seções
const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".section");

// Adicionando evento de clique aos botões
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Removendo a classe 'active' de todos os botões
    buttons.forEach(b => b.classList.remove("active"));
    // Removendo a classe 'active' de todas as seções
    sections.forEach(s => s.classList.remove("active"));

    // Adicionando a classe 'active' ao botão clicado
    button.classList.add("active");

    // Exibindo a seção correspondente ao botão clicado
    const selectedTab = button.getAttribute("data-tab");
    document.getElementById(selectedTab).classList.add("active");
  });
});

// Dados de ranking e resultados
const rankingData = [
  { posicao: 1, time: "XR7 SPORTS", pontos: 238, kills: 161 },
  { posicao: 2, time: "WKD EVOS", pontos: 180, kills: 101 },
  { posicao: 3, time: "HKS EMU", pontos: 163, kills: 100 },
  { posicao: 4, time: "BRIOCUDOS", pontos: 132, kills: 84 },
  { posicao: 5, time: "CTRL C + CTRL V", pontos: 128, kills: 66 },
  { posicao: 6, time: "LEGENDS", pontos: 127, kills: 81 },
  { posicao: 7, time: "DRAGON AURA", pontos: 121, kills: 78 },
  { posicao: 8, time: "EAGLES", pontos: 118, kills: 65 },
  { posicao: 9, time: "SILENT", pontos: 114, kills: 59 },
  { posicao: 10, time: "LB3 E-SPORTS", pontos: 103, kills: 64 },
  { posicao: 11, time: "TROPA 84", pontos: 98, kills: 43 },
  { posicao: 12, time: "GOD GG", pontos: 93, kills: 43 },
  { posicao: 13, time: "RUPTURA", pontos: 92, kills: 52 },
  { posicao: 14, time: "HKS ACADEMY", pontos: 91, kills: 47 },
  { posicao: 15, time: "ANONYMOUS ELITE", pontos: 90, kills: 63 },
  { posicao: 16, time: "7VEN GAMING", pontos: 88, kills: 56 },
  { posicao: 17, time: "ALL GAMES 7VEN", pontos: 86, kills: 52 },
  { posicao: 18, time: "EAGLES EMU", pontos: 83, kills: 57 },
  { posicao: 19, time: "K ILL OR DIE", pontos: 83, kills: 56 },
  { posicao: 20, time: "NZ KINGS", pontos: 68, kills: 50 }
];

const resultadosPorDia = [
  {
    dia: "Segunda-feira",
    imagens: [
      { src: "./assets/images/16H.jpeg", horario: "Horário: 16:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/18H.jpeg", horario: "Horário: 18:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/19H.jpeg", horario: "Horário: 19:00", data: "Data: 23/03/2026", tamanho: "normal" },
      { src: "./assets/images/20H.jpeg", horario: "Horário: 20:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/22H.jpeg", horario: "Horário: 22:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/22H-n.jpeg", horario: "Horário: 22:00", data: "Data: 23/03/2026", tamanho: "normal" }
    ]
  },
  {
    dia: "Terça-feira",
    imagens: [
      { src: "./assets/images/00H.jpeg", horario: "00:00", data: "24/03/2026", tamanho: "liga" }
    ]
  },
  {
    dia: "Quarta-feira",
    imagens: [
      
    ]
  },
  {
    dia: "Quinta-feira",
    imagens: [
      
    ]
  },
  {
    dia: "Sexta-feira",
    imagens: [
      
    ]
  }
];

// Função para renderizar o ranking
function renderRanking() {
  const rankingBody = document.getElementById("ranking-body");
  rankingBody.innerHTML = "";

  rankingData.forEach(item => {
    let classe = "";
    if (item.posicao === 1) classe = "gold";
    else if (item.posicao === 2) classe = "silver";
    else if (item.posicao === 3) classe = "bronze";

    rankingBody.innerHTML += `
      <tr>
        <td class="${classe}">${item.posicao}º</td>
        <td>${item.time}</td>
        <td>${item.pontos}</td>
        <td>${item.kills}</td>
      </tr>
    `;
  });
}

// Função para preencher o filtro de dias
function preencherFiltroDias() {
  const filtroDia = document.getElementById("filtroDia");
  filtroDia.innerHTML = "";

  resultadosPorDia.forEach((item, index) => {
    filtroDia.innerHTML += `
      <option value="${index}">${item.dia}</option>
    `;
  });
}

// Função para renderizar os resultados de acordo com o dia e modo
function renderResultadosPorDia(index, modo) {
  const galeriaResultados = document.getElementById("galeria-resultados");
  const diaSelecionado = resultadosPorDia[index];
  galeriaResultados.innerHTML = "";

  if (!diaSelecionado || !diaSelecionado.imagens.length) {
    galeriaResultados.innerHTML = "<p>Nenhuma imagem cadastrada para este dia.</p>";
    return;
  }

  // Filtrando as imagens com base no modo selecionado
  let imagensFiltradas;

  if (modo === "todos") {
    imagensFiltradas = diaSelecionado.imagens;  // Exibe todas as imagens
  } else {
    imagensFiltradas = diaSelecionado.imagens.filter(item => item.tamanho === modo);  // Filtra pela imagem com o modo selecionado
  }

  if (imagensFiltradas.length === 0) {
    galeriaResultados.innerHTML = "<p>Nenhuma imagem encontrada para o modo selecionado.</p>";
    return;
  }

  imagensFiltradas.forEach((item, i) => {
    let modoClasse = item.tamanho === "liga" ? "liga" : "normal";

    galeriaResultados.innerHTML += `
      <div class="imagem-card ${modoClasse}">
        <img src="${item.src}" alt="Tabela de resultados ${diaSelecionado.dia} ${i + 1}" />
        <div class="info">
          <p class="horario">${item.horario}</p>
          <p class="data">${item.data}</p>
        </div>
      </div>
    `;
  });
}

// Eventos de interação
document.getElementById("filtroDia").addEventListener("change", (e) => {
  const modoSelecao = document.getElementById("modoSelecao").value;
  renderResultadosPorDia(e.target.value, modoSelecao);
});

document.getElementById("modoSelecao").addEventListener("change", (e) => {
  const filtroDia = document.getElementById("filtroDia").value;
  renderResultadosPorDia(filtroDia, e.target.value);
});

// Função para renderizar o ranking
function renderRanking() {
  const rankingBody = document.getElementById("ranking-body");
  rankingBody.innerHTML = "";

  rankingData.forEach(item => {
    let classe = "";

    // Definindo cores para as posições
    if (item.posicao === 1) classe = "gold";
    else if (item.posicao === 2) classe = "silver";
    else if (item.posicao === 3) classe = "bronze";
    else if (item.posicao <= 5) classe = "top-5"; // Cor para o top 5
    else if (item.posicao <= 10) classe = "top-10"; // Cor para o top 10
    else classe = "default"; // Cor padrão para os outros

    rankingBody.innerHTML += `
      <tr class="${classe}">
        <td class="${classe}">${item.posicao}º</td>
        <td>${item.time}</td>
        <td>${item.pontos}</td>
        <td>${item.kills}</td>
      </tr>
    `;
  });
}

// Inicialização
renderRanking();
preencherFiltroDias();
renderResultadosPorDia(0, "liga");  // Inicializa com o modo "liga"