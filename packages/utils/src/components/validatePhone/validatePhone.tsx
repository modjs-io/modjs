const validatePhone = (value: string) => {
    value = value.replace(/[^\d\s()-]/g, ''); //Replace eveything with an empty string except for parenthesis, digits, whitespace, and an hyphen.
    if(value.length === 14) {
        return true
    } else {
        return false
    }
}

export default validatePhone