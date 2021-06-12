var pegaDivPai = document.querySelector('.quadrado2')
//var input = document.createElement("div")
var divBoneco = document.querySelector('.div')

const palavras = ['react', 'javascript', 'java','swift','kotlin','html', 'css', 'node','angular','android']
let sorteio = Math.floor(Math.random()*palavras.length);
var palavraSorteada = palavras[sorteio]
console.log(palavraSorteada)
const tamanhoPalvra = palavraSorteada.length
palavraSorteada.split(" ")

var letra;
var idx;
var campo;
var acertos = 0;
var letrasJogadas = []
var letrasErradas = '';
var errosQtd=0;
var apagarCampos;

function iniciar(tamanhoPalvra, pegaDivPai){
   for(var i =0; i<= tamanhoPalvra-1; i++){
      var input = document.createElement("input")
   
      input.setAttribute('type', 'text')
      input.className = "letras"
      input.setAttribute('id', 'letra'+i)
      input.setAttribute('readonly', true)
      pegaDivPai.appendChild(input)
      
   }
}

iniciar(tamanhoPalvra, pegaDivPai)

function jogar(){
   const letraEscolhida = document.getElementById('escolha-letra')
   letra = letraEscolhida.value

   if(letra == ''){
      alert("Digite uma letra")

   }else if(letrasJogadas.includes(letra)){
      alert('Você ja jogou essa letra')

   } else if(palavraSorteada.includes(letra)){
      while(palavraSorteada.match(letra) != null){
         idx = palavraSorteada.indexOf(letra)
         campo = document.getElementById(`letra${idx}`).value=letra
         palavraSorteada = palavraSorteada.replace(letra, '0')
         acertos++
         letrasJogadas.push(letra)
      }

   } else if(!palavraSorteada.includes(letra)) {
      var erros = document.getElementById('letras-jogadas')
      erros.innerText += ` ${letra}`
      letrasJogadas.push(letra)
      errosQtd++
      console.log(errosQtd)
      if(errosQtd == 1){
         montarBoneco('Cabeça.png', 'cabeca')
      } else if(errosQtd == 2){
         montarBoneco('tronco.png', 'tronco')
      }else if(errosQtd == 3){
         montarBoneco('braço Direito.png', 'brcDireito')
      }else if(errosQtd == 4){
         montarBoneco('Braço Esquerdo.png', 'brcEsquerdo')
      }else if(errosQtd == 5){
         montarBoneco('Pé Direito.png', 'peDireito')
      }else if(errosQtd == 6){
         montarBoneco('pé esquerdo.png', 'peEsquerdo')
         alert('Infelizmente voce perdeu, tente outra vez, Palavra correta era: ' + palavraSorteada)
         
      }
   }

   letraEscolhida.value = ""
   verificaVitoria(tamanhoPalvra, acertos)
}

function verificaVitoria(tamanhoPalvra, acertos){
   if(acertos == tamanhoPalvra){
      alert("Parabéns, Você Ganhou!!")
   }
}

function recomecar(){
   location.reload()
}
   
function montarBoneco(path, id){
   var cabeca = document.createElement('img')
   cabeca.setAttribute('src', `fotos/${path}`)
   cabeca.setAttribute('id', id)
   divBoneco.appendChild(cabeca)
}



