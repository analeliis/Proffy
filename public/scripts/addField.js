//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click',cloneField);

//Executar um ação
function cloneField(){
   //Duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true); /*elemento html , true ele vai retorna todo conteudo que estou chamando no queryselector*/
  
  //limpar os campos . Que campos?
  const fields = newFieldContainer.querySelectorAll('input'); /*todas as tags input vao pra dentro dessa const */   
  // console.log(fields); retornar um nodeList Array

  //  para cada campo,limpar
   fields.forEach(function(field){ //para cada arquivo ele aplicou uma função
    //  pegar o field do momento e limpa ele 
     field.value = ""
   })
  
  //Colocar na página onde na página ?
  document.querySelector('#schedule-items').appendChild(newFieldContainer); /*add um filho dentro da div schedule-items */
}
 