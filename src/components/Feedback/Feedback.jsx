const Feedback = ({ option, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <ul>
        <li>Good: {option.good}</li>
        <li>Neutral: {option.neutral}</li>
        <li>Bad: {option.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}</li>
      </ul>
    </div>
  );
};
export default Feedback;
