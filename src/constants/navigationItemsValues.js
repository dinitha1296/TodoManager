import todoIconXmlString from '../../assets/list-ul-solid';
import doneIconXmlString from '../../assets/clipboard-check-solid';
import logoutIconXmlString from '../../assets/sign-out-alt-solid';

const navigationItemValues = {
    TODO: {
        key: '1',
        title: 'Todo',
        onPress: () => {},
        toString: () => 'TODO',
        svgXmlString: todoIconXmlString,
    },
    DONE: {
        key: '2',
        title: 'Done',
        onPress: () => {},
        toString: () => 'DONE',
        svgXmlString: doneIconXmlString,
    },
    LOGOUT: {
        key: '3',
        title: 'Logout',
        onPress: () => {},
        toString: () => 'LOGOUT',
        svgXmlString: logoutIconXmlString,
    },
};

export default navigationItemValues;
