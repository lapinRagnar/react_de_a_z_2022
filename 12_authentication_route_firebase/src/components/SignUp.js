import React, { useRef } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function SignUp() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  return (
    <>

        <Card className='mon-card-container'>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
            </Card.Body>

            <Form>

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

                <Button className='w-100 mt-4' type='submit'>Sign Up</Button>

            </Form>
        </Card>
        <div className="w-100 text-center mt-2">
            avez-vous un compte? Log In
        </div>
    </>
  )
}
