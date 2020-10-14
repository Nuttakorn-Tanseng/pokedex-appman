import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { BsSearch } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ProgressBar from 'react-bootstrap/ProgressBar'




export default function DataFetching() {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState()

    useEffect(() => {
        axios
            .get('http://localhost:3030/api/cards')
            .then(res => {
                // console.log(res)
                setPosts(res.data.cards)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <Container >

  
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Find pokemon"
                />
                <InputGroup.Append>
                    <Button variant="outline"><BsSearch color='#ec5656'  /></Button>
                    {/* <img src="search.png" class="" alt=""/> */}
                </InputGroup.Append>
            </InputGroup> 


            {posts.map(post => (
                <Card key={post.id} className="cardbackground">
                    <Row className="justify-content-md-center">
                        <Col xl={3} className="photo ">
                            <img width={200} src={post.imageUrl} className="" alt="" />
                        </Col>
                        <Col className="detail ">
                            <h3>{post.name}</h3>
                            <h7>HP
                                <ProgressBar variant="warning" now={post.hp} />
                            </h7>
                            <h7>STR
                                {/* <ProgressBar variant="warning" now={post.attacks.length*50} /> */}
                                <ProgressBar variant="warning" now={parseInt("1+")*50} />

                            </h7>
                            <h7>WEAK
                                {/* <ProgressBar variant="warning" now={post.weaknesses.length*50} /> */}
                                <ProgressBar variant="warning" now={parseInt("2+")*50} />
                            </h7>
                            <h7>Happiness
                                {/* <ProgressBar variant="warning" now={((post.hp / 10) + ((post.attacks.length*50)/10 ) + 10 - (post.weaknesses.length*100))/5 } /> */}
                            </h7>

                        </Col>
                        <Col xl={2}>
                            <Button className="addbutton " variant="link">ADD</Button>
                        </Col>
                    </Row>
                </Card>

            ))}

        </Container>
    )
}

