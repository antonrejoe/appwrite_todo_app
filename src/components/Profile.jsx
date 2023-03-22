import React from 'react'
import { useNavigate } from 'react-router-dom'
import {account}  from "../appwrite/appwriteConfig.ts";


const Profile = () => {

  const navigate = useNavigate();

  const [userDetails, setuserDetails] = useState();

  useEffect(() => {
    const getData = account.get();
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <div>Profile</div>
  )
}

export default Profile