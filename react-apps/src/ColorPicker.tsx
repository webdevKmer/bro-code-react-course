import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff")
    const styles = {
        colorContainer: {backgroundColor: color}
    }

    const handleColorChange = (e) => setColor(e.target.value) 

  return (
    <div className="color-picker-container">
    <div className="color-container" style={styles.colorContainer}>
            <p>{color}</p>
        </div>
        <label htmlFor="">Pick a color</label> <br/>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker