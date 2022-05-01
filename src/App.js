import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height='100vh'
            projectID='1bd3848c-68f8-4530-b0bd-8b2d9138ed3d'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')} /* Password of User*/
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        />
    );
};

export default App;