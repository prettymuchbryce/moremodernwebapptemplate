import React from 'react';
import GlobeIcon from '../../img/globe.png';
import { testAction } from '../actions/test';
import { connect } from 'react-redux';
import { getStuff } from '../api';

class ComponentMain extends React.Component {

    constructor(props) {
        super(props);
    }

    doClick = () => {
        this.props.dispatch(testAction("foo"));
    }

    componentWillMount() {
        getStuff()
        .then(res => {
            const body = res.body;
            // console.log('res', body);
        }).fail(err => {
            // console.log('err', err);
        })
        // console.log(this.props.foo)
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
            foo: state.main.foo
        }
    }
)(ComponentMain)
