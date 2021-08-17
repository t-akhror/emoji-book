import './home.css'
import { useState } from 'react';
import { Col,
     Container,
      Row,
      Form,
      FormControl,
      Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import emojibook from '../../emojibook';
import brandImg from '../../image/brand-new.png';



export default function Home() {
 
  const [searchTerm, setSearchTerm]=useState("");
  return (
    <div >
    <div className="home" >
      <Container>
         
          <Row className="justify-content-md-center">
                <Col xs lg="1">
                
                </Col>
                <Col md="auto">
                
                <span className="homeBrandTitle">
                <span className="homeBrandImage"> 
                  <img src={brandImg} width="70"
                         height="70" alt="" /> </span>
                 <Link to='/' className='link'>  EmojiBook</Link> 
                  </span>
                            <Form className="d-flex">
                            <FormControl
                                type="search"
                                onChange={(event)=>{setSearchTerm(event.target.value)}}
                                placeholder="Search"
                                className="mr-2 homeSearch"
                                aria-label="Search"
                            />
                            </Form>
                            <div className="homeButtonGroup">
                                <Link to='/category/1'><Button className="homeButtonItem" variant="light">Smileys</Button></Link>
                                <Link to='/category/2'><Button className="homeButtonItem" variant="light">Animals</Button></Link>
                                <Link to='/category/3'><Button className="homeButtonItem" variant="light">Foods</Button></Link>
                                <Link to='/category/7'><Button className="homeButtonItem" variant="light">Symbols</Button></Link>
                            </div>
                </Col>
                <Col xs lg="1">
                
                </Col>
            </Row>
          { searchTerm !=0 && (
            <div className="homeSearchResult"> 
            <ul>
            {emojibook.filter((val)=>{
                if(searchTerm==""){
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())||val.emoji.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val
                }
              }).map((val,key)=>{
                return (
                   <li key={key} className="homeSearchResultItem"> 
                       <Link className="link" to={`/detail/${val.id}`}>
                          {val.emoji} {' '} { val.name}
                        </Link>
                   </li>
                  
                  )
                })}
                </ul>
                </div>
          )}
      </Container>
      </div>

      
   </div>
  )
}
