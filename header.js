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
  if(sino.src.includes('/assets/images/header/SinoNoLike.png')){
    sino.src = '/assets/images/header/SinoLike.png'
  } else {
    sino.src = '/assets/images/header/SinoNoLike.png'
  }
};