interface RatingProps {
  rating: number;
  value: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span className="text-yellow-400" key={i}>
          {i < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;
