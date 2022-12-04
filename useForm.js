import { useState } from "react";

export const useForm = ( initialForm={} ) => {
  
    const [formState, setFormState] = useState(initialForm);
      
      const onHandleChangeInput=(event)=>{
        const {name,value} = event.target;
        setFormState({...formState,[name]:value});
      }

      const onResetForm =()=>{
        setFormState(initialForm);
      }
      
    return{
        ...formState,
        formState,
        onHandleChangeInput,
        onResetForm,
  }
}
