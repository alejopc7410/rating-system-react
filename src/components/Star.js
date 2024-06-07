import { FaStar } from "react-icons/fa";

function Star({id, clickHandler, clicked}) {
  return (
    <>
      <FaStar className="star" onClick={() => clickHandler(id)} style={{ color: clicked ? '#ffff00' : '#323536' }}/>
    </>
  )
}

export default Star