import { Header } from '../../components/Header';
import { Container, Form, RemoveMovie } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NewTag } from '../../components/NewTag';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom'

export function NewMovie() {
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <Link to="/">
            <FiArrowLeft/>
              Voltar
            </Link>
            <h1>Novo Filme</h1>
          </header>
          <section className='input-values'>
            <Input 
              type="text" 
              placeholder="Titulo" 
           />
           <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              min="0" max="5"
          />
        </section>


        <Textarea 
          placeholder="Observações"         
        />

        <Section title='Marcadores'> 
        <div className="tags">
        <NewTag value='React'/>
        <NewTag isNew value='Novo Marcador'/>
        </div>
        </Section>

        <div className="buttons">
          <RemoveMovie type="button">
            Excluir filme
          </RemoveMovie>
          <Button 
              title="Salvar alterações"   
          />
        </div>
        </Form>

      </main>
    </Container>
  )

}