import { StarIcon } from "lucide-react";
import React from "react";

type RatingProps = {
  count: number;
};

export const RatingStars: React.FC<RatingProps> = ({ count }) => {
  return (
    <div className="flex">
      {[...Array(count)].map((star, index) => (
        <StarIcon key={index} size={18} fill="gold" />
      ))}
    </div>
  );
};
