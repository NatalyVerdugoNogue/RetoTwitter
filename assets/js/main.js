const button = document.getElementById('btn');
button.addEventListener('click', () => {
  // obtengo comentario
  let comments = document.getElementById('comment').value;

  // creo conteendor y div
  const cont = document.getElementById('cont');
  const newComments = document.createElement('div');

  // creo lugar de texto y p
  let textNewComment = document.createTextNode(comments);
  const contenedorElemento = document.createElement('p');

  // le doy los padres 
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);
  cont.appendChild(newComments);
})