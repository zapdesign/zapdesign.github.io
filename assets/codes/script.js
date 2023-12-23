
window.addEventListener('load', carregada)

function carregada(){
  const carregarTema = localStorage.getItem('tema')
  console.log(carregarTema === "white")

  if(carregarTema === "white"){
    alterarWhite()
  }else{
    alterarBlack()
  }
}


const lua = document.getElementById('lua');

lua.addEventListener('mouseenter', function (){
    lua.src = './assets/img/lua-clara.svg';
    lua.style.background = "black"

})
lua.addEventListener('mouseleave', function (){
    lua.src = './assets/img/lua.svg';
    lua.style.background = "#D1DCD7"
})

const sol = document.getElementById('sol');

sol.addEventListener('mouseenter', function (){
    sol.src = '/Projetos/E-portifólio/assets/img/sol-escuro.svg';
})
sol.addEventListener('mouseleave', function (){
    sol.src = '/Projetos/E-portifólio/assets/img/sol.svg';
})

// Mudança de Tema

lua.addEventListener('click', testeCor);
sol.addEventListener('click', testeCor);



function testeCor() {
  let body1 = document.getElementById('body')

  if(body1.className === "white"){
    alterarBlack()
  }else{
    alterarWhite()
  }
};

function alterarBlack(){

  let body1 = document.getElementById('body')


  lua.style.display = 'none';
  sol.style.display = 'block';

  document.querySelectorAll("#body, button.fundo-verde").forEach(function (element){
  element.style.background = "#161817";
  element.style.color = "#D1DCD7";
  });

  body1.style.backgroundImage = "url(./assets/img/fundo-header.png)";
  body1.style.backgroundRepeat = "no-repeat";

  document.querySelector('#estudante').style.boxShadow = "0px 0px 25.6px 0px rgba(255, 255, 255, 0.15)";

  document.querySelector("h1").style.color = "#D1DCD7";

  //Nav
  document.querySelectorAll("li.itens-nav").forEach(function (elements){
    elements.style.borderColor = "#D1DCD7";
    elements.style.background = "none";
    elements.style.color = "#D1DCD7";
  });

  //hover menu
  const menuNaoAtivo = document.querySelectorAll("#menu-naoativo, #menu-naoativo2");
  menuNaoAtivo.forEach(function (element){

    element.addEventListener('mouseenter', function (){
      element.style.background = "#D1DCD7";
      element.style.color = "black";
    });
    element.addEventListener('mouseleave', function (){
      element.style.background = "none";
      element.style.color = "#D1DCD7";
    });
  
  });

  const menuAtivo = document.querySelector("li#menu-ativo")
  menuAtivo.style.background = "#D1DCD7";
  menuAtivo.style.color = "#161817";

  menuAtivo.addEventListener('mouseenter', function (){
    menuAtivo.style.background = "none";
    menuAtivo.style.color = "#D1DCD7";
  });
  menuAtivo.addEventListener('mouseleave', function (){
    menuAtivo.style.background = "#D1DCD7";
    menuAtivo.style.color = "#161817";
  });

  document.querySelector(".seta").style.display = "none";
  document.querySelector(".seta-branca").style.display = "block";


  body1.className = "black";
  localStorage.setItem('tema', body1.className)

}

function alterarWhite(){

  let body1 = document.getElementById('body')

  
  lua.style.display = 'block';
  sol.style.display = 'none';

  document.querySelectorAll("#body, button.fundo-verde").forEach(function (element){
  element.style.background = "#DBE2DF";
  element.style.color = "#161817";
  });

  body1.style.backgroundImage = "url(./assets/img/fundo-header.png)";
  body1.style.backgroundRepeat = "no-repeat";

  document.querySelector('#estudante').style.boxShadow = "0px 0px 25.6px 0px rgba(0, 0, 0, 0.15)";

  document.querySelector("h1").style.color = "#161817";

  //Nav
  document.querySelectorAll("li.itens-nav").forEach(function (elements){
    elements.style.borderColor = "#161817";
    elements.style.background = "none";
    elements.style.color = "#161817";
  });

  //hover menu
  const menuNaoAtivo = document.querySelectorAll("#menu-naoativo, #menu-naoativo2");
  menuNaoAtivo.forEach(function (element){

    element.addEventListener('mouseenter', function (){
      element.style.background = "#161817";
      element.style.color = "black";
    });
    element.addEventListener('mouseleave', function (){
      element.style.background = "none";
      element.style.color = "#161817";
    });
  
  });

  const menuAtivo = document.querySelector("li#menu-ativo")
  menuAtivo.style.background = "#161817";
  menuAtivo.style.color = "#D1DCD7";

  menuAtivo.addEventListener('mouseenter', function (){
    menuAtivo.style.background = "none";
    menuAtivo.style.color = "#161817";
  });
  menuAtivo.addEventListener('mouseleave', function (){
    menuAtivo.style.background = "#161817";
    menuAtivo.style.color = "#D1DCD7";
  });

  document.querySelector(".seta").style.display = "block";
  document.querySelector(".seta-branca").style.display = "none";


  body1.className = "white";
  localStorage.setItem('tema', body1.className)

}

