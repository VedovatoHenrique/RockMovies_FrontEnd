import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function SingIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>
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

       <Button title="Entrar"/>

       <Link to='/register'
       href="/">Criar conta
       </Link>

      </Form>
      <Background />
    </Container>
  )
}