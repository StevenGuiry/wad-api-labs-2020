import React, { useEffect, useState } from "react";
import { getVideos } from "../../api/tmdb-api";
import './movieTrailers.css';

export const URL_YOUTUBE = 'https://www.youtube.com/embed/';


export default ({ movie }) => {
    const [trailers, setTrialers] = useState([]);


    useEffect(() => {
        getVideos(movie.id).then(trailers => {
            setTrialers(trailers);
        });
    }, [movie.id]);
    return (
        <div> {trailers.map(trailer => (
            <iframe className='trailer_window' title={URL_YOUTUBE + trailer.key} src={URL_YOUTUBE + trailer.key} allowFullScreen />
        ))}
        </div>
    );
};
