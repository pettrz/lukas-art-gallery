import React from 'react';
import _ from 'lodash';
import { gallery } from '../data/gallery';
import { Helmet } from 'react-helmet';
import './__index.scss';

class IndexPage extends React.Component {

    getScrollOffset() {
        const about = document.querySelector('.about');
        const scrollUp = document.querySelector('.scroll-up-shortcut');
        const scrolly = window.scrollY - 300;
        about.style.opacity = (scrolly / 750).toString();

        if (window.scrollY < 800) {
            scrollUp.style.opacity = 0;
        } else {
            scrollUp.style.opacity = 1;
        }
    };

    scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.getScrollOffset);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.getScrollOffset);
    }

    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Lukas Juhlén</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Helmet>
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
            <div className="container">
                <main>
                    <article className="about">
                        <h2>Works</h2>
                        {/* <p>insert description</p> */}
                    </article>
                    <div className="gallery">
                        {gallery.map(({ _id, name}) => (
                            <div className="gallery-entry" key={_id} 
                            style={{ backgroundImage: `url(${require(`../../static/img/${name}.jpg`)})`}}>
                            </div>
                        ))}
                    </div>
                </main>
                <div className="bottom">
                    
                </div>
                <footer>
                    &copy; 2020 Lukas Juhlén
                    
                    <a href="javascript:void(0);" onClick={this.scrollToTop}
                    title="Scroll to top" className="scroll-up-shortcut">
                        <img width="20px" height="20px" src={require('../../static/img/scroll-up-icon.svg')} alt="scroll to top of page"/>
                    </a>
                </footer>
            </div>
        </>
        )
    }
};

export default IndexPage;
