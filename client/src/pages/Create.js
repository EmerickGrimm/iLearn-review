import React, { useRef, useState } from 'react'
import { Card, Form, Button, Select } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from "axios"



function Create() {

    const nicknameRef = useRef();
    const reviewRef = useRef()
    const categoryRef = useRef()
    const subjectRef = useRef();
    const [rating, setrating] = useState(0);
    const [rcategory, setrcategory] = useState("Фильм");

    async function handleSubmit(e) {
        e.preventDefault();

        if(reviewRef.current.value && categoryRef.current.value && subjectRef.current.value != null){
            switch (categoryRef.current.value) {
                case "1":
                    setrcategory("Фильм")
                    break;
    
                case "2":
                    setrcategory("Книга")
                    break;
    
                case "3":
                    setrcategory("Игра")
                    break;
            }
    
            try {
                await axios.post("http://localhost:3001/reviews", {
                    "author": JSON.stringify(nicknameRef.current.value),
                    "subject": JSON.stringify(subjectRef.current.value),
                    "review": JSON.stringify(reviewRef.current.value),
                    "category": JSON.stringify(rcategory),
                    "rating": rating
                })
            } catch (error) {
                alert(error)
            }
            alert("Теперь все знают твое мнение.")
        }else{
            alert("Ты не заполнил все поля.")
        }
    }

    return (
        <div>
            <Card border='dark' bg='light' style={{ marginTop: '50px', width: '90rem' }}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label><b> Как тебя зовут?</b></Form.Label>
                        <Form.Control style={{ marginLeft: '200px', marginBottom: '20px', width: '1000px' }} type='text' placeholder='Mr.Anon' ref={nicknameRef} />
                        <Form.Label><b> О чем расскажешь?</b></Form.Label>
                        <Form.Control style={{ marginLeft: '200px', marginBottom: '20px', width: '1000px' }} type='text' placeholder='о Star Wars' ref={subjectRef} />
                        <Form.Label><b>Это...</b></Form.Label>
                        <Form.Select style={{ marginLeft: '200px', marginBottom: '20px', width: '1000px' }} ref={categoryRef}>
                            <option value="1">Фильм</option>
                            <option value="2">Книга</option>
                            <option value="3">Игра</option>
                        </Form.Select>
                        <Form.Label><b>Что ты думаешь?</b></Form.Label>
                        <Form.Control as="textarea" rows={5} style={{ marginLeft: '200px', marginBottom: '20px', width: '1000px' }} ref={reviewRef} />
                        <Typography component="legend"><b>Какую оценку дашь?</b></Typography>
                        <Rating size="large" value={rating} onChange={(event, newValue) => {
                            setrating(newValue);
                        }}
                        />
                        <br></br>
                        <Button variant="primary" size="lg" style={{ marginBottom: '20px', marginTop: '20px' }} type="submit"> Рассказать всем </Button>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default Create