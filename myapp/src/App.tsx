import { Aluno } from "./components/aluno";

export default function App() {
  return(
    <div>
      <h1>My first project</h1>
      <Aluno nome="João Gomes" idade={30} />
      <Aluno nome="Maria Gomes" idade={25} />
    </div>
  )
}

