import DrinkMeter from "./DrinkMeter";
import "./Event.css";

function Event(props) {
    const name = props.name
    const gender = props.gender
    const weight = props.weight
    const startTime = props.startTime
    const peakTime = props.peakTime
    const mainTime = props.mainTime
    const drunkLevel = props.drunkLevel

    return (<>
        <DrinkMeter 
            name={name}
            gender={gender}
            weight={weight}
            startTime={startTime}
            peakTime={peakTime}
            mainTime={mainTime}
            drunkLevel={drunkLevel} />
    </>)
}

export default Event;