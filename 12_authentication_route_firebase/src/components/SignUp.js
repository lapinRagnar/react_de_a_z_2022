import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e) {

      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value ) {
          
          setError('')
          setLoading(true)
          return setError('password do not match!')
      }

      try {

        await signup(emailRef.current.value, passwordRef.current.value)

      } catch (error) {
          setError('failed to create an account! ')
      }

      setLoading(false)
  }

  return (
    <>
        <div>salut</div>
        <Card className='mon-card-container'>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
            

                {error && <Alert variant="danger"> {error} </Alert> }

                <Form onSubmit={handleSubmit}>

                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' ref={emailRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type='password' ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>

                    <Button className='w-100 mt-4' type='submit' disabled={loading}>Sign Up</Button>

                </Form>

            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            avez-vous un compte? Log In
        </div>
    </>
  )
}
