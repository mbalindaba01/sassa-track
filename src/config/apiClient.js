const trackSassaStatus = async (id, mobile) => {
    try {
        const url = `https://srd.sassa.gov.za/srdweb/api/web/outcome/${id}/${mobile}`
        const response = await fetch(url)
        const json = await response.json()
        const res = json.messages ? json.messages[0] : json
        return res
    }
    catch(error) {
        return error
    }
}

export default trackSassaStatus