import  saturnImage from "./assets/saturn-image.jpg"

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={saturnImage} alt="photo of saturn"></img>
            <h2 className="card-title">Saturno</h2>
            <p className="card-text">É um planeta do sistema solar do tipo gigante gasoso.</p>
        </div>
    );
}

export default Card