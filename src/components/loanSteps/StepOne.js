import React from 'react';

const StepOne = ({previous, next}) => {
  return (
    <div>
      <h3>Fill in all the application fields and submit</h3>
      <p><strong>note: There are 4 steps to be completed</strong></p>
      <p>After submition your application will be reviewed</p>

      <button style={{margin: "0 auto"}} className="btn_next" onClick={next}>Start</button>
    </div>
  )
}

export default StepOne
