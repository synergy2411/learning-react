import React from "react";
import { useForm } from 'react-hook-form';

const FormValidationDemo = props => {
    const { register, handleSubmit, errors } = useForm();
    
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username : </label>
            <input type="text" name="username" ref={register({
                required : true,
                minLength : 6,
                maxLength : 20
            })}/>
            {errors.username && <p>Something went wrong with username</p>}
           <br/>
            <label>Age :</label>
            <input type="number" name="age" ref={register({
                required : true,
                min : 18,
                max : 60
            })} />
            {errors.age && <p>Something went wrong with Age </p>}
            <br/>
            <label>Email : </label>
            <input type="text" name="email" ref={register({
                required : true,
                validate : value => {
                    if(value.indexOf("@")>=0){
                        return true;
                    }
                    return false;
                }
            })} />
            {errors.email && <p>Something went wrong with email</p>}
            <br/>
            <input type="submit" />
        </form>
    )
}
export default FormValidationDemo;