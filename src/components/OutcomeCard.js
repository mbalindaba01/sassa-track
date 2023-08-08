
const OutcomeCard = ({ outcome }) => {

  // const [isShown, setIsShown] = useState(false)
  // const toggleAdditionalDetails = () => {
  //   isShown ? setIsShown(false) : setIsShown(true)
  // }

  return (
    <div className="outcome-card">
      <div className="header-info">
        <p className="period">{outcome.period}</p>
        {outcome.outcome === "approved" &&
        <>
          <p>Status: Approved</p>
          {outcome.filed && 
            <>
              <p>Date Filed: {outcome.filed.split('T')[0]}</p>
              <p>Pay Date: {outcome.payday}</p>
            </>
          }

          {!outcome.filed && 
            <>
              <p>Paydate has not been set. Please be patient</p>
            </>
          }

          </>
        }
        {outcome.outcome === "declined" &&
        <>
          <p>Status: Declined</p>
          <p>Reason: {outcome.reason}</p>
          </>
        }
      </div>
    </div>
  )
}

export default OutcomeCard