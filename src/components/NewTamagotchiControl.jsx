import React from 'react';


class NewTamagotchi extends React.Componenet{
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
            currentlyVisibleContent = <NewTamagotchiForm />;
        }
        return(
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}