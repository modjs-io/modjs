const formatEmail = (value: string) => {
    value = value.replace(/\s/g, '');
    return value
}

export default formatEmail