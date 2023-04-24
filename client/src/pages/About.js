import React from 'react';

function About() {

    return (
        <div className='about'>
            <div className='mission'>
                <h2>Our Mission</h2>
                <p>Our mission at Bexar Market is to create an open space for small businesses to share their passion with the world. We wanted to showcase the amazing talent that can be found here in the heart of Bexar County, and allow those who cannot physically explore to see the collections that Bexar artists can offer. Please feel free to browse and even create your own account to add favorites and discover your new favorite creators.</p>
            </div>
            <div className='contributors'>
                <h2>Contributors</h2>
                <ul>
                    <li className='portfolio-card'>
                        <a
                            href="https://chloeeh.github.io/hanks-react-portfolio/"
                        >
                            <p>Chloe Hanks</p>
                        </a>
                    </li>
                    <li className='portfolio-card'>
                        <a
                            href="https://jessicashong.github.io/react-portfolio/"
                        >
                            <p>Jessica Hong</p>
                        </a>
                    </li>
                    <li className='portfolio-card'>
                        <a
                            href="https://ldudrey.github.io/portfolio-v2/"
                        >
                            <p>Lydia Dudrey</p>
                        </a>
                    </li>
                    <li className='portfolio-card'>
                        <a
                            href="https://mdinkelbach.github.io/portfolio-resume/"
                        >
                            <p>Michael Dinkelbach</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;