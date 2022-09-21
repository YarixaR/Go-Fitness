import { useState } from "react";


function Card({ id, bodyPart, equipment, gifUrl, name, target }) {

    const [isClicked, setIsClicked] = useState(false)

    const handleImage = () => {
        setIsClicked(isClicked => !isClicked)
    }

    return(
        <div>
            <img onClick={ handleImage } src={gifUrl} alt="gif"/>
            <div>
                <h4>Name of Movement: { name }</h4>
                <h4>Focus: { bodyPart }</h4>
                <h4>Targeted muscle: { target }</h4>
                <h4>Equipment: { equipment }</h4>
                {isClicked
                 ? <form>
                    <input type='number' name="sets" placeholder="# of Sets"></input>
                    <input type='number' name="reps" placeholder="Reps"></input>
                    <input type='number' name="weight" placeholder="Weight"></input>
                    <button>Submit</button>
                </form> 
                : null
                }
            </div>
        </div>
    )
}

export default Card;