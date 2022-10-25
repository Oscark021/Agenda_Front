import React from 'react'
import ReactDOM from 'react-dom'

function App (){
    const nombre = 'oscar'
    return(
        <div>
            Hola {nombre}
        </div>
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))