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
  { posicao: 1, variacao: "➖", time: "LEGENDS", pontos: 461, kills: 296 },
  { posicao: 2, variacao: "➖", time: "MAGUINETA", pontos: 423, kills: 251 },
  { posicao: 3, variacao: "➖", time: "KARSEN GG", pontos: 367, kills: 203 },
  { posicao: 4, variacao: "⬆️", time: "ABU E-SPORTS", pontos: 351, kills: 242 },
  { posicao: 5, variacao: "⬆️", time: "EAGLES", pontos: 293, kills: 178 },
  { posicao: 6, variacao: "⬆️", time: "DARK STORM", pontos: 242, kills: 138 },
  { posicao: 7, variacao: "⬆️", time: "TEAM JOTA", pontos: 234, kills: 159 },
  { posicao: 8, variacao: "⬆️", time: "ALLGAMES 7VEN", pontos: 211, kills: 117 },
  { posicao: 9, variacao: "⬆️", time: "LDA SPORTS", pontos: 190, kills: 111 },
  { posicao: 10, variacao: "⬆️", time: "APEX ELITE", pontos: 184, kills: 119 },
  { posicao: 11, variacao: "⬇️", time: "ANONYMOUS", pontos: 168, kills: 107 },
  { posicao: 12, variacao: "⬇️", time: "RELIKIAS ON", pontos: 164, kills: 93 },
  { posicao: 13, variacao: "⬇️", time: "RK", pontos: 161, kills: 109 },
  { posicao: 14, variacao: "⬆️", time: "HKS EMU", pontos: 158, kills: 94 },
  { posicao: 15, variacao: "⬆️", time: "NZ KINGS", pontos: 149, kills: 88 },
  { posicao: 16, variacao: "⬇️", time: "XR7 FOXX", pontos: 144, kills: 91 },
  { posicao: 17, variacao: "⬇️", time: "TEAM CAW", pontos: 140, kills: 89 },
  { posicao: 18, variacao: "⬆️", time: "DRAGON AURA", pontos: 131, kills: 85 },
  { posicao: 19, variacao: "⬇️", time: "BLACK WHITE", pontos: 117, kills: 68 },
  { posicao: 20, variacao: "⬇️", time: "7VEN GAMING", pontos: 104, kills: 61 }
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
    { src: "./assets/images/QUI/00H.jpeg", horario: "00:00", data: "02/04/2026", tamanho: "liga" },
    { src: "./assets/images/QUA/16H.jpeg", horario: "16:00", data: "02/04/2026", tamanho: "liga" },
    { src: "./assets/images/QUA/18H.jpeg", horario: "18:00", data: "02/04/2026", tamanho: "liga" },
    { src: "./assets/images/QUA/18H-2.jpeg", horario: "18:00", data: "02/04/2026", tamanho: "normal" },
    { src: "./assets/images/QUA/19H.jpeg", horario: "19:00", data: "02/04/2026", tamanho: "normal" },
    { src: "./assets/images/QUA/20H.jpeg", horario: "20:00", data: "02/04/2026", tamanho: "liga" },
    { src: "./assets/images/QUA/22H.jpeg", horario: "22:00", data: "02/04/2026", tamanho: "liga" }
  ] },
  { dia: "Sexta-feira", imagens: [
    { src: "./assets/images/SEX/00H.jpeg", horario: "00:00", data: "03/04/2026", tamanho: "liga" },
  ] }
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