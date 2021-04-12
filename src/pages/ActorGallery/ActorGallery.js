import { useState } from "react"
import ActorModel from "../../model/ActorModel";
import ActorCard from "../../components/ActorCard";

function ActorGallery(){
    const [actors, setActor] = useState([
        new ActorModel("Bryan", "Cranston", "March 7, 1956", "https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0186505/?ref_=tt_cl_t1"),
        new ActorModel("Aaron", "Paul", "August 27, 1979", "https://m.media-amazon.com/images/M/MV5BMTY1OTY5NjI5NV5BMl5BanBnXkFtZTcwODA4MjM0OA@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0666739/?ref_=tt_cl_t3"),
        new ActorModel("Anna", "Gunn", "August 11, 1968", "https://m.media-amazon.com/images/M/MV5BMTU0NTk3MDQ3OV5BMl5BanBnXkFtZTcwNDY3NzQ4Mg@@._V1_UY317_CR4,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0348152/?ref_=tt_cl_t2"),
        new ActorModel("Bob", "Odenkirk", "October 22, 1962", "https://m.media-amazon.com/images/M/MV5BOWM5MDJjYTItMTRkNC00NTQ4LThkNjUtNDY3Mzk0YWMwMTBhXkEyXkFqcGdeQXVyNzQzNDYwMA@@._V1_UY317_CR18,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0644022/?ref_=tt_cl_t7")
    ]);

    const cards = actors.map(actor=>
        <ActorCard actor={actor}></ActorCard>);
    return(
        <div>{cards}</div>
    )
}