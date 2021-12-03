import React  from 'react'

 const Form =  (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
          <p>  <button> Get Weather</button> </p>
        </form>
              
        )
}


export default Form