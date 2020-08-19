import React from 'react'
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
export default function NavSearch() {
    return (
        <div>
            <Navbar bg="dark" className="text-light" expand="lg">
                <Navbar.Brand className="text-light" href="#home">Movie Finder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
