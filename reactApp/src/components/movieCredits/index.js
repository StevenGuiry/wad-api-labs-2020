import React, { useEffect, useState } from "react";
import { getCredits } from "../../api/tmdb-api";
import Image from 'react-bootstrap/Image';
import "./movieCredits.css";

export const URL_IMG = 'https://image.tmdb.org/t/p/';
export const IMG_SIZE_SMALL = 'w45/';

export default ({ movie }) => {
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        getCredits(movie.id).then(credits => {
            setCredits(credits);
        });
    }, [movie.id]);
    return (
        <div class='table_outer'>
        <table className="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col" class="col_one"></th>
                    <th scope="col">Actor</th>
                    <th scope="col">Character played</th>
                </tr>
            </thead>
            <tbody>
                {credits.map(c => {
                    return (
                        <tr key={c.id}>
                            <Image src={URL_IMG + IMG_SIZE_SMALL + c.profile_path} alt={c.name} thumbnail/>
                            <td>{c.name}</td>
                            <td>{c.character}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    );
};