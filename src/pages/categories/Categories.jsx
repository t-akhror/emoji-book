import { Card, Container,Row,Col } from 'react-bootstrap'
import './categories.css'
import TopBar from '../../components/topbar/TopBar'
import gallery from '../../gallery'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <>
    <TopBar/>
    <div className="categories">
      <Container>
      <Row xs={3} md={4} className="g-4">
          {gallery.map((gallery) => (
            <Col>
              <Card>
                <Card.Img className="galleryImage" variant="top"
                 src={gallery.image}
                  />
                <Card.Footer >
                  <Card.Title className='text-center'>
                    <Link className="link " to={`/category/${gallery.id}`}>
                       <h2>{gallery.name} </h2>
                    </Link> 
                    </Card.Title>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
    </>
  )
}
