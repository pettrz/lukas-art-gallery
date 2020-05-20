import React, { useEffect, useCallback } from 'react';
import _ from 'lodash';
import { gallery } from '../data/gallery';
import './__index.scss';

class IndexPage extends React.Component {

    getScrollOffset() {
        var el = document.querySelector('.about');

        // get scroll position in px
        console.log(el.offsetTop, window.scrollY);
        const scrolly = window.scrollY - 300;
        console.log(scrolly/1000);

        el.style.opacity = (scrolly / 500).toString();
    };

    componentDidMount() {
        window.addEventListener('scroll', this.getScrollOffset);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.getScrollOffset);
    }

    render() {
        return (
            <div className="container">
                <header>
                    <nav className="navbar">Lukas Juhlén</nav>
                    <div className="hero">
                    </div>
                    <div className="canvas">
                        <div>
                            <div className="canvas-item box1"></div>  
                        </div>
                        <div className="column-wrapper">
                            <div className="row">
                                <div className="canvas-item box2"></div>
                                <div className="canvas-item box3"></div>
                                <div className="canvas-item box4"></div>
                            </div>
                            <div className="row">
                                <div className="canvas-item box5"></div>
                                <div className="canvas-item box6"></div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <article className="about">
                        <h2>About</h2>
                        <p><strong>Lukas Juhlén</strong> is simply dummy text of the printing and typesetting industry.<br/>
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </article>
                    <div className="gallery">
                        {gallery.map(({ _id, name}) => (
                            <div className="gallery-entry" key={_id} 
                            style={{ backgroundImage: `url(${require(`../../static/img/${name}.jpg`)})`}}>
                                {/* <img key={_id} height="400px" width="240px" src={require(`../../static/img/${name}.jpg`)} alt={name}/> */}
                            </div>
                        ))}
                    </div>
                </main>
                <footer>
                    &copy; 2020 Lukas Juhlén
                </footer>
            </div>
        )
    }
};

export default IndexPage;
