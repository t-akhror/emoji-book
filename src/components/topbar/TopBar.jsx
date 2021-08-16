import './topBar.css';
import {Container,
    Navbar,
    Row,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import emojibook from '../../emojibook';
import brand from '../../image/brand-new.png'

export default function TopBar() {
  const [searchItem, setSearchItem]=useState("")
  return (
    <div className='topbar'> 
    
    <Navbar>
        <Container>
            
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
            <Navbar.Brand className="navbarBrandName" href="/"> <span className="homeBrandImage"> 
                  <img src={brand} width="70"
                         height="70" alt="" /> </span> EmojiBook </Navbar.Brand>
            <Form className="d-block">
          
            <FormControl
                type="search"
                onChange={(event)=>{setSearchItem(event.target.value)}}
                placeholder="Search"
                className="mr-2 navbarSearch"
                aria-label="Search"
            />
            { searchItem !=0 &&(
            <div className="topbarSearchResult">
            {emojibook.filter((val)=>{
                              if(searchItem==0){
                                
                              } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())||val.emoji.toLowerCase().includes(searchItem.toLowerCase())) {
                                return val
                              } 
                            }).map((val,key)=>{
                              return (
                                 <p key={key} > 
                                     <Link className="link" to={`/detail/${val.id}`}>
                                        {val.emoji} {' '} { val.name}
                                      </Link>
                                 </p>
                                
                                )
                              }).slice(0,15)}
            </div>
            )}
             </Form>
            </Navbar.Collapse>
            
        </Container>
    </Navbar>
    </div>
  )
}
