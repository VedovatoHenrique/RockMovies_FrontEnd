import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function SingUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua Conta</h2>
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha"
          type="Password"
          icon={FiLock}
        />

       <Button title="Cadastrar"/>

       <Link to='/' 
       href="/">Voltar para o login
       </Link >

      </Form>
      <Background />
    </Container>
  )
}