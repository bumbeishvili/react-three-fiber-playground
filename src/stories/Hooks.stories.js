import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber'
export default { title: 'Hooks' };



//================== State hook =======================
function CounterWithStateHook() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}> Click me </button>
        </div>
    )
}

export const counterWithStateHook = ({ }) => {
    return (<CounterWithStateHook></CounterWithStateHook>)
};

//=================== Effect Hook ========================
function CounterWithEffectHook() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`You clicked ${count} times`)
        window.document.title = `You clicked ${count} times`
    });
    return (
        <div>
            <p>You clicked {count} times (Check console to verify effect hook)</p>
            <button onClick={() => setCount(count + 1)}> Click me </button>
        </div>
    )
}

export const counterWithEffectHook = ({ }) => {
    return (<CounterWithEffectHook></CounterWithEffectHook>)
};





//=================== Custom Hook ========================

class ChatApiInstance {
    subscribe(id, callback) {
        this.interval = setInterval(() => {
            const probability = Math.random() > 0.5;
            callback(probability)
        }, 1000)
    }
    unsubscribe(id, callback) {
        clearInterval(this.interval);
        callback(Math.random() > 0.5)
    }
}

const ChatApi2 = new ChatApiInstance();
const ChatApi1 = new ChatApiInstance();

function useFriendStatus(friendId, ChatApi) {
    const [isOnline, setIsOnline] = useState(null);

    function handleStatusChange(status) {
        setIsOnline(status);
    }
    useEffect(() => {
        ChatApi.subscribe(friendId, handleStatusChange);
        return () => {
            ChatApi.unsubscribe(friendId, handleStatusChange)
        }
    })
    return isOnline
}

function FriendStatus(props) {
    const friendId = 'test'
    const isOnline = useFriendStatus(friendId, ChatApi1);

    let text = 'Loading';
    if (isOnline != null) {
        text = isOnline ? 'Online' : 'Offline'
    }
    return (
        <div>
            {text}
        </div>
    )
}

function FriendListItem(props) {
    const isOnline = useFriendStatus('test', ChatApi2);
    return (
        <li style={{ color: isOnline ? 'green' : 'red' }}>
            Friend Name {isOnline ? '1' : -1}
        </li>
    );
}



export const customHookSubscriptionSample = ({ }) => {
    return (<div>
        Implemented ChatApi is wrong, but it still shows the concept
        <FriendStatus></FriendStatus>
        <FriendListItem></FriendListItem>
    </div >)
};