import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';


const MainLayout = (props) => {
    return (
        <Container className={'app_container mb-5'}>
            {props.children}
            <ToastContainer />
        </Container>
    )
}

export default MainLayout;