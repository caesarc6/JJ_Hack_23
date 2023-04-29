import React from 'react'

function Solutions() {
    return(
        <div>
            <h1>Solution page</h1>
            <h2 style={{ fontFamily: 'Arial' }}>Subheader</h2>
            <div style={{ textAlign: 'center' }}>
            <p contentEditable style={{ fontFamily: 'Arial', margin: '20px auto' }}>
            Our web application is specifically made so that anyone with resipirtory health issues 
            or allergies to be able to check on a live status update on how safe is it for them to be 
            able to travel outside. There are multiple factors we take in to calculate the AQI 'or Air Quality Index'
            and that is Ozone and Particulate matter. We can then calculate on a Good, Moderate, or Bad scale with 
            each to their repective colors to let users know how safe it actually is for them. </p>
            <p contentEditable style={{ fontFamily: 'Arial', margin: '20px auto' }}>Editable paragraph 2</p>
            <p contentEditable style={{ fontFamily: 'Arial', margin: '20px auto' }}>Editable paragraph 3</p>
            </div>
        </div>
    )
}

export default Solutions