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


  // <div className="hello-world">
  //               Hello World<br/>
  //               <img className="globe-image" onClick={this.doClick} src={GlobeIcon} />
  //           </div>
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                  <div className="col-md-1">.col-md-1</div>
                </div>
                <div className="row">
                  <div className="col-md-8">.col-md-8</div>
                  <div className="col-md-4">.col-md-4</div>
                </div>
                <div className="row">
                  <div className="col-md-4">.col-md-4</div>
                  <div className="col-md-4">.col-md-4</div>
                  <div className="col-md-4">.col-md-4</div>
                </div>
                <div className="row">
                  <div className="col-md-6">.col-md-6</div>
                  <div className="col-md-6">.col-md-6</div>
                </div>
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
