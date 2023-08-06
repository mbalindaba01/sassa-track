const trackSassaStatus = async (id, mobile) => {
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    try {
        const url = `https://srd.sassa.gov.za/srdweb/api/web/outcome/${id}/${mobile}`
        const response = await fetch(url)
        const json = await response.json()
        const result = json.outcomes
        const res = result ? result : "An error occurred. Please ensure ID and mobile number are correct"
        res.sort((a, b) => {
            if(b.period.slice(3,) !== a.period.slice(3,)){
                return b.period.slice(3,) - a.period.slice(3,)
            }else {
                return months.indexOf(b.period.slice(0,3)) - months.indexOf(a.period.slice(0,3))
            }
        })
        return res
    }
    catch(error) {
        return error
    }
}

export default trackSassaStatus