const isEmpty = async (value: string) => {
    if (value === null || value === undefined || value.trim() === '') {
        return true
    } else {
        return false
    }
}

export default isEmpty