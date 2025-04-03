import React from 'react'

const Qualities = () => {
    const qualities=[
        {
            id:1,
            image:"/community.jpg",
            title: "COMMUNITY DEVELOPMENT",
            description:"At Volunteer, we believe that true progress begins with strong and empowered communities. Our mission is to drive sustainable community development by providing resources, support, and opportunities to those in need. Whether it’s education, healthcare, environmental sustainability, or social welfare, we work to uplift communities by fostering collaboration and meaningful change."
        },
        {
            id:2,
            image:"/transparency.jpg",
            title: "TRANSPERNCY",
            description:"Transparency is the foundation of our platform, ensuring that every donation is tracked, verified, and directed where it’s needed most. We provide real-time impact reports, secure transactions, and open access to fund allocations, so you always know how your generosity is making a difference. No hidden processes, no unanswered questions—just a clear and honest commitment to building trust and transforming lives. "
        },
        {
            id:3,
            image:"/impact.jpg",
            title: "IMPACT MEASUREMENT",
            description:"At Volunteer, we don’t just count donations—we measure transformation. Every contribution sparks a ripple effect, and we make sure you see how far it reaches. Through real-time progress tracking, personal stories, and data-backed insights, we turn generosity into visible impact. Whether it's a child gaining access to education or a family receiving essential aid, we document every milestone."
        }
    ]
  return (
    
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
            {
                qualities.map(element=>{
                    return (
                        <div className="card" key={element.id}>
                            <div className="img-wrapper">
                                <img src={element.image} alt={element.title} />
                            </div>
                            <div className="content">
                                <p className='title'>{element.title}</p>
                                <p className='description'>{element.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default Qualities
