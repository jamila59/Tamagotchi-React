import React from 'react';
import PropTypes from 'prop-types';

function NewTamagotchiForm(props){
    let _name = null;
}


function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    props.onNewTamagotchiCreation({Name: _name.value});
    return(
        <div>
            <form onSubmit="handleNewTamagotchiFormSubmission">
            <input
                type = "text"
                id = "name"
                placeholder= "Name"
                ref={(input) => {_name = input;}}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

 NewTamagotchiForm.PropTypes = {
     onNewTamagotchiCreation: PropTypes.func
 };
 
 export default NewTamagotchiForm;