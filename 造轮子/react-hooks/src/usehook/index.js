import React, { useState, useEffect } from 'react'

export default function Index() {
    console.log("ASdsa")
    return (
        <div>
            {useNum().num}
        </div>
    )
}

function useNum() {
    const [state, setState] = useState({ num: 0 });
    useEffect(() => {
        console.log("date effect");
        let timer = setInterval(() => {
            setState({ num: state.num + 1 });
        }, 1000)
        return () => clearInterval(timer)
    }, [state])
    return state;
}