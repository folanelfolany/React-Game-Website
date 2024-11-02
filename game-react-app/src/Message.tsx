const name = "Nadder"


function Message () {
    //Render Style whenever function is rendered
    // Brackets to reference variable
    if (name === "Nadder"){
        return <h1>Hello {name}</h1>
    }
    return <h1>Hello Anonymous</h1>

}

//To use component, we need to export it as a default component

export default Message;