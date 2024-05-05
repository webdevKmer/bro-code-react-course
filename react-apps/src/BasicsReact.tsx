import { useState } from "react"

const BasicsReact = () => {
  const [product, setProduct] = useState("")
  const [quantity, setQuantity] = useState("")
  const [instructions, setInstructions] = useState("")
  const [payment, setPayment] = useState("master")
  const [gender, setGender] = useState("master")
  return (
    <>
        <p><label htmlFor="">Product : <input type="text" placeholder="Enter a Product" value={product} onChange={(e) => setProduct(e.target.value)}/></label>
          </p>
        <p>
        <label htmlFor="">Quantity : <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/></label>
        </p>
        <p>
        <label htmlFor="">Delivery instructions : <br /> <textarea value={instructions} cols="30" rows="10" placeholder="Enter your delivery instructions." onChange={(e) => setInstructions(e.target.value)}></textarea></label>
        </p>
        <p>
        <label htmlFor="">Payment method : <br />
        <select name="" id="" onChange={(e) => setPayment(e.target.value)}>
        <option value="">Select an option</option>
        <option value="visa">VisaCard</option>
        <option value="master">MasterCard</option>
        <option value="gift">GiftCard</option>
        </select></label>
        </p>
        <p>
        <label htmlFor="">Gender : <br />
          <label htmlFor="">Male
          <input type="radio" name="gender" id="" value="Male" onChange={(e) => setGender(e.target.value)}/>
          </label>
          <label htmlFor="">Female
          <input type="radio" name="gender" id="" value="Female" onChange={(e) => setGender(e.target.value)}/>
          </label>
        </label>
        </p>
        <h3>Recap</h3>
        <p>You have chosen</p>
        <p>Product: {product}</p>
        <p>Quantity: {quantity}</p>
        <p>Instruction: {instructions}</p>
        <p>Payment Method : {payment}</p>
        <p>Gender: {gender}</p>
    </>
  )
}

export default BasicsReact