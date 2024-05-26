function Alert() {
  alert("Essa página está desabilitada!")
};
function Search() {
  alert("Pesquisa feita!")
};
function Gravar(){
  alert("Gravando!")
}
function Like() {
  let sino = document.querySelector('#sino');
  if(sino.src.includes('/assets/images/SinoNoLike.png')){
    sino.src = '/assets/images/SinoLike.png'
  } else {
    sino.src = '/assets/images/SinoNoLike.png'
  }
};