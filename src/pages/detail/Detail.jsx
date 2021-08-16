import './detail.css';
import TopBar from '../../components/topbar/TopBar';
import { Container, CardColumns,Card } from 'react-bootstrap';
import emojibook from '../../emojibook';
import gallery from '../../gallery';
import { useParams } from 'react-router';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Detail() {
  const { id }=useParams();
  
  return (
      <>
      <TopBar />
    <div className='detail'>
      <Container>
      <Row>
    <Col sm={9}>
      {emojibook.filter(card=>card.id==id).map((card,id) => (
      <CardColumns key={card.id} className='detailCardColumns'>
        <Card className="detailCard">
            <span className="detailImgContainer">
            <Card.Img className='detailCardImg'
             variant="top" 
             src={ `${card.image}/${card.id}.png` } />
             </span>
            <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
                {card.meaning}
            </Card.Text>
            </Card.Body>
        </Card>
        </CardColumns>
        ))}
       </Col>
    <Col sm={3} >
      <div className="detailSidebar">
      <h2> <Link className="link " to='/categories'> Gallery</Link></h2>
      <hr />
      <ul>
        { gallery.map((gal)=>(
          <li key={gal.id}> 
          <Link className="link" to={`/category/${gal.id}`}>
            {gal.emoji} {' '} {gal.name}
            </Link> 
          </li>
        ))}
      </ul>
      </div>
    </Col>
  </Row>
      </Container>
    </div>
    </>
  )
}
