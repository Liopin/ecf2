import React from 'react';

class LinkButton extends React.Component{
    render(){
        return(
            <div className="container">
                <a href="ec2-35-181-151-223.eu-west-3.compute.amazonaws.com" target="_blanck" className="btn btn-primary">Lien vers la boutique</a>     
            </div>
        );
    }
}

export default LinkButton;