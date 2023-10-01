import React from 'react'

const Contact = () => {
  return (
    <div className='bgbody'>
      <div className="card">
        <span className="title">Leave a Comment</span>
        <form className="form">
          <div className="group">
            <input placeholder="" type="text" required=""/>
              <label htmlFor="name">Name</label>
          </div>
          <div className="group">
            <input placeholder="" type="email" id="email" name="email" required=""/>
              <label htmlFor="email">Email</label>
          </div>
          <div className="group">
            <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
            <label htmlFor="comment">Comment</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Contact 
