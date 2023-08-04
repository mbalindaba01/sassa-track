const trackSassaStatus = async (id, mobile) => {
    try {
        const url = `https://srd.sassa.gov.za/srdweb/api/web/outcome/${id}/${mobile}`
        const response = await fetch(url)
        const json = await response.json()
        const result = json.outcomes
        const res = result ? result : "An error occurred. Please ensure ID and mobile number are correct"
        return res
    }
    catch(error) {
        return error
    }
}

export default trackSassaStatus