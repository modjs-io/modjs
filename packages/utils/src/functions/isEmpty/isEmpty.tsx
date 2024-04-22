const isEmpty = (value: string) => {
    if (!value || value === null || value === undefined || value.trim() === '') {
        return true
    } else {
        return false
    }
}

export default isEmpty