export default function App() {
  return(
    <div>
      <h1>My first project</h1>
      <Aluno nome="João Gomes" idade={30} />
      <Aluno nome="Maria Gomes" idade={25} />
    </div>
  )
}

interface AlunoProps {
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
  return (
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div>
  )
}