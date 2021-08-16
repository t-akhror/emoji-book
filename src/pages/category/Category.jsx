import { Card, Container,Row,CardGroup } from 'react-bootstrap'
import './category.css'

import emojibook from '../../emojibook'
import TopBar from '../../components/topbar/TopBar'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function Category() {
  const {id}=useParams();

  return (
    <>
    <TopBar/>
    <div className="category">
      <Container>
      <Row xs={3} md={4} className="g-4">

        { emojibook.filter(card=>card.gallery_id == id).map((card,id)=>(
         <CardGroup>
           <Card key={card.id}>
             <Card.Img className="categoryImage" variant="top" src={`${card.image}/${card.id}.png`} />
             <Card.Body>
               <Card.Title>
                 <Link className="link" to={`/detail/${card.id}`}> {card.name} </Link></Card.Title>
               <Card.Text>
                 {card.meaning.substr(0,150)} . . .
               </Card.Text>
             </Card.Body>
           </Card>
           </CardGroup>
        ))}
          
        </Row>
      </Container>
      
    </div>
    </>
  )
}
