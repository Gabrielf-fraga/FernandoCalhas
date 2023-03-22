function validate(){
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var servico = document.getElementById('servico').value;
    var erro = document.getElementById('aviso');

    if (nome.length<2){
        erro.innerHTML = 'Nome inválido';
        document.getElementById('nome').focus();
        return false;}else 
    if (endereco.length<5){
            erro.innerHTML = 'Endereço inválido';
            document.getElementById('endereco').focus();
            return false;} else 
            if (servico==''){
                erro.innerHTML = 'Serviço inválido';
                document.getElementById('servico').focus();
                return false;} else 
                {return true;}
}