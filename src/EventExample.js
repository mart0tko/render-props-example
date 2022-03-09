const eventHandler = (v) => {
    return (e) => console.log(e.target.value, v);
}

function EventExample() {
    return (<input onChange={eventHandler('test')}></input>);
}

export default EventExample;