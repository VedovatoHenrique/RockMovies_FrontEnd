import { Header } from '../../components/Header'
import { Container, ButtonAdd, Main } from './styles'
import { FiPlus } from 'react-icons/fi'
import { MovieCard } from '../../components/MovieCard'

export function Home(){
  return(
    <Container>
      <Header />
      <section>
        <div>
          <h1>
            Meus Filmes
          </h1>
          <ButtonAdd to="/newmovie">
            <FiPlus />
            Adicionar filme
          </ButtonAdd>
        </div>
        <Main to="/details/:1">
          <MovieCard data={{ 
            tags: [
              {id:'1', name:'Ficção Cientifica'},
              {id:'2', name:'Drama'},
              {id:'3', name:'Familia'},
            ]
            }}/>
            
        </Main>
      </section>

    </Container>
  )
}