import React from 'react';

class LifeCycleExample extends React.Component {
    constructor(props) {
        console.log('constructor');
        super(props);

        this.state = {
            counter: 0
        }
    }

    update() {
        this.setState({counter: this.state.counter + 1})
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');

        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null 
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log('-----------');
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    render() { 
        console.log('Render');
        return ( 
            <>
            <h6>Lifecycle Example</h6>
            <p>-------------------------------------------------------------</p>
            <button onClick={this.update.bind(this)}>Update State</button>
            <p>{this.state.counter}</p>
            </>
         );
    }

    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log('-----------');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        console.log('-----------');
    }
}
 
export default LifeCycleExample;