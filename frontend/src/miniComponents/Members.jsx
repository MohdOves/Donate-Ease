import React from 'react'

const Members = () => {
    const members=[
        {
            id:1,
            image:"/oves.jpg",
            title: "Oves",
        },
        {
            id:2,
            image:"/shehjaan.jpg",
            title: "Shehjaan",
        },
        {
            id:3,
            image:"/omair.jpg",
            title: "Omair",
        },
        {
            id:4,
            image:"/husain.jpg",
            title: "Husain",
        },
        {
            id:5,
            image:"/nikhil.jpg",
            title: "Nikhil",
        },
        {
            id:6,
            image:"/athar.jpg",
            title: "Athar",
        },
        
         
    ]
  return (
    <>
      <section className='members'>
        <div className="container">
            <div className="heading_section">
                <h2 className='heading'>Our Team - The Heart of Volunteer</h2>
                <p>
At Volunteer, we are driven by a passionate team committed to making a real impact. Led by our founder, Mohammad Oves, our members include dedicated individuals from diverse backgrounds—tech enthusiasts, social workers, and changemakers—who work together to ensure a seamless and transparent donation experience. Each member plays a vital role in managing campaigns, building connections, and ensuring that every contribution makes a difference. We believe that teamwork fuels change, and together, we strive to create a better, more compassionate world.</p>
            </div>
            <div className="members_container">
                {
                    members.map(element=>(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
    </>
  )
}

export default Members
