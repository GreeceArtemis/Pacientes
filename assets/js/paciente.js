document.getElementById("retornar").addEventListener("click",function(){
    window.location="index.html";
});

window.onload=function(){
      var nombre=document.getElementById("nombre-paciente");
      var apellido=document.getElementById("apellido-paciente");
      var edad=document.getElementById("edad-paciente");
      var genero=document.getElementById("genero-paciente");
      var ciudad=document.getElementById("ciudad-paciente");
      var pais=document.getElementById("pais-paciente");

      var objetoPaciente=JSON.parse(localStorage.getItem("nuevoPaciente"));
      nombre.innerText=objetoPaciente.nombre;
      apellido.innerText=objetoPaciente.apellido;
      edad.innerText=objetoPaciente.edad;
      genero.innerText=objetoPaciente.genero;
      ciudad.innerText=objetoPaciente.ciudad;
      pais.innerText=objetoPaciente.pais;

      var mostrando=document.getElementsByClassName("editando");
      console.log(mostrando);
      mostrando[0].onblur=function(){
        if(this.value.trim().length==0){
          this.value=objetoPaciente.nombre;
          objetoPaciente=this.value;
        }
        var arrDato=this.value.split(" ");
        var mensaje="";
        console.log(arrDato);
        arrDato.forEach(function(e){
          var datoCorrecto=e.charAt(0).toUpperCase()+e.substring(1).toLowerCase();
          mensaje+=datoCorrecto+" ";
        });
        this.value=mensaje;
      }
      document.getElementById("editar").addEventListener("click",function (){
      //document.getElementById('nombreP').disabled=false;
      document.getElementById('nombreP').style.display = "inline";
      });
}
