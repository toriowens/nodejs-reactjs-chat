import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => { 
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId='b650ed1b-2457-4b6b-bdd5-4adfde9ba16a'
                username={ props.user.username }
                secret={ props.user.secret }
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage