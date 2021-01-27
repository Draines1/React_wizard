import React, { useState } from 'react'; 

function WizardForm(props) {
    // we're destructuring two values out of the Array 
    // returned by useState()
    // 1st value is always your state variable
    // 2nd value is always the setState function (for updating the variable)
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [house, setHouse] = useState('');

    return (
        <section>
            <h1>{props.title}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                const wizardObject = {
                    name,
                    occupation,
                    house
                };
                props.onSubmit(wizardObject);
                setName('');
                setOccupation('');
                setHouse('');
            }}>
                <label>
                    Name:
                <input 
                placeholder="Type your name"
                value={name}
                onChange={(e) => {
                    console.log(e.target.value);
                    setName(e.target.value);
                    }}
                />
                </label>
                <br />
                <label>
                    Job:
                <input 
                placeholder="Your job?"
                value={occupation}
                onChange={(e) => {
                    console.log(e.target.value);
                    setOccupation(e.target.value);
                    }}
                />
                <label>
                <br />
                    House:
                <input 
                placeholder="House Style"
                value={house}
                onChange={(e) => {
                    console.log(e.target.value);
                    setHouse(e.target.value);
                    }}
                />
                </label>
                <br />
                </label>
                <br />
                <input type="submit" />
            </form>
        </section>
    );
}

export default WizardForm;