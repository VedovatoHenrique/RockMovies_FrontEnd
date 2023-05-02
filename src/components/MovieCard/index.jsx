import { Container } from './styles'
import { Ratings } from '../Ratings'
import { Tag } from '../Tag'

export function MovieCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>Interestelar</h2>
      <Ratings rating={data.rating}/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur temporibus perspiciatis atque qui tempore deleniti blanditiis aspernatur ex quas rem sint facere repudiandae aliquid recusandae, voluptas cumque ipsa necessitatibus quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem optio error sapiente voluptas vel, officiis unde doloremque ab sunt ea, nulla explicabo. Rerum in adipisci saepe, aut voluptatibus hic maiores.</p>
        
         
          {
            data.tags && 
            <footer>
              { data.tags.map(tag => <Tag key={tag.name} title={tag.name}/>)}
            </footer>
          }

      
    </Container>
  )
}