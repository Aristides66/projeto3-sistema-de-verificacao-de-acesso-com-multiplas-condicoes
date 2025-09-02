const nome = prompt("digtite seu nome completo:").toLowerCase()
let idade= parseInt(prompt("digite sua idade"))
if(idade >= 18){
    alert(`Olá ${nome}! você tem acesso completo. Boas-vindas à plataforma!`)
}else if(nome =="admin"){
    alert(`bem-vindo, Admin! Acesso total liberado!`)
}else if(nome =="moderador" && idade >=16){
    alert(`Olá moderador! Acesso liberado para área de moderação.`)
}else if(idade >=13 && idade <=17){
    alert(`Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!`)
}else{
    alert(`Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.`)
}
