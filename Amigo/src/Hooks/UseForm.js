import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {

    const [values, setValues] = useState({
        name: null,
        email: null,
        phone: null,
        language: null,
        privacy: null
    })

    const handleInput = (event) => {
        const { name, value } = event.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        return callback()
    }

    const [errors, setErrors] = useState({})

    useEffect(() => {
        setErrors(validate(values))
    }, [values])

    const [isValidate, setIsValidate] = useState(false)
    useEffect(() => {
        if (Object.keys(errors).length === 0 && Object.values(values).filter(item => !item).length === 0) {
            setIsValidate(true)
        } else {
            setIsValidate(false)
        }
    }, [errors, values])

    return {handleInput, handleSubmit, values, errors, isValidate}
}

export default useForm
