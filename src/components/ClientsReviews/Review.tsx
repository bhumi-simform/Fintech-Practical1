import React from "react";
import quotePath from "../../assets/images/quote-icon.svg";
interface ReviewProps {
  imagePath: string;
  title: string;
  content: string;
  clientName: string;
  numberProp : number;
}

const Review: React.FC<ReviewProps> = ({
  imagePath,
  title,
  content,
  clientName,
  numberProp
}) => {
  return (
 
    <div className="client-review-card">
        <div className="left">
           <img src={imagePath} alt={title} />
        </div>
        <div className="right">
           <img className="quote" src={quotePath} alt={title} />
            <h3>{title}</h3>
            <p>{content}</p>
            <span className="name">{clientName}</span>
            <span className="number">{numberProp}</span>
        </div>
    </div>
  );
};

export default Review;
