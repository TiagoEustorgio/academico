import React from 'react'
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap"


const Cabecalho = () => {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="/deputados">Academico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/deputados">Cursos</Nav.Link>
            <Nav.Link href="/deputados">Disciplinas</Nav.Link>
            <Nav.Link href="/deputados">Alunos</Nav.Link>
            <Nav.Link href="/deputados">Professores</Nav.Link>
            <Nav.Link href="/deputados">Turmas</Nav.Link>
            <Nav.Link href="/deputados">Salas</Nav.Link>
            <Nav.Link href="/deputados">Semestre</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho