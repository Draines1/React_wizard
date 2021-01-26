# Wizard form:

- create a form editing 3 attributes:
    - name 
    - occupation 
    - house
- when the form is submitted, save that to an array...somewhere?
    - confrim the new wizard is in the array by:
    - maybe list them out?
    - or just use the inspector??
- Controll component
    - shows state & changes state
    - a controlled component is when you use a form to show state and change the value of state

# January 26 Activity
- Create a basic WizardForm.jsx
    - fill out the basics (an import, a functin, an export)
    - add a section 
    - add a form
    - add one input (name)
- Show the WizardForm in the App
    - "wire up" the input so it's a connected component
    - create some state by calling useState()
        - PS: you gotta import useState
    - set the value of your input using your state
    - add an onChange that calls your setState function 
        - it will usually look like this: `(e) => {
                    console.log(e.target.value);
                    setHouse(e.target.value);
                    }}`
    - Add two other inputs
        - occupation 
        - house