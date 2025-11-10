import { useState } from "react";


export const useForm = <T extends Record<string, any>>(initState: T) => {

    const [formData, setFormData] = useState(initState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(event.target.name);

        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const resetForm = () => {
        setFormData({...initState});
    }



    return {
        // props
        ...formData,

        //methods
        onChange,
        resetForm,
    }
}
