import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer"
import Error from "../../pages/404";

export default function User({user}) {
  const {query} = useRouter();
  
  return (
    <>
      {query.id == user.id ?
        <MainContainer keywords={user.name}>
          <h1> Пользователь с id {query.id}</h1>
          <h1>Пользователь with name {user.name} </h1>
        </MainContainer> : <Error/>}
    </>
  )
}


export async function getServerSideProps({params}) {
  
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`); //получаем нужный id из params
  const user = await response.json();
  return {
    props: {user}, // will be passed to the page component as props
  }
}