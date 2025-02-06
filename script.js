document.addEventListener('DOMContentLoaded', (event) => {
  const takButton = document.querySelector('.tak');
  const nieButton = document.querySelector('.nie');
  const odpowiedzTekst = document.getElementById('odpowiedz');
  const tytul = document.getElementById('tytul');
  const sercezmiana = document.querySelector('#serce'); 

  takButton.addEventListener('click', () => {
      odpowiedzTekst.innerHTML = `Cudownie! Już nie mogę się doczekać Walentynek z Tobą!`;
      sercezmiana.src = 'serceja.png'; 
      sercezmiana.classList.add('bez-animacji'); 
      odpowiedzTekst.style.display = 'block';
  });

  nieButton.addEventListener('click', () => {
      sercezmiana.src = 'serce.png';
      odpowiedzTekst.style.display = 'block';
  });
});