const facts = [
  "African penguins are sometimes called \“jackass penguins”\ because they make loud, donkey-like braying sounds to communicate with each other. These vocal calls help mates find one another and warn off rivals — pretty noisy for such cute birds. We, in IST, sometimes refer to grad students as \"African Penguins"\... for very different reasons.",
  ];

document.getElementById('factBtn').addEventListener('click', () => {
  const i = Math.floor(Math.random() * facts.length);
  document.getElementById('penguinFact').innerText = facts[i];
});
