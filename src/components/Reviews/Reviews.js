import { getReviews } from "components/services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {
        getReviews(movieId).then(reviews=>setReviews(reviews))
    }, [movieId])
    
    if (!reviews) {
        return
    }
    return (
        <div>
            <ul>
                {reviews.map(({ id, author, content }) => ( <li key={id}>
                        <p>  Author : {author} </p>
                        <p> Review : {content} </p>
                    </li>)
                   
                )}
           </ul>
        </div>
    )
}
export default Reviews;