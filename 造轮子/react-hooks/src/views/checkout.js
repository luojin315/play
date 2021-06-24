export default function checkout() {

    return (
        <button onClick={look}>click me!</button>
    )
}

function look() {
    const obj = require('./view').default();
    console.log(obj)
}
