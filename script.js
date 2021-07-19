


var container = document.getElementById("container");
var button = document.getElementById("action-btn");
var fomulario = document.getElementById("quiz");

// Escodnder o menu de informações

function Click(){
    document.getElementById("container").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    if(document.getElementById("container").style.display = "block"){
        container.style.display = 'none';
    }else{document.getElementById('quiz').style.display = 'block'}
}

// validar dados



// Validar o sintomas 


 function Check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result = document.getElementById('result');
    var quiz = document.getElementById('quiz');
    var positive = document.getElementById('positive');
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var idade = document.getElementById('idade');
    var tel = document.getElementById('tel');
    var sexo = document.getElementById('sexo');

    if(nome.value == ""){
        alert('Por favor, preencha o campo NOME !');
        nome.focus();
        return false;
    }

    if( email.value=="" ||
        email.value.indexOf('@')==-1 ||
        email.value.indexOf('.')==-1 )
    {
       alert( "Por favor, preencha campo E-MAIL corretamente!" );
       email.focus();
       return false;
    }

    if(idade.value == ""){
        alert("Por favor, preencha o campo IDADE");
        idade.focus();
        return false;
    }

    if(tel.value == "" || tel.value <= 9){
        alert("Por favor, preencha o campo Telefone Corretamente");
        tel.focus();
        return false;
    }

    if(sexo.value == ""){
        alert("Por favor, selecione o SEXO!")
        sexo.focus();
        return false;
    }



    if(q1 == "" || q2 == "" || q3 == "" || q4 == "" || q5 == ""){
        alert("Por favor, prencher todos os campos !")
        return false;
    }


    
    if (q1 == "Sim") {c++}
    if (q2 == "Sim") {c++}
    if (q3 == "Sim") {c++}
    if (q4 == "Sim") {c++}
    if (q5 == "Sim") {c++}
    if (q1 == "indeciso") {c++}

    if(c<=2){
        result.style.display= "block"
        container.style.display="none"
        quiz.style.display="none"
    }else{positive.style.display="block"
         container.style.display="none"
         quiz.style.display="none"
          
          
}

 }
 