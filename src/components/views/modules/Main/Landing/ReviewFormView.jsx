import React from 'react';

const ReviewFormView = props => {
    const { handleSubmit } = props;
    <form onSubmit={handleSubmit}>
        <label>Rating</label>
        <input type="radio" name="rating" value="1">1</input>
        <input type="radio" name="rating" value="2">2</input>
        <input type="radio" name="rating" value="3">3</input>
        <input type="radio" name="rating" value="4">4</input>
        <input type="radio" name="rating" value="5">5</input>
        <input type="textArea" name="reviewBody"></input>
        <button type="submit">Submit</button>
    </form>
}

export default ReviewFormView;
