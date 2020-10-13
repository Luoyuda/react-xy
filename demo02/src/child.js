import React, { useState, useMemo } from 'react';

function ChildComponent({ name, children }){
    function changeName(name){
        console.log(`changeName - ${name}`)
        return `change-${name}`
    }

    const realName = useMemo(() => changeName(name), [name])
    return (
        <>
            <p>{realName}</p>
            <p>{children}</p>
        </>
    )
}

export default function Child(){
    const [ xy, setXy ] = useState('xy')
    const [ ly, setLy ] = useState('ly')
    return (
        <>
            <button onClick={() => setXy(new Date().getTime() + '-xy')}>xy</button>
            <button onClick={() => setLy(new Date().getTime() + '-ly')}>ly</button>
            <ChildComponent name={xy}>
                {ly}
            </ChildComponent>
        </>
    )
}