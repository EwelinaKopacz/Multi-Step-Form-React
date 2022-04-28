const formValidation =(values,inputsStep1)=>{
    const errors = {};

    inputsStep1.map((input) => {
        const value = values[input.name];
        if(input.required){
            if(value.length === 0){
                errors[input.name]= `${input.label} is required `
            }
        }
        if(input.pattern){
            const reg = new RegExp(input.pattern);
            if(!reg.test(value)){
                errors[input.name] = `${input.label} contains invalid data`
            }
        }
        return errors;
    })
    return errors;
}

export default formValidation;