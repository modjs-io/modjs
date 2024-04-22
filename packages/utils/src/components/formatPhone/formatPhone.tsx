const formatPhone = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length <= 3) {
        value = `${value}`;
    } else if (value.length <= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    }
    return value
}

export default formatPhone