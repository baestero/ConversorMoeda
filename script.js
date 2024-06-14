const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#btn");
const dollar = document.querySelector("#eua");
const euro = document.querySelector("#eur");
const libra = document.querySelector("#lbr");
const bitcoin = document.querySelector("#btc");
const pais = document.querySelector("#pais-selecionado");
const bandeiraSelecionada = document.querySelector("#bandeira");
const res = document.querySelector("#resultado");
const res2 = document.querySelector("#resultado2");
const resultado = document.querySelector(".resultado");

function conversor(nomeMoeda) {
  this.nomeMoeda = nomeMoeda;
  const real = parseFloat(entrada.value);

  this.calc = () => {
    async function ValorMoedasAtt() {
      const valormoeda = await fetch(
        `https://economia.awesomeapi.com.br/json/last/${nomeMoeda}`
      );
      const jsonMoeda = await valormoeda.json();
      pais.innerText = nomeMoeda;

      if (real === 0 || isNaN(real)) {
        res.innerHTML = "Valor de entrada não é um número válido.";
        resultado.innerText = "";
      } else {
        this.res = real / jsonMoeda[nomeMoeda + "BRL"].ask;
        if (nomeMoeda === "BTC") {
          res.innerHTML = `${real} BRL =  ${this.res.toFixed(7)} BTC`;
          res2.innerHTML = `${this.res.toFixed(7)} BTC = ${real} BRL`;
          resultado.innerHTML = this.res.toFixed(7);
        } else {
          res.innerHTML = `${real} BRL = ${this.res.toLocaleString(undefined, {
            style: "currency",
            currency: nomeMoeda,
          })}`;
          res2.innerHTML = `${this.res.toLocaleString(undefined, {
            style: "currency",
            currency: nomeMoeda,
          })} = ${real} BRL`;

          resultado.innerHTML = this.res.toFixed(2);
        }
      }
    }
    ValorMoedasAtt();
  };
}

btn.addEventListener("click", () => {
  switch (true) {
    case btnDollar:
      const eua = new conversor("USD");
      bandeiraSelecionada.src = "./img/estados-unidos-da-america.png";
      eua.calc();
      break;

    case btnEuro:
      const eur = new conversor("EUR");
      bandeiraSelecionada.src = "./img/alemanha.png";
      eur.calc();
      break;

    case btnLibra:
      const lbr = new conversor("GBP");
      bandeiraSelecionada.src = "./img/inglaterra.png";
      lbr.calc();
      break;

    case btnBitcoin:
      const btc = new conversor("BTC");
      bandeiraSelecionada.src = "./img/bitcoin.png";
      btc.calc();
      break;

    default:
      let res = document.querySelector("#resultado");
      res.innerHTML = "Nenhum botão selecionado";
  }
});

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
    btnDollar = false;
    btnEuro = false;
    btnBitcoin = false;
  });

  btc.addEventListener("click", () => {
    btnBitcoin = true;
    btnDollar = false;
    btnEuro = false;
    btnLibra = false;
  });

}
const ativo = document.querySelectorAll(".moeda-lista li");
ativo.forEach((item) => {
  item.addEventListener("click", () => {
    ativo.forEach((li) => {
      li.classList.remove("selecionado");
    });

    item.classList.add("selecionado");
  });
});

botaoSelecionado();

const animacao = document.querySelectorAll(".js-scroll");
animacao.forEach((item) => {
  item.classList.add("ativo1");
});
