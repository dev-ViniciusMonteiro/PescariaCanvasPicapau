//cria uma instacia para guardar as imagens
    var picapau2 = new Image()  
    var picapau1 = new Image()
    var isca = new Image()
    var sol = new Image()
    var fundoagua = new Image()
    var montanhafundo = new Image()
    var lixo = new Image()
    var peixe1 = new Image()
    var peixe2 = new Image()
    var peixe1esq = new Image()
    var peixe2esq = new Image()
    var peixe1pego = new Image()
    var peixe2pego = new Image()
// variaveis para as condicoes
var pegoGeral = 1// o que manda em todos 1=solto 0=pego
var y = 900//da vara
var x = -300//peixe1
var z = 1
var pego = 1
var x2 = -2100//peixe2
var z2 = 1
var pego2 = 1
var x3 = -1600//peixe3
var z3 = 1
var pego3 = 1
var contaPego = 0
//cria variaveis pra contexto e com variaveis sobre o canvas
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    function init() {
        //window.addEventListener('keydown', onKeyDown, true)
        picapau2.src = 'picapau2.png'
        picapau1.src = 'picapau1.png'
        isca.src = 'isca.png'
        sol.src = 'sol.png'
        fundoagua.src = 'fundoagua.png'
        montanhafundo.src = 'montanhafundo.png'
        lixo.src = 'lixo.png'
        peixe1.src = 'peixe1.png'
        peixe1esq.src = 'peixe1esq.png'
        peixe2.src = 'peixe2.png'
        peixe2esq.src = 'peixe2esq.png'
        peixe2pego.src = 'peixe2pego.png'
        peixe1pego.src = 'peixe1pego.png'
        requestAnimationFrame(draw)
    }
//limpa o canvas
function LimpaCanvas(){
    ctx.clearRect(0,0, canvas.width, canvas.height)//limpa o canvas e denha com tranparencia o antigo dando assim um pequeno efeito sompra
      ctx.fillStyle = 'rgba(255,255,255, 0.2)'
      ctx.fillRect(0,0, canvas.width, canvas.height)
}
//gera randomico
function grandomico(min, max) {
    return Math.random() * (max - min) + min;
  }
   
//cria picapau pescando
    function FuncPicapau1(x,y){
      ctx.translate(x,y)
      ctx.drawImage(picapau1, 0, 0)
    }
//cria picapau dormindo
    function FuncPicapau2(x,y){
      ctx.translate(x,y)
      ctx.drawImage(picapau2, 0, 0)
    }
//cria isca
    function Funcisca(x,y){
      ctx.translate(x,y)
      ctx.drawImage(isca,0,0)
    }
    //cria sol
    function Funsol(x,y){
        ctx.translate(x,y)
        ctx.drawImage(sol,0,0)
    }
    //cria fundo Agua
    function Funagua(x,y){
        ctx.translate(x,y)
        ctx.drawImage(fundoagua,0,0) 
    }



    //muda z 
    function Mudaz(z){
        if(z<=20)
        return z+1
        if(z>=40)
        return 1
        else
        return z+1
    }
    //criaz peixe
    function FunpeixeD(x,y,z){
        if(z<=20){
        ctx.drawImage(peixe1,x,y)
        }else{
        ctx.drawImage(peixe2,x,y)
        }
    }
    //move peixe 
    function movePeixe(x){
        if(x>=3200){
            return -300
        }else{
            return x+7
        }
    }


    //cria degrade para o fundo da agua
    function Funfundoagua(){
        ctx.fillStyle = 'rgb(255,255,0)'
        ctx.fillRect(0, 0, 3000, 600)
        ctx.drawImage(montanhafundo,0,200)//desenha o fundo
        var lingrad = ctx.createLinearGradient(0,0,0,2000)//faz degrade alem do canvas para efeito mais forta na cor
        lingrad.addColorStop(0, 'rgb(135, 206, 250)')//amarelo comeca no 0
        lingrad.addColorStop(1, 'rgb(61, 176, 247)')//degrade vermelho anda de acordo com o sol
        ctx.fillStyle = lingrad//prenche com a cor degrade
        ctx.fillRect(0, 400, 3000, 1500)//cria retangulo com prenchimento completo do tamanho do canvas bem em cima do canvas

    }
    //cria a linha de pescar
    function Linha(y,p){
        ctx.beginPath()
        ctx.moveTo(1315, 20)
        ctx.lineTo(1315,300)
        ctx.lineTo(1315,y)
        if(p>=1)
        Funcisca(1285,y)//desenho da isca
        ctx.stroke()
    }
    //caso estiver pego fica na linha
    function vepego(pego){
        if(pego>=1){
            z = Mudaz(z)
            x=movePeixe(x)
            FunpeixeD(x,500,z)
        }if(pego<1){
            z = Mudaz(z)
            if(z<=20)
            ctx.drawImage(peixe2pego,1260,y)
            else
            ctx.drawImage(peixe1pego,1260,y)
        }
    }
    function vepego2(pego){
        if(pego>=1){
            z2 = Mudaz(z2)
            x2=movePeixe(x2)
            FunpeixeD(x2,900,z2)
        }if(pego<1){
            z2 = Mudaz(z2)
            if(z<=20)
            ctx.drawImage(peixe2pego,1260,y)
            else
            ctx.drawImage(peixe1pego,1260,y)
        }
    }
    function vepego3(pego){
        if(pego>=1){
            z3 = Mudaz(z3)
            x3=movePeixe(x3)
            FunpeixeD(x3,1200,z3)
        }if(pego<1){
            z3 = Mudaz(z3)
            if(z3<=20)
            ctx.drawImage(peixe2pego,1260,y)
            else
            ctx.drawImage(peixe1pego,1260,y)
        }
    }
    function chamadapeixe1(){
        if((y>=450)&&(y<=550)){
            pego=mudapego(x,y)
            }if(pego==0){
            pego=soltapego(y,pego)
            x=solta(y,x)
            }
            vepego(pego,y)
    }
    function chamadapeixe2(){
        if((y>=850)&&(y<=950)){
            pego2=mudapego(x2,y)
            }if(pego2==0){
            pego2=soltapego(y,pego2)
            x2=solta(y,x2)}
            vepego2(pego2)
    }
    function chamadapeixe3(){
        vepego3(pego3)
        if((y>=1150)&&(y<=1250)){
        pego3=mudapego(x3,y)
        }if(pego3==0){
            pego3=soltapego(y,pego3)
            x3=solta(y,x3)
            }
        pegoGeral=mudapegog(pego,pego2,pego3)
    }

    
    function solta(y,x){
        if(y<400){
            contaPego=contapeg(contaPego)
            return -300
        }else{
            return x
        }
    }
    function soltapego(y,pego){
        if((pego<=0)&&(y<400)){
            return 1
        }else{
            return pego
        }
    }
    
    
    
//muda o peixe pra pego caso no mesmo que a isca
    function mudapego(x,y){
        if(((y>=450)&&(y<=550))||((y>=850)&&(y<=950))||((y>=1150)&&(y<=1250))){
        if((x>=1120)&&(x<=1205)){
            return 0
        }else{
            return 1
        }}else{
            return 1
        }
    }
    //ve se o picapau fica acordado ou dormindo de acordo com o peixe
    function mudapegog(x,x1,x2){
        if((x>=1)&&(x1>=1)&&(x2>=1))
        return 1
        else
        return 0
    }
    function contapeg(contaPego){
        return contaPego + 1
    }
   
    //anda com os botoes
    function onKeyDown(ev) {
        if (ev.key == "ArrowDown") {  //Seta para Baixo
           y = y + 5;
           if (y + 100 > canvas.height) {
            y = canvas.width - 100;
           }
        } else if (ev.key == "ArrowUp") {  //Seta para Cima
           y = y - 5;
           if (y < 0) {
             y = 0;
           }
        }
       
      }
    

//chama o principal do canvas pra desenhar
    function principal(pego){
        Funfundoagua()//degrade da agua e desenho da montanha
        Funagua(0,380)//desenho de cima da agua
        if(pego>=1)
        FuncPicapau2(1300,-380)//desenho do picapau deitado
        else
        FuncPicapau1(1300,-380)//desenho do picapau acordado
    }
   
 
    function draw() {
        console.log('Numero de ciclos desde o inicio')
      
     ctx.save()
     LimpaCanvas()
     principal(pegoGeral)//chama o principal estatico e recebe se tem peixe ou nao
     ctx.restore()

     ctx.save()
     chamadapeixe1()
     ctx.restore()

     ctx.save()
     chamadapeixe2()
     ctx.font = "200px Georgia"
     
     ctx.fillText('Peixes pegos= ' + contaPego ,50, 150,1000)
     ctx.restore()

     ctx.save()
     chamadapeixe3()
     ctx.restore()

     ctx.save()
     Linha(y,pegoGeral)// desenha linha e isca(se o peixe n tiver pego deneha isca)
     ctx.restore()

     
     window.addEventListener('keydown', onKeyDown, true)
        requestAnimationFrame(draw)

    }