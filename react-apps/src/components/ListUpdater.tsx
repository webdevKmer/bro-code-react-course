import { useState } from "react"

const ListUpdater = () => {
    const [fruits, setFruits] = useState(["orange", "banana", "mango", "kiwi", "goyava"])
    const [fruit, setFruit] = useState("")

    const handleChange = (e) => setFruit(e.target.value)
    const handleClick = () => {
        setFruits((f)=> [...f, fruit])
        setFruit("")
    }
    
    const removeFruit = (index) => setFruits(fruits.filter((elt, i) => i !== index ));
    

  return (
    <>
        <h2>Update list of elements</h2>
        <ul>
            {fruits.length === 0 && <h4>No fruits to show...</h4>}
            {fruits.map((fruit, index) => <li key={index} onClick={() => removeFruit(index)}>{fruit}</li>)}
        </ul>
        <p><input type="text" value={fruit} placeholder="Entre a fruit..." onChange={handleChange}/><button onClick={handleClick}>Add Fruit</button></p>
    </>
  )
}

export default ListUpdater