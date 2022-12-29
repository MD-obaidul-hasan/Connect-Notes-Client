import React from 'react';
import { Form } from 'react-router-dom';

const Intext = () => {
    return (
        <div className="artboard artboard-horizontal phone-1 bg-blue-200" >
        <div className="form-control w-full max-w-xs">
                <div>
                <label className="label">
            <span className="label-text ">What is your mind Say?</span>
    
            </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
 
                <input type="file" className="mt-30 file-input file-input-bordered file-input-gray w-full max-w-xs bg-blue-600" />
                </div>
 
            <button className=" mt-33 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-pink-500">Submit</button>
        </div>
        </div>
           
       
    );
};

export default Intext;