import React, {useState} from 'react';

const useSelect = (initialState, options) => {

  //Custom kook state
  const [state, updateState] = useState(initialState);
  
  
  const SelectNews = () => (
    <select
      className="browser-default"
      style={{textTransform: "capitalize"}}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  )

  return [state, SelectNews];
}
 
export default useSelect;