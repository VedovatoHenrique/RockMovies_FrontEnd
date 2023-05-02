import { Container, Profile, Avatar, Logout } from './styles';

import { Input } from '../../components/Input';

export function Header(){
  return(
    <Container>
     
        <h2>RocketMovies</h2>
        <Input 
          type="text" 
          placeholder="Pesquisar pelo título"
        />
      <Profile to='/profile'>
        <div>
          <strong>Henrique Vedovato</strong>
          <Logout><a href="/">sair</a></Logout>
        </div>
        <Avatar>
          <img src="https://github.com/VedovatoHenrique.png" alt="Foto do usuário"/>
        </Avatar>
      </Profile>
    </Container>
  )
}