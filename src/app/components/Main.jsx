import React from 'react';
import TestStore from 'app/stores/TestStore';
import { TestAction1, TestAction2, TestAction3 } from 'app/actions/TestActions';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '...loading',
            lastName: '...loading',
            arr: null
        }
    }
    componentDidMount() {
        TestStore.subscribe(this._onUpdate);
        setTimeout(() => {
            TestStore.update();
        }, 1000);
    }
    componentWillUnmount() {
        TestStore.unsubscribe(this._onUpdate);
    }
    _onUpdate = () => {
        this.setState({
            firstName: TestStore.state.firstName,
            lastName: TestStore.state.lastName,
            arr: TestStore.state.arr
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                        let data = {
                            firstName: 'Hola',
                            lastName: 'Mundo'
                        }
                        TestAction1.dispatch(data);
                    }}>
                    Hola Mundo
                </button>
                <button onClick={() => {
                        TestAction2.dispatch();
                    }}>
                    Diego Martin
                </button>
                <button onClick={() => {
                        TestAction3.dispatch();
                    }}>
                    Push
                </button>
                <br/>
                {this.state.firstName}
                <br/>
                {this.state.lastName}
                <br/>
                {this.state.arr}
            </div>
        )
    }
}
