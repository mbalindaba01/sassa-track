
const OutcomeCard = ({ outcome }) => {

  return (
    <div className="outcome-card">
      <p>{outcome.period}</p>
      <p>{outcome.outcome}</p>
    </div>
  )
}

export default OutcomeCard