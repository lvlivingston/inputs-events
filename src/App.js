import { useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    emotion: "😁"
  });

  function handleChange(evt) {
    // replace object state with a new object
    // and use a computed property to update the correct state property
    const newFormData = { ...formData, [evt.target.name]: evt.target.value };
    setFormData(newFormData);
  }

  return (
    <div className="App">
      <form>
        <label>NAME</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        <label>EMOTION</label>
        <select name="emotion" value={formData.emotion} onChange={handleChange}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </form>
      <h1>
        {formData.name} is {formData.emotion}
      </h1>
    </div>
  );
}
