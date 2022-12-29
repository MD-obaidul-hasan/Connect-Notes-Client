import React from 'react';

const About = () => {
    return (
        <div className='grid grid-row-4 box-border	'>
            
<h1>My Profile</h1>
{/* The button to open modal */}
<label htmlFor="my-modal" className="bg-whight btn btn-md w-full max-w-xs ">Edit</label>


{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <input type="text" placeholder="Name" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="University" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="Age" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="Email" className="input input-bordered input-md w-full max-w-xs" />
<input type="text" placeholder="text here" className="input input-bordered input-md w-full max-w-xs" />
<input type="text" placeholder="text here" className="input input-bordered input-md w-full max-w-xs" />
<input type="text" placeholder="text here" className="input input-bordered input-md w-full max-w-xs" />
<input type="text" placeholder="text here" className="input input-bordered input-md w-full max-w-xs" />
   
    <div className="modal-action">
      <label htmlFor="my-modal" className="btn">submit</label>
    </div>
    
  </div>
</div>
<input type="text" placeholder="Name" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="University" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="Age" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="Email" className="input input-bordered input-md w-full max-w-xs" />

<input type="submit" value="Submit" className="btn btn-md w-full max-w-xs" />

        </div>
    );
};

export default About;