import React from 'react'

function Form() {
    const handleSubmit = (e) => {
        console.log(e)
    }

    return(
        <div>
            <form id='form_location' onSubmit={handleSubmit}>
                <input
                    name='location_input'
                    type='text'
                    id='location_input'
                    placeholder='Enter a location'
                    className='location_input_bar'
                />
                <button type='submit'
                    id='submit-btn'
                    form='form_location'
                    >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Form