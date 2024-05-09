import { useState } from "react"

const ElementsArrayUpdater = () => {
    const [cars, setCars] = useState([])
    const [car, setCar] = useState({
        year: "", make: "", model: "",
    })

    const handleChangeYear = (e) => setCar((c) => ({...c, year: e.target.value}))
    const handleChangeMake = (e) => setCar((c) => ({...c, make: e.target.value}))
    const handleChangeModel = (e) => setCar((c) => ({...c, model: e.target.value}))
    const handleAddCar= () => {
        setCars(c => ([...c, car]))
        setCar({year:"", make:"", model:""})
    }
    const handleDeleteCar = (i) => setCars((c) => c.filter((elt, index) => index !== i))

  return (
    <>
        <input type="number" placeholder="Enter the year..." value={car.year} onChange={(e) => handleChangeYear(e)}/>
        <input type="text" placeholder="Enter the make..." value={car.make} onChange={handleChangeMake}/>
        <input type="text" placeholder="Enter the model..." value={car.model} onChange={handleChangeModel}/>
        <button onClick={handleAddCar}>add Car</button>
        <h2>List of car objects</h2>
        {cars.length === 0 && <p>No cars available...</p>}
        <ul>
            {cars.map((car, index) => (<li onClick={() => handleDeleteCar(index)}>{car.make} {car.model} {car.year}</li>))}
        </ul>
    </>
  )
}

export default ElementsArrayUpdater