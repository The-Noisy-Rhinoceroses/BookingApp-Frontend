import React from 'react';

const ReviewFormView = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>Rating</label>
      <input type="radio" name="rating" value="1" />1<br />
      <input type="radio" name="rating" value="2" />2<br />
      <input type="radio" name="rating" value="3" />3<br />
      <input type="radio" name="rating" value="4" />4<br />
      <input type="radio" name="rating" value="5" />5<br />
      <input type="textArea" name="reviewBody" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewFormView;
