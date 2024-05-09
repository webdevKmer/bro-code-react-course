import { useState } from "react"

const InputUpdater = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [weight, setWeight] = useState("")
    const [gender, setGender] = useState("")

  return (
    <>
        <h2>Update Inputs</h2>
        <p><label htmlFor="">Name : <input type="text" placeholder="Enter the name..." onChange={(e) => setName(e.target.value)}/></label></p>
        <p><label htmlFor="">Age : <input type="number" placeholder="Enter the age..." onChange={(e) => setAge(e.target.value)}/></label></p>
        <p><label htmlFor="">Weight : <input type="number" placeholder="Enter the weight..." onChange={(e) => setWeight(e.target.value)}/></label></p>
        <p><label htmlFor="">Gender : </label></p>
        <p><label htmlFor="">Male : <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/></label></p>
        <p><label htmlFor="">Female : <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/></label></p>
        <p>The choosen Person is <strong>{name}</strong>.{gender === 'Female' ? <span>She</span> : <span>He</span>} is <strong>{age}</strong> years old and weights <strong>{weight} kgs</strong>.</p>
    </>
  )
}

export default InputUpdater