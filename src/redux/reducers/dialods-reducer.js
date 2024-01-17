const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialeState = {
  messages: [
    { id: '1', message: 'Hi Dima' },
    { id: '2', message: 'How are you Andrey' },
    { id: '3', message: 'Hello Sveta' },
    { id: '4', message: 'Hello Sasha' },
    { id: '5', message: 'Hello Valera' },
    { id: '6', message: 'Hello Viktor' }
  ],

  newMessageBody: '',

  dialogs: [
    { id: '1', name: 'Dima' },
    { id: '2', name: 'Andrey' },
    { id: '3', name: 'Sveta' },
    { id: '4', name: 'Sasha' },
    { id: '5', name: 'Valera' },
    { id: '6', name: 'Viktor' }
  ],
};

const dialogsReducer = (state = initialeState, action) => {
  const stateCopy = {...state};
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMessageBody = action.body;
      return stateCopy;

    case ADD_MESSAGE:
      let newMessage = {
        id: '7',
        message: state.newMessageBody
      };
      if (state.newMessageBody === null || state.newMessageBody == "") {
        alert("Please enter > the username. Can’t be blank or empty !!!");
      } else {
        stateCopy.messages = [...state.messages];
        stateCopy.messages.push(newMessage);
      }
      stateCopy.newMessageBody = '';
      return stateCopy;

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: text }
};

export default dialogsReducer;
