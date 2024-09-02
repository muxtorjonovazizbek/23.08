import React from 'react'

const Animals = ({item}) => {
  return (
    <div>
      
        <div className="card mt-5 mx-5">
            <div className="card-header">
                <h2 className='text-center'>Animals</h2>
            </div>
            <div className="cad-body px-3 d-flex flex-column gap-4 pt-5">
                <h3>{item.type}</h3>
                <h4>{item.name}</h4>
                <h4>{item.weight}</h4>
                <h5>{item.food}</h5>
            </div>
            <div className="card-footer">
                <button className='btn btn-info'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default Animals