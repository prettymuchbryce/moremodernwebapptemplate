import React from 'react';
import GlobeIcon from '../../img/globe.png';
import { testAction } from '../actions/test';
import { connect } from 'react-redux';

class ComponentMain extends React.Component {

    constructor(props) {
        super(props);
    }

    doClick = () => {
        this.props.dispatch(testAction("foo"));
    }

    render() {
        return (
            <div className="hello-world">
                Hello World<br/>
                <img className="globe-image" onClick={this.doClick} src={GlobeIcon} />
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {

        }
    }
)(ComponentMain)
