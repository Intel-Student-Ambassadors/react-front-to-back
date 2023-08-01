import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../../context/FeedbackContext";
import Card from "../shared/Card";
import Button from '../shared/Button'
import Rating from '../Rating'


const FeedbackForm = () => {
  const { addFeedback, updateFeedback, feedbackEdit } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(null);
  const [rating, setRating] = useState(0);
  const handleTextChange = (e) => {
    const newText = e.target.value;

    if (newText.trim() === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(newText);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 9) {
      const newFeedbackItem = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedbackItem);
      } else {
        addFeedback(newFeedbackItem);
      }

      setText('');
    }
  };

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleFormSubmit}>
        <Rating selectedRating={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            placeholder='Write a review'
            type='text'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message ? <div className='message'>{message}</div> : null}
      </form>
    </Card>
  );
};

export default FeedbackForm;