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
    const [dataError, setDataError] = useState(null)
    const [outcomes, setOutcomes] = useState(null)
    let data = []
   
    const handleSubmit = (e) => {
        setDataError(null)
        e.preventDefault()
        //return error if user does not provide the required id and mobile number
        if (!id || !mobile) {
            setFormError('Please fill in all the fields correctly.')
            removeError(setFormError)
            return
        }else {
            getData()
        }
    }

    //function to fetch data when user clicks 
    const getData = async () => {
        data = await apiClient(id, mobile)
        if(data.outcomes){
            setDataError(null)
            setFormError(null)
            if(data.outcomes.length !== 0){
                setOutcomes(data.outcomes)
                sortOutcomes()
            }else {
                setDataError(data.status)
                removeError(setDataError)
            }
        } else {
            setDataError(data)
            removeError(setDataError)
            setOutcomes(null)
        }
    }
    const removeError = (error) => {
        setTimeout(() => {
            error(null)
        }, 3000);
    }
    

    //function to sort outcomes by month and year starting with the latest
    const sortOutcomes = () => {
        let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        data.outcomes.sort((a, b) => {
            if(b.period.slice(3,) !== a.period.slice(3,)){
                return b.period.slice(3,) - a.period.slice(3,)
            }else {
                return months.indexOf(b.period.slice(0,3)) - months.indexOf(a.period.slice(0,3))
            }
        })
    }

  
    return (
        <div className="parent-div">
            <header>
                <h1>Check Sassa Grant Status</h1>
            </header>
            <div className="body-text">
                <div className="form-and-insights">
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
                        <button>Check Status</button>
                        {formError && <p className="error">{formError}</p>}
                        {dataError && <p className="error">{dataError}</p>}
                        
                    </form>
                    {outcomes && 
                    <InsightsCard outcomes = {outcomes}/>
                    }
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
        </div>
    )
}

export default Home

