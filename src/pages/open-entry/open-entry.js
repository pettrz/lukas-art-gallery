import React from 'react';
import _ from 'lodash';
import './open-entry.scss';

const OpenEntry = ({ entry, closeModal }) => {
    const name = _.get(entry, 'name', null);
    return (<>
        <div className="glass"></div>
        <div className="entry-wrapper">
            <div className="entry-canvas" style={{ backgroundImage: name ? `url(${require(`../../../static/img/${name}.jpg`)})` : ''}}>
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