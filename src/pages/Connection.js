import React from "react";
import '../assets/style/Connection.css';


class Connection extends React.Component {
    render() {
        return (
            <>
               
                    <div className="login-box">
                        <p>Login</p>
                        <form>
                            <div className="user-box">
                                <input required="" name="" type="text" />
                                <label>Utilisateur</label>
                            </div>
                            <div className="user-box">
                                <input required="" name="" type="password" />
                                <label>Mot de passe</label>
                            </div>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Envoyer
                            </a>
                        </form>
                        <p>Mot de passe oublie <a href="" className="a2">Recupérer </a></p>
                    </div>
                    
            </>
        )
    }
}
export default Connection;