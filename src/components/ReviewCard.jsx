import "../styles/ReviewCard.css";
import star from "../assets/icons/star.svg";
import revUser from "../assets/icons/revUser.svg";
const ReviewCard = () => {
  return (
    <div className="ReviewCard-container">
      <div className="ReviewCard-container-child">
        <div className="star">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
        </div>
        <div className="ReviewCard-text">
          {/* Give everyone you work with—inside and outside your emoji, keep
          conversations focused in channels, and simplify all your communication
          into one place. */}
        </div>
        <div className="ReviewCard-user">
            <img height={'40px'} src={revUser}/>
            <span>Amy Klassen</span>
        </div>
      </div>
    </div>
  );
};
export { ReviewCard };
