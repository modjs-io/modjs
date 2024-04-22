const validatePhone = (value: string) => {
    const cleanedPhone = value.replace(/\D/g, '');
    const re = /^\d{10}$/;
    return re.test(cleanedPhone)
}

export default validatePhone