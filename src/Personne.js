import React, { Component } from 'react';
import './personne.css'
class Personne extends Component {
    render(){
         return (
            <div class="box"  >
                <img alt={this.props.nom + ' ' + this.props.prenom  }  src={this.props.photo} width="150" height="150" />
                <div>
                    <h4>Nom : {this.props.nom}</h4>
                    <h4>Prénom : {this.props.prenom}</h4>
                    <h4>Age : {this.props.age}</h4>
                    <h4>Profession : {this.props.profession}</h4>
                </div>
            </div>
        );
    }
   
}



export default Personne;