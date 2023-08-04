const InsightsCard = ({ outcome }) => {
    return (
        <div className="insights">
            <h1 className="insights-heading">Insights</h1>
           <div className="insights-section">
                <div className="total-section">
                    <p className="total">Total received: R5 600</p>
                    <p className="rejections">Total rejections: 7</p>
                </div>
                <div className="latest">
                    <p className="latest-month">Current Month: August</p>
                    <p className="latest-status">Status: Pending</p>
                </div>  
           </div>
        </div>
    )
}

export default InsightsCard