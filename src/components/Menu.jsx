import React from 'react'

const Menu = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 99
        }}>
            <a href="https://www.figma.com/file/ZzMYRkXSqTeQx96X3zy2jg/Web-Covid-19-Indonesia?node-id=0%3A1"
                style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '1.5rem', display: 'flex', alignItems: "center" }}>
                    <img src="./images/figma.png" alt="logo" width="40px" style={{ marginRight: '1rem' }} />
                    Design Figma
                </div>
            </a>

            <a href="https://github.com/tiedsandi/covid19-id"
                style={{ textDecoration: 'none', color: 'white', fontSize: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ fontSize: '1.5rem', display: 'flex', alignItems: "center" }}>
                    <img src="./images/github.png" alt="logo" width="60px" style={{ marginRight: '1rem' }} />
                    Repository Github
                </div>
            </a>

        </div >
    )
}

export default Menu
