  var numero=0;
  var baseDatos=[];
window.addEventListener('load',function() {
  var enviar=document.getElementById("login");
  enviar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
  var nombre=document.getElementById("nombre").value;
  var apellido=document.getElementById("apellido").value;
  var edad=document.getElementById("edad").value;
  var genero=document.getElementById("genero").value;
  var ciudad=document.getElementById("ciudad").value;
  var pais=document.getElementById("pais").value;

  paciente=new alldatos (nombre,apellido,edad,genero,ciudad,pais);
  baseDatos.push(paciente);

  function alldatos(nombre,apellido,edad,genero,ciudad,pais){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
    this.genero=genero;
    this.ciudad=ciudad;
    this.pais=pais;
  };
  function createPost(paciente,numero) {
    var post = document.createElement('div');
    var texto0 = document.createElement('h3');
    var texto1 = document.createElement('p');
    var texto2= document.createElement('p');
    var texto3 = document.createElement('p');
    var texto4 = document.createElement('p');
    var   post;

    post.className="Paciente"+numero;
    texto0.innerHTML= "Paciente N"+ numero;
    post.appendChild(texto0);
    texto1.innerHTML= "Nombre:"+ paciente.nombre;
    post.appendChild(texto1);
    texto2.innerHTML="Apellido: "+paciente.apellido;
    post.appendChild(texto2);
    texto3.innerHTML="Edad: "+paciente.edad;
    post.appendChild(texto3);
    texto4.innerHTML="Pais: "+paciente.pais;
    post.appendChild(texto4);
    return post;
  }
  var pacientes = document.getElementById('pacientes');
      numero++;
  pacientes.appendChild(createPost(paciente,numero));
      });

});
