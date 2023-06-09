import React, { useState } from 'react';



const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0)
    const [date, setDate] = useState("")


    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date
        };
        console.log(newEntry);
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Weight</label>
                <input type="number" className='form-control'  value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type="date" className='form-control' value={date} onChange={(event) => setDate(event.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary'>Add</button>
        </form>
     );
}
 
export default AddEntryForm;