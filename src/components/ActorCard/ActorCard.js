import React from 'react';
import './ActorCard.css';

//TODO
function ActorCard({ actor }) {
    return (
        <div className="card">
            <a href={actor.imdbLink} target="_blank">
                <span>{actor.firstName} {actor.lastName}</span>
                <img src={actor.image}></img>
            </a>
        </div>
    )
}

export default ActorCard;