import React , {useState} from 'react'

export const Tour = ({id,name,image,info,price,removeTour}) => {

  const [readMore, setReadMore] = useState(false)
  const handleRemove = (id)=>{
    removeTour(id);
  }
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substr(0,200)}...`}
          <button onClick={()=>{setReadMore(!readMore)}}>{readMore ? 'Show Less' : 'Show More'}</button>
        </p>
        
        <button className='delete-btn' onClick={()=>{handleRemove(id)}}>Not interested</button>
      </footer>
    </article>
  )
}
