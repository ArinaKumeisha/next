import React from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
  //const [users, setUsers] = useState([])
  
  return (
    <>
      <MainContainer keywords="users">
      <h1>Список пользователей</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}><a>{user.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      </MainContainer>
    </>
  );
};

export default Users;
export async function getStaticProps(context) {   //эта функция для запросов
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await response.json();
    
  return {
    props: {users}, // передаем пропсы в компонент Users и отрисовываем там
  }
}