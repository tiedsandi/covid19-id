import React from 'react'
import lottie from 'lottie-web'

const MenuBar = () => {
    const container = React.useRef(null)

    React.useEffect(() => {
        const instance = lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/21-avatar-flat-edited.json')
        })

        // Return clean up function here
        return () => instance.destroy();
    }, [])

    return (
        <div >
            <div ref={container} style={{ width: '50px', top: '0', right: '0', margin: '20px', position: 'absolute', zIndex: '100' }} />
        </div >
    )
}

export default MenuBar
