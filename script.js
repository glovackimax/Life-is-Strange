 

// Constantes das imagens
const wallpaper = document.querySelector('.wallpaper');
const capa1 = document.querySelector('.capa1');
const capa2 = document.querySelector('.capa2');
const capa3 = document.querySelector('.capa3');



// Tema inicial da página sendo o tema claro
document.body.setAttribute("data-theme", "claro")

// Criando a variável do botão (imagem)
const input = document.querySelector('.botao')


// O tema escuro troca para o claro e o claro troca para o escuro.
const temas = {
    "escuro" : "claro",
    "claro" : "escuro",

}

// Variável booleana 
var x = Boolean()

// A troca entre os temas

if (input) {
    input.addEventListener('click', event => {
        event.preventDefault()
        console.log("funcionando")
        x = !x
        //

       
        const temaAtual = document.body.dataset.theme
        document.body.setAttribute("data-theme", temas[temaAtual] || "claro")


        updateWallpaper();


        if(x){
            input.setAttribute("src", "media/symbol-escuro.png")
            capa1.setAttribute("src", "media/lis1-capa-escuro.png")
            capa2.setAttribute("src", "media/lis2-capa-escuro.png")
            capa3.setAttribute("src", "media/lis3-capa-escuro.png")
            

        } else {
            input.setAttribute("src", "media/symbol-claro.png")
            capa1.setAttribute("src", "media/lis1-capa.jpg")
            capa2.setAttribute("src", "media/lis2-capa.jpg")
            capa3.setAttribute("src", "media/lis3-capa.jpeg")
        }

    })
        
}

//Atualizando o wallpaper para celular
updateWallpaper();
function updateWallpaper() {
    if(window.innerWidth <= 800 && x) {
       wallpaper.setAttribute("src", "media/wallpaper-celular-escuro.jpg")

    }
    else if(window.innerWidth <=800 && !x){
        wallpaper.setAttribute("src", "media/wallpaper-celular.jpg")

    }

    else if(x){
        wallpaper.setAttribute("src", "media/wallpaper-escuro.jpg")
    }

     else {
        wallpaper.setAttribute("src", "media/wallpaper.jpg")
        
    }
}


window.addEventListener("resize", updateWallpaper); 