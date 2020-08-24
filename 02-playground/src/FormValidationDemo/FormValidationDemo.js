import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';

const FormValidationDemo = props => {

    // yup / superstruct / Joi
    
    const schema = yup.object().shape({
        username : yup.string().required(),
        age : yup.number().required().positive().min(18).max(60),
        email : yup.string().email().required()
    })

    const { register, handleSubmit, errors } = useForm({
        resolver : yupResolver(schema)
    });
    
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username : </label>
            <input type="text" ref={register} name="username"/>
            <p className="alert alert-danger">{errors.username?.message}</p>
            {/* <input type="text" name="username" ref={register({
                required : true,
                minLength : 6,
                maxLength : 20
            })}/> */}
            {/* {errors.username && <p>Something went wrong with username</p>} */}
           <br/>
            <label>Age :</label>
            <input type="number" name="age" ref={register} />
            <p className="alert alert-danger">{errors.age?.message}</p>
            {/* <input type="number" name="age" ref={register({
                required : true,
                min : 18,
                max : 60
            })} />
            {errors.age && <p>Something went wrong with Age </p>} */}
            <br/>
            <label>Email : </label>
            <input type="text" name="email" ref={register} />
            <p className="alert alert-danger">{errors.email?.message}</p>
            {/* <input type="text" name="email" ref={register({
                required : true,
                validate : value => {
                    if(value.indexOf("@")>=0){
                        return true;
                    }
                    return false;
                }
            })} />
            {errors.email && <p>Something went wrong with email</p>} */}
            <br/>
            <input type="submit" />
        </form>
    )
}
export default FormValidationDemo;