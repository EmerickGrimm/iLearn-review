import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext.js'


function Home() {
    const [listOfReviews, setListOfReviews] = useState([]);
    const { login, currentUser } = useAuth()

    useEffect(() => {
        axios.get("http://localhost:3001/reviews").then((response) => {
            setListOfReviews(response.data)
        })
    }, []);
    
    return (
        <div> {listOfReviews.map((value, key) => {
            return (
                <div>
                    <Card  border="dark" bg="light" style={{width: '80rem', marginBottom: '20px', marginTop: '20px'}}>
                        <Card.Body>
                            <Card.Title><i>{value.author}</i> оценил {value.category} {value.subject} на {value.rating}/5, со словами </Card.Title>
                            <Card.Text><i>{value.review}</i></Card.Text>
                        </Card.Body>
                    </Card>
                </div>)
        })} </div>
    )
}

export default Home