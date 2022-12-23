import { getReviews } from "components/services/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {ReviewsList,ReviewsItem,AutorName,ReviewText,NoReview } from './Reviews.styled'

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
            <ReviewsList>
                {reviews.map(({ id, author, content }) => ( <ReviewsItem  key={id}>
                        <AutorName>  Author : {author} </AutorName>
                        <ReviewText> Review : {content} </ReviewText>
                    </ReviewsItem>)
                   
                )}
            </ReviewsList>
               {reviews.length === 0 &&  (
        <NoReview>We don't have any reviews for this movie</NoReview>
      )}
        </div>
    )
}
export default Reviews;