import React from 'react';
import './open-entry.scss';

const OpenEntry = ({ entry, closeModal }) => {
    return (<>
        <div className="glass"></div>
        <div className="entry-wrapper">
            <div className="entry-canvas" style={{ backgroundImage: `url(${require(`../../../static/img/${entry.name}.jpg`)})`}}>
            </div>
            <div className="entry-description">
                <h2>
                    {entry.title}
                </h2>
                <a href="javascript:void(0);" className="close-modal btn" onClick={closeModal}>
                    <img width="20px" height="20px" src={require('./close.svg')} alt="Close image modal"/>
                </a>
            </div>
        </div>
    </>);
}

export default OpenEntry;