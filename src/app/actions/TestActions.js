import Action from 'app/libs/Action';

// Set DEBUG=true to log every step in the console.
const DEBUG = true;

class AsyncAction extends Action {
    // Overriding the default dispatch method.
    dispatch(data) {
        // For example:
        // If we move all the async functionality to the Actions we can turn the Stores completely synchronus.
        setTimeout(() => {
            // Emmit a dispatch event manually when we need it.
            this.emmitDispatch(data);
        }, 1000);
    }
}

// Single export Actions.
export const TestAction1 = new Action('TEST_ACTION_1', DEBUG);
export const TestAction2 = new Action('TEST_ACTION_2', DEBUG);
export const TestAction3 = new AsyncAction('TEST_ACTION_3', DEBUG);

// Default export Actions object.
const TestActions = {};
TestActions.testAction1 = TestAction1;
TestActions.testAction2 = TestAction2;
TestActions.testAction3 = TestAction3;

export default TestActions;
