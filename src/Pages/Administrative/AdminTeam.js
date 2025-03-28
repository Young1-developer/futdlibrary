import React from 'react'
import AdminCard from './AdminCard'
import AdministrativeHero from './AdministrativeHero'


const AdminTeam = () => {
  return (
    <div>
         <section className="team-section py-5 bg-light">
         <AdministrativeHero /> 
        <div className="container">
            <h2 className="section-title text-center mb-5 my-3">Leadership Team</h2>
              <AdminCard />
        </div>
    </section>

    </div>
  )
}

export default AdminTeam