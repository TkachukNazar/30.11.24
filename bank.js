const card1 = {
  number: 123456,
  name: "John",
  surname: "Johnson",
  code: 6745,
  balance: 1000,
  bank: "Mono",
};

const card2 = {
  number: 654321,
  name: "Joan",
  surname: "Joanson",
  code: 3412,
  balance: 100,
  bank: "Mono",
};

const card3 = {
  number: 453216,
  name: "Max",
  surname: "Maxonson",
  code: 4532,
  balance: 2000,
  bank: "Privat",
};

const bank = [card1, card2];

let atm1 = {
  number: 123,
  showAccount: function (card) {
    if (this.check(card)) {
      alert("Balance: " + card.balance);
    }
  },
  check: function (card) {
    const number = card.number;
    let b = false;
    for (let i = 0; i < bank.length; i++) {
      if (card == bank[i]) {
        alert("Right card");
        b = true;
        break;
      }
    }
    if (b) {
      if (number === card.number) {
        const code = +prompt("Input code");
        if (code === card.code) {
          return true;
        } else {
          alert("Wrong code");
          return false;
        }
      } else {
        alert("Wrong number");
      }
    } else {
      alert("Wrong card");
    }
  },
};

atm1.showAccount(card2);
atm1.showAccount(card3);
atm1.showAccount(card1);
