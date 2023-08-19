let card = document.getElementById("card")
let cards = ()=>{
    document.getElementById("card").style.backgroundImage="url(https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042485_04-1024x576.jpg)"

    
}
let cards1 =()=>{
    document.getElementById("card").style.backgroundImage="url(https://as1.ftcdn.net/v2/jpg/06/10/50/94/1000_F_610509440_Pj6ul1cdQDqanMEqsJjQzaS82LLRwv0J.jpg)"


}
let cards2 =()=>{
    document.getElementById("card").style.backgroundImage="url(https://w.forfun.com/fetch/ae/aea6a6ff16ef93f3f717c143a04b9af6.jpeg?h=900&r=0.5)"


}
setTimeout(()=>{
    cards()
},2000)

setTimeout(()=>{
    cards2()
},4000)