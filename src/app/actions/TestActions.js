import Action from 'app/libs/Action';

// Set DEBUG=true to log every step in the console
const DEBUG = true;
// Default export object
const TestActions = {};

export const TestAction1 = new Action('TEST_ACTION_1', DEBUG);
export const TestAction2 = new Action('TEST_ACTION_2', DEBUG);
export const TestAction3 = new Action('TEST_ACTION_3', DEBUG);

TestActions.testAction1 = TestAction1;
TestActions.testAction2 = TestAction2;
TestActions.testAction3 = TestAction3;

export default TestActions;
