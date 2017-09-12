import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}

ReactNativeWebHelloWorld.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
