import { useState } from "react"

const ObjectUpdater = () => {
    const [person, setPerson] = useState({name:"", age:"", weight:"", gender:"Male"})

    const handleNameChange = (e) => setPerson((p) => ({...p, name: e.target.value}))
    const handleAgeChange = (e) => setPerson((p) => ({...p, age: e.target.value}))
    const handleWeightChange = (e) => setPerson((p) => ({...p, weight: e.target.value}))
    const handleGenderChange = (e) => setPerson((p) => ({...p, gender: e.target.value}))
  return (
    <>
        <h2>Update object</h2>
        <p><label htmlFor="">Name : <input type="text" placeholder="Enter the name..." onChange={handleNameChange }/></label></p>
        <p><label htmlFor="">Age : <input type="number" placeholder="Enter the age..." onChange={handleAgeChange}/></label></p>
        <p><label htmlFor="">Weight : <input type="number" placeholder="Enter the weight..." onChange={handleWeightChange}/></label></p>
        <p><label htmlFor="">Gender : </label></p>
        <p><label htmlFor="">Male : <input type="radio" name="gender" value="Male" onChange={handleGenderChange}/></label></p>
        <p><label htmlFor="">Female : <input type="radio" name="gender" value="Female" onChange={handleGenderChange}/></label></p>
        <p>The choosen Person is <strong>{person.name}</strong>.{person.gender === 'Female' ? <span>She</span> : <span>He</span>} is <strong>{person.age}</strong> years old and weights <strong>{person.weight} kgs</strong>.</p>
    </>
  )
}

export default ObjectUpdater