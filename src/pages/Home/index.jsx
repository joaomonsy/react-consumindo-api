import { useState, useEffect } from "react";
import "./style.css";
import Trash from "../../assets/trash3.svg";
import api from "../../services/api";

function Home() {
  let users = [
    /*{
      id: "1",
      name: "João",
      age: 20,
      email: "joao@email.com",
    },
    {
      id: "2",
      name: "Maria",
      age: 25,
      email: "maria@email.com",
    }*/
  ];

 async function getUsers() {
    users = await api.get('/usuarios');
    console.log(users);
  }

  useEffect (() => { //executa a função getUsers quando o componente é montado
    getUsers();
  }, []);
    

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input name="nome" placeholder="Nome" type="text" />
        <input name="idade" placeholder="Idade" type="number" />
        <input name="email" placeholder="Email" type="email" />
        <button type="button">Cadastrar</button>
      </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
        <button>
          <img src={Trash} alt="Excluir" />
        </button>
      </div>
      ))}

      <div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
