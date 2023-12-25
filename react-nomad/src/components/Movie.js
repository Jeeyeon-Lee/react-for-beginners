import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverIMG,year, title, summary, genres}){
    return <div>
        <img src={coverIMG} alt={title}/>
        <h2>
            <Link to={`/movie/${id}`}>{title} ({year})</Link></h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>;
}
Movie.propTypes={
    id:PropTypes.number.isRequired,
    coverIMG: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string,
    year:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;