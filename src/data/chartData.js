const appointment = [10, 59, 20, 81, 26, 85, 40, 90, 25, 75, 5, 82]
const patients = [30, 79, 40, 71, 16, 65, 20, 63, 25, 85, 15, 32]
const earnings = [10, 59, 20, 81, 66, 25, 70, 20, 85, 35, 65, 12]

const setAppointment = () => {
    const documentStyle = getComputedStyle(document.documentElement)

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                data: appointment,
                fill: true,
                borderColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)'),
                tension: 0,
                backgroundColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)')
            }
        ]
    }
}

const setPatient = () => {
    const documentStyle = getComputedStyle(document.documentElement)

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                data: patients,
                fill: true,
                borderColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)'),
                tension: 0,
                backgroundColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)')
            }
        ]
    }
}

const setEarning = () => {
    const documentStyle = getComputedStyle(document.documentElement)

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                data: earnings,
                fill: true,
                borderColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)'),
                tension: 0,
                backgroundColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)')
            }
        ]
    }
}

export { setAppointment, setPatient, setEarning }