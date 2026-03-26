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
  { posicao: 1, variacao: "➖", time: "EAGLES EMU", pontos: 630, kills: 413 },
  { posicao: 2, variacao: "🔼", time: "MAGUINETA", pontos: 471, kills: 293 },
  { posicao: 3, variacao: "🔽", time: "XR7 FOXX", pontos: 457, kills: 295 },
  { posicao: 4, variacao: "🔼", time: "LEGENDS", pontos: 410, kills: 266 },
  { posicao: 5, variacao: "🔽", time: "DRAGON AURA", pontos: 407, kills: 272 },
  { posicao: 6, variacao: "🔼", time: "ALLGAMES", pontos: 354, kills: 197 },
  { posicao: 7, variacao: "🔼", time: "HKS ACADEMY", pontos: 325, kills: 176 },
  { posicao: 8, variacao: "🔽", time: "WKD EVOS", pontos: 317, kills: 183 },
  { posicao: 9, variacao: "🔽", time: "LB3 E-SPORTS", pontos: 312, kills: 194 },
  { posicao: 10, variacao: "🔽", time: "CTRL C+ CTRL V", pontos: 312, kills: 170 },
  { posicao: 11, variacao: "🔽", time: "HKS EMU", pontos: 281, kills: 173 },
  { posicao: 12, variacao: "🔼", time: "ANONYMOUS ELITE", pontos: 264, kills: 174 },
  { posicao: 13, variacao: "➖", time: "STREET SPORTS", pontos: 262, kills: 175 },
  { posicao: 14, variacao: "➖", time: "SILENT", pontos: 257, kills: 125 },
  { posicao: 15, variacao: "🔼", time: "K ILL OR DIE", pontos: 248, kills: 153 },
  { posicao: 16, variacao: "➖", time: "RUPTURA", pontos: 240, kills: 136 },
  { posicao: 17, variacao: "🔼", time: "EAGLES", pontos: 232, kills: 142 },
  { posicao: 18, variacao: "🔽", time: "GOD GG", pontos: 210, kills: 107 },
  { posicao: 19, variacao: "🔽", time: "BRIOCUDOS", pontos: 178, kills: 109 },
  { posicao: 20, variacao: "🔼", time: "SOUL", pontos: 173, kills: 102 }
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
      { src: "./assets/images/SEG/16H.jpeg", horario: "Horário: 16:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/SEG/18H.jpeg", horario: "Horário: 18:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/SEG/19H.jpeg", horario: "Horário: 19:00", data: "Data: 23/03/2026", tamanho: "normal" },
      { src: "./assets/images/SEG/20H.jpeg", horario: "Horário: 20:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/SEG/22H.jpeg", horario: "Horário: 22:00", data: "Data: 23/03/2026", tamanho: "liga" },
      { src: "./assets/images/SEG/22H-n.jpeg", horario: "Horário: 22:00", data: "Data: 23/03/2026", tamanho: "normal" }
    ]
  },
  {
    dia: "Terça-feira",
    imagens: [
      { src: "./assets/images/TER/00H.jpeg", horario: "00:00", data: "24/03/2026", tamanho: "liga" },
      { src: "./assets/images/TER/16H.png", horario: "16:00", data: "24/03/2026", tamanho: "liga" },
      { src: "./assets/images/TER/18H.jpeg", horario: "18:00", data: "24/03/2026", tamanho: "liga" },
      { src: "./assets/images/TER/19H.jpeg", horario: "19:00", data: "24/03/2026", tamanho: "normal" },
      { src: "./assets/images/TER/20H.jpeg", horario: "20:00", data: "24/03/2026", tamanho: "liga" },
      { src: "./assets/images/TER/21H.png", horario: "21:00", data: "24/03/2026", tamanho: "liga" },
      { src: "./assets/images/TER/22H.jpeg", horario: "22:00", data: "24/03/2026", tamanho: "liga" }
    ]
  },
  {
    dia: "Quarta-feira",
    imagens: [
      { src: "./assets/images/QUA/00H.png", horario: "00:00", data: "25/03/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/16H.jpeg", horario: "16:00", data: "25/03/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/18H.jpeg", horario: "18:00", data: "25/03/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/19H.jpeg", horario: "19:00", data: "25/03/2026", tamanho: "normal" },
      { src: "./assets/images/QUA/20H.jpeg", horario: "20:00", data: "25/03/2026", tamanho: "liga" },
      { src: "./assets/images/QUA/22H.jpeg", horario: "22:00", data: "25/03/2026", tamanho: "liga" },
      { src: "./assets/images/SEG/22H-n.jpeg", horario: "Horário: 22:00", data: "Data: 23/03/2026", tamanho: "normal" }
    ]
  },
  { dia: "Quinta-feira", imagens: [
    { src: "./assets/images/QUI/00H.jpeg", horario: "00:00", data: "26/03/2026", tamanho: "liga" }
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