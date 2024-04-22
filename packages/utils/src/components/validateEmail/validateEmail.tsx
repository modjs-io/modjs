interface validateEmailProps {
    value: string
}
const validateEmail = (value: any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(value)) {
        return true
    } else {
        return false
    }
}

export default validateEmail