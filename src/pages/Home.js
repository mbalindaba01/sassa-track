import { useState } from 'react'
import apiClient from '../config/apiClient'
import OutcomeCard from '../components/OutcomeCard'
import InsightsCard from '../components/InsightsCard'


const Home = () => {
    //keep state of id number from user,
    //mobile number from user, error from
    //the form and outcomes from the query
    const [id, setId] = useState('')
    const [mobile, setMobile] = useState('')
    const [formError, setFormError] = useState(null)
    const [outcomes, setOutcomes] = useState(null)
    let data = []
   
    const handleSubmit = (e) => {
        e.preventDefault()
        //return error if user does not provide the required id and mobile number
        if (!id || !mobile) {
            setFormError('Please fill in all the fields correctly.')
            return
        }
    }

    //function to fetch data when user clicks 
    const getData = async () => {
        data = await apiClient(id, mobile)
        setOutcomes(data)
    }

  
    return (
        <div className="parent-div">
            <header>
                <h1>Check Sassa Grant Status</h1>
            </header>
            <div className="body-text">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id"></label>
                    <input 
                    type="text" 
                    id="id"
                    value={id}
                    placeholder="ID Number"
                    onChange={(e) => setId(e.target.value)}
                    />

                    <label htmlFor="mobile"></label>
                    <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    placeholder="Mobile Number"
                    onChange={(e) => setMobile(e.target.value)}
                    />
                    <button onClick={getData}>Check Status</button>
                    {formError && <p className="error">{formError}</p>}
                    
                </form>
                <div>
                    
                </div>
                {outcomes && (
                <div className="outcomes-container">
                    <div className="outcomes">
                        <h1>Outcomes</h1>
                        <div className="outcomes-grid">
                            {outcomes.map(outcome => (
                            <OutcomeCard key={1} outcome ={outcome}/>
                            ))}
                        </div>
                    </div>
                </div>
                )}
            </div>
            {outcomes && 
                <InsightsCard outcomes = {outcomes}/>
            }
        </div>
    )
}

export default Home

