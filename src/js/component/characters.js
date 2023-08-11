import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = (props) => {
    const { store } = useContext(Context);
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };
    return (
        <div className="container">
            <div className="card mb-3" style="max-width: 540px;">
              <div className="row g-0">
                <div className="col-md-4">
                <img
                className="card-img"
                style={{ width: "30rem" }}
                onError={handleImageError}
                src={imageError ? 
                    "https://static.vecteezy.com/system/resources/previews/009/007/134/original/failed-to-load-page-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" : 
                    `https://starwars-visualguide.com/assets/img/characters/${props.entities.uid}.jpg`}
                alt={`Image of ${props.entities.name}`}
                />
                </div>
                <div className="text-center m-auto">
                    <h5>{props.entities.properties.name}</h5>
                    <p>{props.entities.description}</p>
                </div>
            </div>
                <div className="border-top border-danger my-3 d-flex justify-content-between text-center">
                    <div>
                        <p className="text-warning"><strong>name</strong></p>
                        <p className="text-warning">{props.entities.properties.name}</p>
                    </div>
                    <div>
                        <p className="text-warning"><strong>Birth year</strong></p>
                        <p className="text-warning">{props.entities.properties.birth_year}</p>
                    </div>
                    <div>
                        <p className="text-warning"><strong>Gender</strong></p>
                        <p className="text-warning">{props.entities.properties.gender}</p>
                    </div>
                    <div>
                        <p className="text-warning"><strong>Height</strong></p>
                        <p className="text-warning">{props.entities.properties.height}</p>
                    </div>
                    <div>
                        <p className="text-warning"><strong>Skin Color</strong></p>
                        <p className="text-warning">{props.entities.properties.skin_color}</p>
                    </div>
                    <div>
                        <p className="text-warning"><strong>Eye Color</strong></p>
                        <p className="text-warning">{props.entities.properties.eye_color}</p>
                    </div>
                </div>
             </div>
         </div>
	);
};
