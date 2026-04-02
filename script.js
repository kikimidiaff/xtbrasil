// Selecionando os botões e as seções
const buttons = document.querySelectorAll(".tab-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    button.classList.add("active");

    const selectedTab = button.getAttribute("data-tab");
    document.getElementById(selectedTab).classList.add("active");
  });
});


// =======================
// 📊 RANKING (COM SETA MANUAL)
// =======================
const rankingData = [
  { posicao: 1, variacao: "➖", time: "LEGENDS", pontos: 207, kills: 138 },
  { posicao: 2, variacao: "➖", time: "MAGUINETA", pontos: 188, kills: 106 },
  { posicao: 3, variacao: "➖", time: "KARSEN GG", pontos: 186, kills: 105 },
  { posicao: 4, variacao: "➖", time: "RK", pontos: 161, kills: 109 },
  { posicao: 5, variacao: "➖", time: "ABU E-SPORTS", pontos: 160, kills: 109 },
  { posicao: 6, variacao: "➖", time: "ANONYMOUS", pontos: 127, kills: 79 },
  { posicao: 7, variacao: "➖", time: "RELIQUIAS ON", pontos: 119, kills: 63 },
  { posicao: 8, variacao: "➖", time: "EAGLES", pontos: 112, kills: 74 },
  { posicao: 9, variacao: "➖", time: "7VEN GAMING", pontos: 104, kills: 61 },
  { posicao: 10, variacao: "➖", time: "DARK STORM", pontos: 102, kills: 59 },
  { posicao: 11, variacao: "➖", time: "DESTROYERS", pontos: 93, kills: 54 },
  { posicao: 12, variacao: "➖", time: "TEAM CAW", pontos: 91, kills: 63 },
  { posicao: 13, variacao: "➖", time: "APEX ELITE", pontos: 91, kills: 62 },
  { posicao: 14, variacao: "➖", time: "XR7 FOXX", pontos: 84, kills: 52 },
  { posicao: 15, variacao: "➖", time: "HKS EMU", pontos: 81, kills: 43 },
  { posicao: 16, variacao: "➖", time: "HYX SPORTS", pontos: 78, kills: 51 },
  { posicao: 17, variacao: "➖", time: "WKD EVOS", pontos: 75, kills: 38 },
  { posicao: 18, variacao: "➖", time: "BLACK WHITE", pontos: 66, kills: 40 },
  { posicao: 19, variacao: "➖", time: "DRAGON AURA", pontos: 62, kills: 40 },
  { posicao: 20, variacao: "➖", time: "LB3 E-SPORTS", pontos: 55, kills: 31 }
];


// =======================
// 🏆 RENDER RANKING
// =======================
function renderRanking() {
  const rankingBody = document.getElementById("ranking-body");
  rankingBody.innerHTML = "";

  rankingData.forEach(item => {
    let classe = "";

    if (item.posicao === 1) classe = "gold";
    else if (item.posicao === 2) classe = "silver";
    else if (item.posicao === 3) classe = "bronze";
    else if (item.posicao <= 5) classe = "top-5";
    else if (item.posicao <= 10) classe = "top-10";
    else classe = "default";

    rankingBody.innerHTML += `
      <tr class="${classe}">
        <td class="${classe}">
          ${item.variacao} ${item.posicao}º
        </td>
        <td>${item.time}</td>
        <td>${item.pontos}</td>
        <td>${item.kills}</td>
      </tr>
    `;
  });
}


// =======================
// 📅 RESULTADOS
// =======================
const resultadosPorDia = [
  {
    dia: "Segunda-feira",
    imagens: [
      
    ]
  },
  {
    dia: "Terça-feira",
    imagens: [
      
    ]
  },
  {
    dia: "Quarta-feira",
    imagens: [
      { src: "./assets/images/QUA/00H.jpeg", horario: "00:00", data: "01/04/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/16H.jpeg", horario: "16:00", data: "01/04/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/18H.jpeg", horario: "18:00", data: "01/04/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/18H-2.jpeg", horario: "18:00", data: "01/04/2026", tamanho: "normal" },
      { src: "./assets/images/QUA/19H.jpeg", horario: "19:00", data: "01/04/2026", tamanho: "normal" },
      { src: "./assets/images/QUA/20H.jpeg", horario: "20:00", data: "01/04/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/22H.jpeg", horario: "22:00", data: "01/04/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/23H.jpeg", horario: "23:00", data: "01/04/2026", tamanho: "normal" }
    ]
  },
  { dia: "Quinta-feira", imagens: [
    
  ] },
  { dia: "Sexta-feira", imagens: [] }
];


// =======================
// 📅 FILTRO DIAS
// =======================
function preencherFiltroDias() {
  const filtroDia = document.getElementById("filtroDia");
  filtroDia.innerHTML = "";

  resultadosPorDia.forEach((item, index) => {
    filtroDia.innerHTML += `<option value="${index}">${item.dia}</option>`;
  });
}


// =======================
// 🖼️ RENDER RESULTADOS
// =======================
function renderResultadosPorDia(index, modo) {
  const galeria = document.getElementById("galeria-resultados");
  const dia = resultadosPorDia[index];
  galeria.innerHTML = "";

  if (!dia || !dia.imagens.length) {
    galeria.innerHTML = "<p>Nenhuma imagem cadastrada para este dia.</p>";
    return;
  }

  let imagens = modo === "todos"
    ? dia.imagens
    : dia.imagens.filter(i => i.tamanho === modo);

  if (!imagens.length) {
    galeria.innerHTML = "<p>Nenhuma imagem encontrada.</p>";
    return;
  }

  imagens.forEach((item, i) => {
    galeria.innerHTML += `
      <div class="imagem-card ${item.tamanho}">
        <img src="${item.src}" />
        <div class="info">
          <p>${item.horario}</p>
          <p>${item.data}</p>
        </div>
      </div>
    `;
  });
}


// =======================
// 🎛️ EVENTOS
// =======================
document.getElementById("filtroDia").addEventListener("change", (e) => {
  const modo = document.getElementById("modoSelecao").value;
  renderResultadosPorDia(e.target.value, modo);
});

document.getElementById("modoSelecao").addEventListener("change", (e) => {
  const dia = document.getElementById("filtroDia").value;
  renderResultadosPorDia(dia, e.target.value);
});


// =======================
// 🖼️ LOGO
// =======================
let logoImage = document.querySelector('.logo-brasil');
logoImage.src = "./assets/images/logobrasil.png";


// =======================
// 🚀 INIT
// =======================
renderRanking();
preencherFiltroDias();
renderResultadosPorDia(0, "liga");