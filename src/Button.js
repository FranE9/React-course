import PropTypes from 'prop-types'

export function Button ({text, name = ''}){
    console.log("Prueba")
    return <button onClick={function ( ) {}}>
        console.log("Prueba")
        {text} - {name}
    </button>

}

Button.prototypes = {
    text: PropTypes.string.isRequired
}