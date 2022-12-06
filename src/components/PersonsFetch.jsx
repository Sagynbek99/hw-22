
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getButtonHandler } from '../store/reducers/getUsers'
import PersonItem from './PersonItem'

function PersonsFetch() {
    const {persons} = useSelector((state) => state.person)
    console.log(persons);
   
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getButtonHandler());
  }, [dispatch]);

    
    

  return (
    <div>
 
  <PersonItem/>
    </div>
  )
}

export default PersonsFetch