import React , {Component} from 'react';
import api from './Api';
import Personne from './Personne';
import './personne.css'
class ListePersonne extends Component {

    constructor(){
        super()
        this.state = {
            Personnes: api
        };
    }

    afficher(Personnes)
    {
        const liste = Personnes.map(Personnes =>
            <Personne                
                key={Personnes.id}
                id={Personnes.id}
                nom={Personnes.nom}
                prenom={Personnes.prenom}
                age={Personnes.age}
                profession={Personnes.profession}  
                photo={Personnes.photo}  
            />);

            return liste;
    }



    render(){
        return(
            <div class='container'>
                { this.afficher(this.state.Personnes) }                 
            </div>
        );
    }
}

export default ListePersonne;