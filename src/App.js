import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'
import './App.css'

const projectID = '9afe3c83-996d-4c10-a67a-fe7cf4ce5084'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
        ).play()
      }
    />
  )
}

// infinite scroll, logout, more customizations...

export default App
