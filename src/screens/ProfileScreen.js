import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'


function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://cdn-icons-png.flaticon.com/512/8104/8104575.png" alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans (Current Plan: premium)</h3>
                            <h4>Renewal date: 31/07/2023</h4>

                            {/* <div className='profileScreen__planDetails'>
                                <div className="profileScreen__planDetail">
                                    <div>
                                        <h5>Netflix Standard</h5>
                                        <h6>1080p</h6>
                                    </div>
                                    <button>Subscribe</button>
                                </div>
                            </div> */}

                            <button 
                                onClick={() => auth.signOut()}
                                className='profileScreen__signOut'>
                                    Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen