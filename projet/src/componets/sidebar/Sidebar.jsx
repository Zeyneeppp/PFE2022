import React from 'react'
import './Sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Link} from "react-router-dom"



function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/LogoNAFTAL.svg" alt='' className="Logonaftal" />
            <Link to="/home" style={{textDecoration :"none"}}>
            <span className="logo">Network Manager</span>
            </Link>
            
        </div>
        <div className='center'>
            <ul>
                <p className='title'>NETWORK MANAGER
                <p className='sous_title'> Dashboard et Widgets</p></p>
                <Link to = '/home' style={{textDecoration :"none"}} >
                <li>
                    <DashboardOutlinedIcon className='icon' style={{textDecoration :"none"}}/>
                    <span>Dashboard</span>
                </li>
                <Link to= "/Notifications" style={{textDecoration : "none"}}>
                    <li >
                        <NotificationsNoneOutlinedIcon className='icon' style={{textDecoration :"none"}}/>
                        <span>Notifications</span>
                        {/* <div className="counter">1</div> */}
                    </li>
                </Link>
                
                </Link>
                <p className='title'>Main
                <p className='sous_title'> les application</p></p>
                <Link to="/users" style={{textDecoration :"none"}}>
                    <li>
                        <GroupOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </Link>
                <Link to="/users" style={{textDecoration :"none"}}>
                    <li>
                        <QueryStatsIcon className='icon'/>
                        <span>Statiqtique</span>
                    </li>
                </Link>
                <Link to="/" style={{textDecoration :"none"}}>
                    {/* <li>
                        <SettingsOutlinedIcon className='icon'/>
                        <span>Settings</span>
                    </li> */}
                </Link>
               
                
                {/* <p className='title'>Branches
                <p className='sous_title'> Les branches</p>
                </p>
                <Link to="database" style={{textDecoration :"none"}}>
                    <li>
                        <span>CBR</span>
                    </li>
                </Link>
                <Link to="/database" style={{textDecoration :"none"}}>
                    <li>
                        <span>COM</span>
                    </li>
                </Link>
                <Link to="/database" style={{textDecoration :"none"}}>
                    <li>
                        <span>GPL</span>
                    </li>
                </Link> */}
				<p className="title">Liaisons</p>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>Global</span>
						</li>
					</Link>
					<Link to="/Try" style={{ textDecoration: "none" }}>
						<li>
							<span>Try</span>
						</li>
					</Link>
					<Link to="/ooredoo" style={{ textDecoration: "none" }}>
						<li>
							<span>Ooredoo</span>
						</li>
					</Link>
					<Link to="/mobilis" style={{ textDecoration: "none" }}>
						<li>
							<span>Mobilis</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>4G LTE</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>VPN</span>
						</li>
					</Link>
        
               
               
            </ul>

					{/* <p className="title">
						Branches
						<p className="sous_title"> Les branches</p>
					</p>
					<Link to="database" style={{ textDecoration: "none" }}>
						<li>
							<span>CBR</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>COM</span>
						</li>
					</Link>
					<Link to="/database" style={{ textDecoration: "none" }}>
						<li>
							<span>GPL</span>
						</li>
					</Link> */}

					
				
			</div>
		</div>
	);
}

export default Sidebar;
