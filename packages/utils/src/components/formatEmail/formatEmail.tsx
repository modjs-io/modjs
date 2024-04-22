interface formatEmailProps {
    value: string
}
const formatEmail = (value: any) => {
    value = value.replace(/\s/g, '');
    return value
}

export default formatEmail