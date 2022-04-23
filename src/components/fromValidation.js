const formValidation =(values,inputsStep1)=>{
    const errors = {};

    inputsStep1.map((input) => {
        const value = values[input.name];
        if(input.required){
            if(value.length === 0){
                errors[input.name]= `Dane w polu ${input.label} są wymagane `
            }
        }
        if(input.pattern){
            const reg = new RegExp(input.pattern);
            if(!reg.test(value)){
                errors[input.name] = `Dane w polu ${input.label} zawieraja niedozwolone znaki`
            }
        }
        return errors;
    })
    return errors;
}

export default formValidation;