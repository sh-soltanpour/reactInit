import React, { Component, PropTypes } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

/** The app entry point */
class ReactNativeWebHelloWorld extends Component {
    render() {
        // injected by connect call
        const { dispatch, color, data } = this.props;

        return (
            <View>
                <Text>Hello</Text>
            </View>
        );
    }
}

ReactNativeWebHelloWorld.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(ReactNativeWebHelloWorld);
