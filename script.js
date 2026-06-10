function nextScreen(id){

  document.querySelectorAll('.screen')
    .forEach(s => s.classList.remove('active'));

  document.getElementById(id)
    .classList.add('active');
}

function checkSurat(){

  let guess =
  document.getElementById('cityGuess')
  .value.toUpperCase();

  if(guess === "SURAT"){
      nextScreen('memory1');
  }else{
      document.getElementById('cityMessage')
      .innerText = "Hint: City of memories ❤️";
  }
}

function checkBacchu(){

  let guess =
  document.getElementById('nickGuess')
  .value.toUpperCase();

  if(guess === "BACCHU"){
      nextScreen('memory2');
  }else{
      document.getElementById('nickMessage')
      .innerText = "Hint: Your favorite nickname ❤️";
  }
}

function showGift(){
  document.getElementById('gift').style.display='block';
}
