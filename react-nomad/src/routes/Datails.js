import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

function Detail(){
    const [loading,setLoading] = useState(true);
    const [movie, setMovie] = useState(null);
    const {id} = useParams();
    const getMovie = async ()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <>
            {loading ? (
                <h1>Loading ...</h1>
            ) : (
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "20px"}}>
                        {/* 좌측에 이미지만 배치 */}
                        <img src={movie.large_cover_image} alt={movie.title} style={{width: "300px", height: "450px"}}/>
                    </div>
                    <div>
                        {/* 우측에 다른 정보들 배치 */}
                        <h2>{movie.title} ({movie.year}년)</h2>
                        <p>상영시간: {movie.runtime}분 / 평점: {movie.rating}점</p>
                        <p>줄거리: {movie.summary}</p>
                        <p>예고편 영상</p>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                )};
        </>
    )
}
export default Detail;