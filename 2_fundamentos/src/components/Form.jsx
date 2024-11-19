import {useState} from 'react';

const Form = () => {
  
    const [value, setValue] = useState("");
  
    return (
    <form>
        <input>

        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Preencha o campo"

        </input>

    </form>

    );
};

export default Form;