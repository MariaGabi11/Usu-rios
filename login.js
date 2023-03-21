let usuarios = [
  {
    nome: "Maria@gmail.com",
    senha: "13"
  },
  {
    nome: "Marcus@gmail.com",
    senha: "13"
  },
  {
    nome: "Hugo@gmail.com",
    senha: "13"
  },
  {
    nome: "Duda@gmail.com",
    senha: "13"
  },
  {
    nome: "Joao@gmail.com",
    senha: "13"
  },
  {
    nome: "Gabi@gmail.com",
    senha: "13"
  },
  {
    nome: "Renan@gmail.com",
    senha: "13"
  },
  {
    nome: "Brian@gmail.com",
    senha: "13"
  },
  {
    nome: "Gabriel@gmail.com",
    senha: "13"
  },
  {
    nome: "Pablo@gmail.com",
    senha: "13"
  },
  {
    nome: "Natan@gmail.com",
    senha: "13"
  },
  {
    nome: "Pedro@gmail.com",
    senha: "13"
  },
  {
    nome: "Fernando@gmail.com",
    senha: "13"
  },
  {
    nome: "Kevin@gmail.com",
    senha: "13"
  },
  {
    nome: "Miguel@gmail.com",
    senha: "13"
  }
]

//********************************************************************************************************* */

let nomepage2 = localStorage.getItem("usuarioLogado") // Pegar o nome de usuario logado no navegador

//********************************************************************************************************* */

if (nomepage2 != undefined) { // Tudo relacionado a pag 2

  let h2nome = document.querySelector("h2#nome")
  h2nome.innerHTML += `${nomepage2}` // Boas-vindas ao nome do usuario (ola maria)

  const sair = document.querySelector("input#sair"); // Capturando os dados do botão sair 
  sair.addEventListener("click", sairdapagina) //Onclick

  function sairdapagina() {

    localStorage.removeItem("usuarioLogado")
    window.location.href = "./index.html"
  }


  window.addEventListener(`beforeunload`, function () {
    this.localStorage.removeItem(`usuarioLogado`);
  });

  const inputlistarusuarios = document.querySelector("#listarusuarios");
  inputlistarusuarios.addEventListener("click", listarusuarios)

  function listarusuarios() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "<style>.lista{ border-style:solid;border-color: black;background-color: white;}</style>";
    lista.innerHTML += "Listar usúario: <br><br>"
    for (let index = 0; index < usuarios.length; index++) {
      lista.innerHTML += `Usúario ${index + 1} - ${usuarios[index].nome} <br>`
    }
  }

  const inputlimpar = document.querySelector("#limparusuarios");
  inputlimpar.addEventListener("click", limpartela)


  function limpartela() {
    let lista = document.querySelector('div.lista');
    lista.innerHTML = "<style>.lista {display:none;}</style>";
    
  }


  const inputdeletarusuarios1 = document.querySelector("#deletarusuarios1");
  inputdeletarusuarios1.addEventListener("click", deletarusuarios1)

  function deletarusuarios1() {
    let lista = document.querySelector(`div.lista`);
    lista.innerHTML = "<style>.lista{ border-style:solid;border-color: black;background-color:white;}</style>"

    lista.innerHTML += "Deletar usuarios: <br><br>"
    for (let index = 0; index < usuarios.length; index++) {

      lista.innerHTML += `<div><input type="checkbox" id="${index}"><label> -${usuarios[index].nome}</
      label></div>`
    }
    lista.innerHTML += `<input type="button" value="Deletar" class="botao" id="deletarusuarios2" >`

    const inputdeletarusuarios2 = document.querySelector("#deletarusuarios2");
    inputdeletarusuarios2.addEventListener("click", deletarusuarios2)

  }

  function deletarusuarios2() {

    let userdeletado = [""]
    for (let index = 0; index < usuarios.length; index++) {
      let checkbox = document.getElementById(`${index}`);
      if (checkbox.checked == true) {
        userdeletado[index] = 1
      } else {
        userdeletado[index] = 0
      }
    }
    for (let index = userdeletado.length - 1; index >= 0; index--) {
      if (userdeletado[index] == 1) {
        usuarios.splice(index, 1);
      }
    }
    listarusuarios();
  }



  const inputadicionarusuarios1 = document.querySelector("#adicionarusuarios1");
  inputadicionarusuarios1.addEventListener("click", adicionarusuarios1)

  function adicionarusuarios1() {

    let lista = document.querySelector('div.lista');
    lista.innerHTML = "<style>.lista{ border-style:solid;border-color: black;background-color: white;}</style>";;
    lista.innerHTML += "Adicionar usuário: <br><br>"
    lista.innerHTML += `<form>
  <label for="inputuser">Nome usuário:</label></br>
  <input type="text" class="inputuser"> <br>

  <label> Digite a senha:</label><br>
  <input type="password" class="inputsenha"><br>

  <label> Confirme a senha:</label><br>
  <input type="password" class="inputsenha2"><br>
  
  
  <br>
  <input type="button" value="Adicionar" class="botao"
  id="adicionarusuarios2">
  </form> `




    //testando e gerenciando se o botão adicionar foi clicado
    const inputadicionar2 = document.querySelector("#adicionarusuarios2");
    inputadicionar2.addEventListener("click", adicionarusuarios2)
  }

  // função para executar os processos para adicionar os usuarios
  function adicionarusuarios2() {

    let novousuario = {
      nome: document.querySelector(`input.inputuser`).value,
      senha: document.querySelector(`input.inputsenha`).value
    }
    let senha2 = document.querySelector(`input.inputsenha2`).value

    if (novousuario.senha == senha2) {



      let repetida = 0
      for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome == novousuario.nome) {
          repetida = 1
        }
      }

      if (repetida == 0) {
        usuarios.push(novousuario) //adicona valores na ultima posição do vetor

        alert("Usuário adicionado com sucesso!")
        listarusuarios()
      } else {
        alert("Usuário já existe no cadastro,digite outro nome!")
        adicionarusuarios1()
      }

    } else {
      alert("Senha incorreta!")
      adicionarusuarios1()
    }

    // novo
    if (senha.senha2==""){
    let repetida = 1
      for (let index = 0; index < usuarios.length; index++) {
        if (senha.senha2[index].nome == novousuario.nome) {
          repetida = 1
        }
      }

      if (repetida == 0) {
        usuarios.push(novousuario) //adicona valores na ultima posição do vetor

        alert("Usuário adicionado com sucesso!")
        listarusuarios()
      } else {
        alert("Usuário já existe no cadastro,digite outro nome!")
        adicionarusuarios1()
      }

    } else {
      alert("Senha incorreta!")
      adicionarusuarios1()
    }
    




  } // fechamento da fuction

  const inputatualizar1 = document.querySelector("#atualizarusuarios1");
  inputatualizar1.addEventListener("click", atualizarusuarios1)


  function atualizarusuarios1() {
    let lista = document.querySelector(`div.lista`);
    lista.innerHTML = "<style>.lista{ border-style:solid;border-color: black;background-color: white;}</style>";;
    lista.innerHTML += "Trocar usuário <br><br>"
    lista.innerHTML += `<form>
                      <label> Nome usário: </label> <br>
                      <input type="text" class="inputuser"> <br>
                      <label> Digite a senha atual: </label> <br>
                      <input type="password" class="inputsenha"><br>
                      <label> Novo usuário:</label><br>
                      <input type="text" class="inputuser1"> <br>
                      <label> Nova senha:</label><br>
                      <input type="password" class="inputsenha1"> <br>
                      <label> Confirmar senha:</label><br>
                      <input type="password" class="inputsenha2"> <br>
                      <input type="button" value="Trocar" class="botao" id="trocarsenha">
                     </form>`

    const inputtrocarsenha1 = document.querySelector("#trocarsenha");
    inputtrocarsenha1.addEventListener("click", atualizarusuarios2)
  }


  function atualizarusuarios2() {
    let nome = document.querySelector('input.inputuser').value;
    let nome1 = document.querySelector('input.inputuser1').value;
    let senha = document.querySelector('input.inputsenha').value;
    let senha1 = document.querySelector('input.inputsenha1').value;
    let senha2 = document.querySelector('input.inputsenha2').value;
    let errosenha = 1
    let repitida = 0
    let indice = 0
    for (let index = 0; index < usuarios.length; index++) {
      if (usuarios[index].nome == nome1) {
        if (usuarios[index].nome != nome) {
          repitida = 1
        }
      }
    }


    if (repitida == 0) {
      for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].nome == nome) {
          repitida = 0
          if ((usuarios[index].senha == senha) && (senha1 == senha2)) {
            errosenha = 0
            indice = index
            index = usuarios.length


          }
        }
      }

      if (errosenha == 0) {
        let lista = document.querySelector('div.lista');
        lista.innerHTML = "";
        usuarios[indice].nome = nome1
        usuarios[indice].senha = senha1
        alert("Dados atualizado com sucesso!")
        listarusuarios()
      } else {
        alert("Login incorreto,favor verificar os dados,senha incorreta!")
        atualizarusuarios1()

      }
    } else {
      alert("Login incorreto,favor verificar os dados,usário incorreta!")
      atualizarusuarios1()

    }
  }





  const testar = document.querySelector("#testar");
  testar.addEventListener("click", testaruser1)



  function testaruser1() {

    let lista = document.querySelector(`div.lista`);
    lista.innerHTML = "<style>.lista{ border-style:solid;border-color: black;background-color: white;}</style>";;
    lista.innerHTML += "Testar usuário <br><br>"
    lista.innerHTML += `<form>
                      <label> Digite usuário: </label> <br>
                      <input type="text" class="inputuserteste"> <br>
                      <label> Digite a senha: </label> <br>
                      <input type="password" class="inputsenhateste"><br>
                      <input type="button" value="Testar" class="botao" id="testaruser1">
                     </form>`

    const inputtestaruser1 = document.querySelector("#testaruser1");
    inputtestaruser1.addEventListener("click", testaruser2)

  }



  function testaruser2() {

    let nome = (document.querySelector('input.inputuserteste')).value
    let senha = (document.querySelector('input.inputsenhateste')).value

    for (let index = 0; index < usuarios.length; index++) {

      if (nome == usuarios[index].nome && senha == usuarios[index].senha) {
        index = usuarios.length
        alert("Login realizado com sucesso")
      } else if (index == usuarios.length - 1) {
        alert("Usuário ou senha invalido")
      }

    }

  }







  




} else { // tudo relacionado a pag 1
  function testar() {

    let nome = (document.querySelector('input#usuario')).value
    let senha1 = (document.querySelector('input#senha')).value

    for (let index = 0; index < usuarios.length; index++) {

      if (nome == usuarios[index].nome && senha1 == usuarios[index].senha) {
        localStorage.setItem("usuarioLogado", usuarios[index].nome)
        index = usuarios.length
        window.location.assign("./login2.html")


      } else if (index == usuarios.length - 1) {
        alert("usuário invalido")
      }

    }

  }
}





