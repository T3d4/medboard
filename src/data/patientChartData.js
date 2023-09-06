const patientTotal = [200, 1200, 980, 1260, 1550, 1440, 2790, 3200, 3600]

export const setPatientTotalChart = () => {
  const documentStyle = getComputedStyle(document.documentElement)

  return {
    labels: [
      'Jan-11',
      'Jan-12',
      'Jan-13',
      'Jan-14',
      'Jan-15',
      'Jan-16',
      'Jan-17',
      'Jan-18',
      'Jan-19'
    ],
    datasets: [
      {
        data: patientTotal,
        fill: true,
        borderColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)'),
        tension: 0.5,
        backgroundColor: documentStyle.getPropertyValue('rgba(5, 121, 189, 0.84)')
      }
    ]
  }
}
