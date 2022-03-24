import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext.js'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import axios from "axios"


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nickname = useRef()
    const { signup, currentUser, getAllUsers } = useAuth()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate()


    if (currentUser) {
        return <Navigate to='/' />
    }



    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setLoading(true)
            setError('')
            await signup(emailRef.current.value, passwordRef.current.value)

        } catch {
            setError('Failed to create an account')
        }

        setLoading(false)

        try {
            await axios.post('http://localhost:3001/users/createUser', {
                fbID: currentUser.uid,
                nickname: JSON.stringify(nickname.current.value)
            })
        } catch (error) {
            alert(error)
        }

    }
    return (
        <>
            <Card border='dark' bg='light' style={{ marginTop: '50px' }}>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form.Group id="name">
                            <Form.Label>Ник</Form.Label>
                            <Form.Control type='name' required ref={nickname} />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' required ref={emailRef} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control type='password' required ref={passwordRef} />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Повтор Пароля</Form.Label>
                            <Form.Control type='password' required ref={passwordConfirmRef} />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit" style={{ marginTop: '30px', marginBottom: '10px' }}>Sign Up</Button>
                    </Form>
                </Card.Body>

            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </>
    )
}
