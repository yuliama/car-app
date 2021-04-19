import React from 'react';
import ActorModel from '../../model/ActorModel';
import './ActorCard.css';

//TODO
function ActorCard({ actor }) {
    const actorModel = new ActorModel(actor.id, actor.firstName,actor.lastName, actor.birthday, actor.image, actor.imdbLink);
    return (
        <div className="card">
            <a href={actor.imdbLink} target="_blank">
                <span>{actor.firstName} {actor.lastName}, {actorModel.age()}</span>
                <img src={actor.image}></img>
            </a>
        </div>
    )
}

export default ActorCard;