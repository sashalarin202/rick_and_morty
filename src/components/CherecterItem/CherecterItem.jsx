import React, {useState} from 'react';
import './CherecterItem.css'
import Modal from '../Modal/Modal';


export default function CherecterItem ({ item }) {
  const [modalActive, setModalActive] = useState(false)
  return (
    <>
    
      <div className="CherecterItem"onClick ={()=>setModalActive(true)}>
        <img className="CherecterImage" src={item.image} alt=''/>
        <div className="discription">
          <h2 className="discription_name white">{item.name}</h2>
          <span className="type">Type:</span>
          <p className="type_discr white">{item.type || 'Common'}</p>
          
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="Cherecter_item_modal">
          <img className="CherecterImage_modal" src={item.image} alt=''/>
          <div className="discription_modal">
            <h2 className="discription_name_modal white">{item.name}</h2>
            <span className="status_modal white">{item.status} - </span>
            <span className="species-modal white">{item.species}</span>
            <p className="last_location">Last known location:</p>
            <p className="location white">{item.location.name}</p>
            <span className='gender'>Gender: </span><span className='gender'>{item.gender}</span>
          </div>
        </div>
      </Modal>
    </>
  );
}

