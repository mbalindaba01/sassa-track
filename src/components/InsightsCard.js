const InsightsCard = ({ outcomes }) => {

    let totalReceived = 0
    let totalRejections = 0
    let latestOutcome = {}

    const calculateTotal = () => {
        outcomes.forEach(outcome => {
            if(outcome.outcome === "approved"){
                totalReceived += 350
            }else {
                totalRejections++
            }
        })
    }

    const getLatestOutcome = () => {
        latestOutcome = outcomes[0]
        console.log(latestOutcome)
    }

    calculateTotal()
    getLatestOutcome()

    return (
        <div className="insights">
           <h1 className="insights-heading">Insights</h1>
           <div className="insights-section">
                <div className="total-section">
                    <p className="total">Total received: R{totalReceived}</p>
                    <p className="rejections">Total rejections: {totalRejections}</p>
                </div>
                <div className="latest">
                    <p className="latest-month">Current Period: {latestOutcome.period}</p>
                    <p className="latest-status">Status: {latestOutcome.outcome}</p>
                </div>  
           </div>
        </div>
    )
}

export default InsightsCard