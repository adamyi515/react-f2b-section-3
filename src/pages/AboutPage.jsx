import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Card from '../components/shared/Card';

const AboutPage = () => {
    return(
        <Card>
            <h1>About this project</h1>
            <p>
                This is a React App to leave feedback for a product and service.
            </p>
            <p>
                <Link to='/'>Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage;