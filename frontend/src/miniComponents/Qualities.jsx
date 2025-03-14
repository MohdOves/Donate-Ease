import React from 'react'

const Qualities = () => {
    const qualities=[
        {
            id:1,
            image:"/community.jpg",
            title: "COMMUNITY DEVELOPMENT",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis earum, error sunt deserunt sapiente impedit. Eveniet, quasi at! Unde corrupti nemo earum magni ea dolorum suscipit similique officia eum. Ut molestiae voluptatibus exercitationem nobis quaerat odio sed ducimus at."
        },
        {
            id:2,
            image:"/transparency.jpg",
            title: "TRANSPERNCY",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis earum, error sunt deserunt sapiente impedit. Eveniet, quasi at! Unde corrupti nemo earum magni ea dolorum suscipit similique officia eum. Ut molestiae voluptatibus exercitationem nobis quaerat odio sed ducimus at."
        },
        {
            id:3,
            image:"/impact.jpg",
            title: "IMPACT MEASUREMENT",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis earum, error sunt deserunt sapiente impedit. Eveniet, quasi at! Unde corrupti nemo earum magni ea dolorum suscipit similique officia eum. Ut molestiae voluptatibus exercitationem nobis quaerat odio sed ducimus at."
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
