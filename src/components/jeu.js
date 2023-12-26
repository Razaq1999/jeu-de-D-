import React from "react";
import "./App.css"
export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }

  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    this.setState((prevState) => ({
      face: valeur,
      compteur: prevState.compteur + 1,
      fin: valeur === 6,
    }));
  }
  getImage(face) {
    if (face !== null) {
      return `images/face${face}.png`;
    } else {
      
      return 'images/Dé.png';
    }
  }
  
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }

  render() {
    const { face, compteur } = this.state;
    const styleImage = {
      width: "100px",
      height: "100px",
      border: "2px solid black",
      borderRadius: "10px", 
    };
    const styleImage1 = {
      width: "300px",
      height: "300px",
      //border: "2px solid black",
      borderRadius: "10px", 
    };
    const div ={
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }
    const b = {
      width : "80px",
      height : "40px",
      borderRadius : "8px"
    }

    return (
      <div style={div}>
        <img   src="images/jeuDé.png" alt="Dé" style={styleImage1} 
        />
        <h1>Jeu de Dé...</h1>
        <h2>Face: {face !== null ? face : "..."}</h2>
        <img src={this.getImage(face)} style={styleImage} alt="Dé" />
        <h2>Nombre d'essais: {compteur}</h2>
        <button style={b} onClick={() => this.jouer()}>Jouer</button>
        {face == this.props.cache && <p>Bravo, vous avez trouvé la face cachée!</p>}
        <button style={b} onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}
