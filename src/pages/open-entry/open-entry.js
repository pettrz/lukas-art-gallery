import React, { useEffect, useCallback } from 'react';
import _ from 'lodash';
import './open-entry.scss';

const OpenEntry = ({ entry, closeModal }) => {
    const name = _.get(entry, 'name', null);
    const title = _.get(entry, 'title', '');
    const description = _.get(entry, 'description', '');

    const closeModalEscape = useCallback(event => {
        if(event.keyCode === 27) {
          closeModal()
        }
    }, []);
    
    useEffect(() => {
        document.addEventListener("keydown", closeModalEscape, false);
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", closeModalEscape, false);
            document.documentElement.style.overflow = "auto";
        };
    }, []);

    return (<>
        <a href="javascript:void(0);" className="close-modal btn" title="Close view" onClick={closeModal}>
            <img width="20px" height="20px" src={require('./close.svg')} alt="Close image modal"/>
        </a>
        <div className="glass"></div>
        <div className="entry-wrapper">
            <div className="entry-canvas">
                <img src={require(`../../../static/img/${name}.jpg`)} title={title} alt={`Painting named "${title}"`}/>
            </div>
            <div className="entry-description">
                <h2>
                    {title}
                </h2>
                <div className="description">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </>);
}

export default OpenEntry;