const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#btn");
const dollar = document.querySelector("#eua");
const euro = document.querySelector("#eur");
const libra = document.querySelector("#lbr");
const bitcoin = document.querySelector("#btc");

function conversor(moeda, nomeMoeda) {
  this.moeda = moeda;
  this.nomeMoeda = nomeMoeda;

  this.calc = () => {
    let res = document.querySelector("#resultado");
    let real = parseFloat(entrada.value);
    let pais = document.querySelector("#pais-selecionado");
    pais.innerHTML = nomeMoeda;

    if (real === 0 || isNaN(real)) {
      res.innerHTML = "Valor de entrada não é um número válido.";
    } else {
      this.res = real / this.moeda;

      res.innerHTML = `${real} BRL = ${this.res.toLocaleString(undefined, {
        style: "currency",
        currency: nomeMoeda,
      })}`;

      let res2 = document.querySelector("#resultado2");
      res2.innerHTML = `${this.res.toLocaleString(undefined, {
        style: "currency",
        currency: nomeMoeda,
      })} = ${real} BRL`;
      let resultado = document.querySelector(".resultado");
      resultado.innerHTML = `${this.res.toFixed(2)}`;
    }
  };

  this.calcBTC = () => {
    let res = document.querySelector("#resultado");
    let real = parseFloat(entrada.value);
    let pais = document.querySelector("#pais-selecionado");
    pais.innerHTML = "BTC";

    if (real === 0 || isNaN(real)) {
      res.innerHTML = "Valor de entrada não é um número válido.";
    } else {
      this.res = real / this.moeda;

      res.innerHTML = `${real} BRL =  ${this.res.toFixed(7)} BTC`;

      let res2 = document.querySelector("#resultado2");

      res2.innerHTML = `${this.res.toFixed(7)} BTC = ${real} BRL`;

      let resultado = document.querySelector(".resultado");
      resultado.innerHTML = `${this.res.toFixed(7)}`;
    }
  };
}

let btnDollar = false;
let btnEuro = false;
let btnLibra = false;
let btnBitcoin = false;

function botaoSelecionado() {
  dollar.addEventListener("click", () => {
    btnDollar = true;
    btnEuro = false;
    btnLibra = false;
    btnBitcoin = false;
  });

  euro.addEventListener("click", () => {
    btnEuro = true;
    btnDollar = false;
    btnLibra = false;
    btnBitcoin = false;
  });

  libra.addEventListener("click", () => {
    btnLibra = true;
    btnEuro = false;
    btnDollar = false;
    btnBitcoin = false;
  });

  btc.addEventListener("click", () => {
    btnBitcoin = true;
    btnLibra = false;
    btnEuro = false;
    btnDollar = false;
  });
}

btn.addEventListener("click", () => {
  botaoSelecionado();

  let bandeiraSelecionada = document.querySelector("#bandeira");

  const ativo = document.querySelectorAll(".moeda-lista li");
  ativo.forEach((item) => {
    item.addEventListener("click", () => {
      ativo.forEach((li) => {
        li.classList.remove("selecionado");
      });

      item.classList.add("selecionado");
    });
  });

  switch (true) {
    case btnDollar:
      const eua = new conversor(4.93, "USD");
      bandeiraSelecionada.src = "./img/estados-unidos-da-america.png";

      eua.calc();
      break;

    case btnEuro:
      const eur = new conversor(5.36, "EUR");
      bandeiraSelecionada.src = "./img/alemanha.png";
      eur.calc();
      break;

    case btnLibra:
      const lbr = new conversor(6.25, "GBP");
      bandeiraSelecionada.src = "./img/inglaterra.png";
      lbr.calc();
      break;

    case btnBitcoin:
      const btc = new conversor(206209.09);
      bandeiraSelecionada.src = "./img/bitcoin.png";
      btc.calcBTC();
      break;

    default:
      let res = document.querySelector("#resultado");
      res.innerHTML = "Nenhum botão selecionado";
  }
});

const animacao = document.querySelectorAll(".js-scroll");
animacao.forEach((item) => {
  item.classList.add("ativo1");
});
