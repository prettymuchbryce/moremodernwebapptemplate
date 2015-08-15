import React from 'react';
import GlobeIcon from '../../img/globe.png';

class ComponentMain extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="hello-world">
                Hello World<br/>
                <img className="globe-image" src={GlobeIcon} />
            </div>
        );
    }
}

export default ComponentMain;
