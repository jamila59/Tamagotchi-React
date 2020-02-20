import React from 'react';


class NewTamagotchiControl extends React.Componenet{
    constructor(props){
        super(props);
        this.state = {
            formVisibleOnPage = false,
        }
        this.handleTroubleShootingConfirmation = this.handleTroubleShootingConfirmation.bind(this);
    }
    
    handleTroubleShootingConfirmation(){
        this.state({formVisibleOnPage: true})
    }

    render(){
        let currentlyVisibleContent = null;

        if (this.state.formVisibleOnPage){
            currentlyVisibleContent = <NewTamagotchiForm onNewTamagotchiCreation={this.props.onNewTamagotchiCreation}/>;  
            //we are pulling the only the form bundle here wheen we select 
        }
        return(
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

<button onClick={this.handleTroubleShootingConfirmation}>Make new tama</button>



NewTamagotchiControl.propTypes = {
    onNewTamagotchiCreation: propTypes.func
};


//we are using onNewTamagotchiCreation 

export default NewTamagotchiControl;

// onNewTamagotchiCreation: is what bundles up the form input


// in confirmation questions we used to have onTroubleshootingConfirmation attached to our button to flip from "false" to "true"
// with no else statment we are not given anything to change state