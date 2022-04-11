window.onload = function(){
    document.querySelector("#alerta1").addEventListener("click", function(){
        function retorno(){
 
        }
        navigator.notification.alert("Alerta 1", retorno, "Você foi alertado", "Está bem")
    });

    document.querySelector("#alerta2").addEventListener("click", function(){
        function retorno(buttonIndex){
            if(buttonIndex ==1){
                navigator.app.exitApp();
            }else{
                return false;
            }    
        }
        navigator.notification.confirm (
            "Deseja fechar o aplicativo?",
            retorno,
            "Fechar App",
            ['Sim, sair', 'Não, obrigada'] 
            );
    });

    document.querySelector("#beep").addEventListener("click", function(){
            // Beep twice!
            navigator.notification.beep(2); 
    });

     document.querySelector("#vibrar").addEventListener("click", function(){
            navigator.vibrate(3000);
    });
}
