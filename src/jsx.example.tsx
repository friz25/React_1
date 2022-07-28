//Example of a App.tsx
import React, {createElement as e, useState} from 'react';

function App() {
    // v1
    // return e('div', {className: 'container'}, [
    //     e('h1', {className: 'font-bold', key: 1}, 'Test JSX'),
    //     e('button', {
    //         className: 'py-2 px-4 border',
    //         key: 2,
    //         onClick: () => console.log('Clicked!')
    //         }, 'Click me!')
    // ])
    const [count, setCount] = useState(0)
    return e('div', {className: 'container'}, [
        e('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            onClick: () => setCount(count + 1)
        }, 'Click me!')
    ])
}

export default App;
