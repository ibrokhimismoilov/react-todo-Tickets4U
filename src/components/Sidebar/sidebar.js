import React from 'react';
import SidebarForm from '../SidebarForm';
// import SidebarTravelBtns from '../SidebarTravelBtns';

export default function Sidebar({setData}) {
    return (
        <React.Fragment>
            <div className="logo">
                <span className="logo-text">Tickets4U</span>
            </div>
            {/* <SidebarTravelBtns /> */}
            <SidebarForm setData={setData} />
        </React.Fragment>
    )
}
