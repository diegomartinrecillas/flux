import Store from 'app/libs/Store';
import TestActions from 'app/actions/TestActions';

// Set DEBUG=true to log all events to the console
const DEBUG = true;

class TestSore extends Store {
    constructor() {
        super('TEST_STORE', DEBUG);

        this.state = {
            firstName: 'Diego',
            lastName: 'Martin',
            arr: [0]
        }

        this.listenTo(TestActions.testAction1, this.onSetNewData);
        this.listenTo(TestActions.testAction2, this.onResetData);
        this.listenTo(TestActions.testAction3, this.onAddArrElement);

    }

    onSetNewData = (data) => {
        this.setState({
            firstName: data.firstName,
            lastName: data.lastName
        })
    }

    onResetData = () => {
        this.setState({
            firstName: 'Diego',
            lastName: 'Martin'
        })
    }

    onAddArrElement = () => {
        let arr = this.state.arr;
        arr.push(arr[arr.length - 1] + 1);
        this.setState({
            arr: arr
        });
    }
}

let TestStore = new TestSore();
export default TestStore;
