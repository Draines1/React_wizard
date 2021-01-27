import { useState } from 'react';
import WizardForm from './Components/WizardForm';


function App() {

  const [wizards, setWizards] = useState([]);  


  return (
    <div>
      <WizardForm 
      title="Add New Wizard"
      onSubmit={(wizard) => {
        console.log('==================');
        console.log('here is the new wizard');
        console.log(wizard);
        // how do we .push() into a state variable?
        // why not .push? Because that will change the variable
        // To _correctly_ setState on an Array:
        const newWizardArray = [
          ...wizards, // copy the existing elements from the OLD array
          wizard      // include the element
        ];
      // ask React to store the new Array as the wizards
      setWizards(newWizardArray);
      // setWizards([
      //    ...wizards,
      // wiard
      // ]);
      }} />
      <ul>
        {
        wizards.map(w => <li key={w.name}>{w.name}: {w.occupation} - {w.house}:</li>)
        }
      </ul>
    
    </div>
  );
}

export default App;
