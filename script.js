const facts = [
  "African penguins are sometimes called jackass penguins because they make loud, donkey-like braying sounds to communicate with each other. These vocal calls help mates find one another and warn off rivals — pretty noisy for such cute birds.",
  "Coincidentally... We, in IST, sometimes refer to grad students as African Penguins."
];

document.getElementById('factBtn').addEventListener('click', () => {
  const i = Math.floor(Math.random() * facts.length);
  document.getElementById('penguinFact').innerText = facts[i];
});
