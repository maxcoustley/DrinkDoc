import "./Info.css";

function Info() {


    return (<>
        <div className="text">Tell us about yourself</div>
        <div className="info">
            <div className='input'>
                <input type='name' placeholder="Name"/>
            </div>
            <div className='input'>
                <input type='gender' placeholder="Gender"/>
            </div>
            <div className='input'>
                <input type='weight' placeholder="Body Weight"/>
            </div>
        </div>
        <div className="submit">Next</div>
        
    </>)
}

export default Info;