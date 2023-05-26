document.addEventListener('DOMContentLoaded', function() {
    const textoInput = document.getElementById('texto');
    const mensajePrincipal = document.getElementById('mensajePrincipal');
    const mensajeSecundario = document.getElementById('mensajeSecundario');
    const resultado = document.getElementById('resultado');
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');
    const copiarTextoBtn = document.getElementById('copiarTexto');
  
    encriptarBtn.addEventListener('click', function() {
      const texto = textoInput.value;
      if (texto) {
        const textoEncriptado = encriptarTexto(texto);
        resultado.textContent = textoEncriptado;
        imgBuscar.style.display = 'none';
        mensajePrincipal.style.display = 'none';
        mensajeSecundario.style.display = 'none';
      } else {
        mostrarMensajeError();
      }
    });
  
    desencriptarBtn.addEventListener('click', function() {
      const texto = textoInput.value;
      if (texto) {
        const textoDesencriptado = desencriptarTexto(texto);
        resultado.textContent = textoDesencriptado;
        imgBuscar.style.display = 'none';
        mensajePrincipal.style.display = 'none';
        mensajeSecundario.style.display = 'none';
      } else {
        mostrarMensajeError();
      }
    });
  
    copiarTextoBtn.addEventListener('click', function() {
      const textoCopiado = resultado.textContent;
      if (textoCopiado) {
        navigator.clipboard.writeText(textoCopiado).then(function() {
          alert('Texto copiado al portapapeles');
        }, function() {
          alert('Error al copiar el texto');
        });
      }
    });
  
    function encriptarTexto(texto) {
      return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    }
  
    function desencriptarTexto(texto) {
      return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    }
  
    function mostrarMensajeError() {
      mensajePrincipal.style.display = 'none';
      mensajeSecundario.style.display = 'block';
    }
  });
  