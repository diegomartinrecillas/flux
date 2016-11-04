import Store from 'app/libs/Store';
import TestActions from 'app/actions/TestActions';

// Set DEBUG=true to log every step in the console
const DEBUG = true;

class TestSore extends Store {
    constructor() {
        super('TEST_STORE', DEBUG);

        this.state = {
            firstName: 'Diego',
            lastName: 'Martin',
            arr: ['x ']
        }

        this.addActionListener(TestActions.testAction1, this.onSetNewData);
        this.addActionListener(TestActions.testAction2, this.onResetData);
        this.addActionListener(TestActions.testAction3, this.onAddArrElement);
    }

    onSetNewData = (data) => {
        this.setState({
            firstName: data.firstName,
            lastName: data.lastName
        })
    }

    onResetData = () => {
        this.setState({
            firstName: 'Diego'
        })
    }

    onAddArrElement = () => {
        this.state.arr.push('x ');
        this.update();
    }
}

let TestStore = new TestSore();
export default TestStore;
