import Pagina from '@/Components/Pagina'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiFillPlusCircle} from 'react-icons/ai'

export const index = () => {

  const [cursos, setCursos] = useState([])

  useEffect(()=>{
    setCursos(getAll())
  }, [])

  function getAll(){
    return JSON.parse(window.localStorage.getItem('cursos')) || [ ]
  }

  function excluir(id){
      const itens = getAll()
      itens.splice(id, 1)
      window.localStorage.setItem('cursos', JSON.stringify(cursos))
      setCursos(itens)
  }


  return (
    <Pagina titulo ="Cursos">
    <Link href="/cursos/forms" className="mb-2 btn btn-primary"><AiFillPlusCircle/>
    novo
    </Link>
    
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Duração</th>
          <th>Modalidade</th>
        </tr>
      </thead>
      <tbody>
        {cursos.map((item, i)  => (
          <tr>
            <td>
              <AiFillPlusCircle onClick={()=> excluir(i)} className='text-primary'/>
            </td>
            <td>{item.nome}</td>
            <td>{item.duracao}</td>
            <td>{item.modalidade}</td>




          </tr>
        ))}
      </tbody>
    </Table>
    </Pagina>
  )
}
export default index
