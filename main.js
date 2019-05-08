// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Parte 2 (Bonus)
// Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti


// dichiaro un array che mi servirà per metterci 15 numeri random da 1 a 64 (precisamente da 0 a 63)
var array = [];
// variabile che uso per il numero random
var random;
// variabile per contare i quadratini rossi
var cont_red = 0;
// variabile per contare i quadratini verdi
var cont_green = 0;

// riempio l'array finchè non avrà 15 elementi
for(var i = 0; array.length < 15; i++){
  // partendo da 0 il 64 non è incluso, quindi fino a 63 (da 0 a 63)
  random = Math.floor(Math.random() * 64);
  // se un numero è già presente nell'array allora non lo metto
  if(array.includes(random) == false){
    array.push(random);
  }
}
// possiamo vedere i numeri che saranno colorati di rosso (contando che partiamo da 0)
console.log(array);

// aggiungo la classe "red" ai quadratini il cui valore è presente nell'array
for (var i = 0; i < array.length; i++) {
  $('td').eq(array[i]).addClass('red');
}

// quando clicco sui quadratini
$('td').click(function(){
  // se hanno la classe red
  if($(this).hasClass('red')){
    // imposto il colore dello sfondo
    $(this).css('background-color','red');
    // incremento il contatore dei rossi
    cont_red += 1;
    // lo visualizzo nella classe contatore_rossi
    $('.contatore_rossi').text('Quadratini rossi cliccati: ' + cont_red);
  }else{
    // altrimenti gli aggiungo la classe green
    $(this).addClass('green');
    // incremento il contatore dei verdi
    cont_green += 1;
    // lo visualizzo nella classe contatore_verdi
    $('.contatore_verdi').text('Quadratini verdi cliccati: ' + cont_green);
  }
});
