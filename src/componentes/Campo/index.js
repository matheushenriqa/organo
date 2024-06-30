import './Campo.css';

const Campo = ({ type = 'text', label, placeholder, obrigatorio, aoAlterado, value }) => {

  const aoDigitado = (event) => {
    aoAlterado(event.target.value);
  }

  return (
    <div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input 
          type={type} 
          value={value} 
          onChange={aoDigitado} 
          required={obrigatorio} 
          placeholder={placeholder}
        />
    </div>
  );
}

export default Campo;