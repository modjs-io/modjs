interface isEmptyProps {
    value: string
}
const isEmpty = (value: any) => {
    if (value === null) {
        return true
    } else {
        return false
    }
}

export default isEmpty