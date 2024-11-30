let cat = {
  weight: 0,
  feed: function () {
    this.weight += 2;
    alert(this);
  },
  diet: function () {
    this.weight -= 2;
    alert(this);
  },
  stay: function () {
    if (this.weight < 10) {
      this.feed();
    } else if (this.weight >= 10) {
      while (this.weight >= 5) this.diet();
    }
  },
  toString: function () {
    return "weight: " + this.weight;
  },
};
for (let i = 0; i < 12; i++) {
  cat.stay();
}
