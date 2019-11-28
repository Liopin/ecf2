import React from 'react';
import axios from 'axios';
import { reverse } from 'dns';


class RegisterForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            "name":"",
            "lastname":"",
            "mail":"",
            "reason":"",
        }
    }

    nameChanged(e){
        this.setState({name: e.target.value})
    }
    lastnameChanged(e){
        this.setState({lastname: e.target.value})
    }
    mailChanged(e){
        this.setState({mail: e.target.value})
    }
    reasonChanged(e){
        this.setState({reason: e.target.value})
    }


    handleSubmit(e){
     e.preventDefault()
     axios.post('http://localhost:5000/api/subscribers/register', {
         name: this.state.name,
         lastname: this.state.lastname,
         mail: this.state.birth,
         reason: this.state.passion
        }).then(() => {
             this.props.update()
         }).catch((error) => console.log(error))
     
    }

    render(){
        return(
            <div className="container">
                <form>
                    <h1>Formulaire d'inscription</h1>
                    <div className="form-group">
                        <label>Votre prénom :</label>
                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Prénom" onChange={(e) => this.nameChanged(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Votre nom :</label>
                        <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom" onChange={(e) => this.lastnameChanged(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Votre adresse mail :</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e) => this.mailChanged(e)}/>
                    </div>
                    <div className="form-group">
                        <label>Raisons pourquoi voulez vous suivre cet formation ?</label>
                        <input className="form-control" id="exampleInputPassword1" placeholder="Pourquoi ?" onChange={(e) => this.reasonChanged(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;