//executa a minhafuncao daqui a um segundo
set Timeout(minhaFuncao, 1000);

//executa a minhafuncao de um em um segundo
var timer = setInterval(minhaFuncao,1000);

//cancela execuçao
clearInterval(timer);