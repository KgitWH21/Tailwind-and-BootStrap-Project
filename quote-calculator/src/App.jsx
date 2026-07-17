import { useState } from 'react'



export default function App() {
  const [serviceId, setServiceID] = useState("audiobook")
  const [scope, setScope] = useState('')

  //initialize estimate with null because no calculation has been made
  const [estimate, setEstimate] = useState(null)
  
  return (
    <main>
      <div>
        <header>
          <p>HAC Studios</p>
          {/*design note: push this to the right in subdued font*/}
          <p>Internal planning tool</p>
        </header>
        <section>
          {/*design note: eyebrow*/}
          <p>Project Estimate</p>
          <h1>Quote Calculator</h1>
        </section>

        <section>
          <div>
            <div>Checking US holiday calendar...</div>
          </div>
        </section>

        <footer>
          <span>Planning estimates only - final quotes may vary by project.</span>
          <span>Holiday data provided by Nager.Date.</span>
        </footer>
      </div>
    </main>
  )
}

