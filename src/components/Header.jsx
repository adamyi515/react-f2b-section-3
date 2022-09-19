import React from 'react';

const Header = ({ bgColor, textColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor 
    }

    return(
        <header style={headerStyles}>
            <div className='container'>
                <h1>Feedback UI</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}



export default Header;