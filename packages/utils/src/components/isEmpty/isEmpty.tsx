interface isEmptyProps {
    value: string
}
const isEmpty = (value: any) => {
    if (value === null || value === undefined || value.trim() === '') {
        return true
    } else {
        return false
    }
}

export default isEmpty