import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import PianoOutlinedIcon from '@mui/icons-material/PianoOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './navbar.css';


const Navbar=()=>{
    return (
        <div className="Navbar">
         <div className="Part-1">
          <div className="ListName">
            <p>Damo</p>
          </div>
          <div className="Star-icon">
           <StarBorderOutlinedIcon color="inherit" fontSize="small" />
          </div>
          <div className="Visible">
            <p><GroupOutlinedIcon fontSize="small" /> workspace visible </p>
          </div>
          <div className="Customize-views">
           <button><PianoOutlinedIcon fontSize="small" />Board</button>
          </div>
          <div className='Arrowdown' >
           <KeyboardArrowDownOutlinedIcon fontSize="small"  />
          </div>
         </div>
         <div className="Part-2">
          <div className="power-ups">
           <p><RocketLaunchOutlinedIcon fontSize="small" />Power-ups</p>
          </div>
          <div className="Automation">
            <p><BoltOutlinedIcon fontSize="small" />Automation</p>
          </div>
          <div className="Filter">
            <p><FilterListOutlinedIcon fontSize="small" />Filter</p>
          </div>
          <div className="User-info-button">
           <button>V</button>
          </div>
          <div className="Share">
           <button><PersonAddAltOutlinedIcon fontSize="small" />Share</button>
          </div>
          <div className="manu-button">
          <MoreHorizOutlinedIcon fontSize="small" />
          </div>
         </div>

        </div>
    )
}

export default Navbar;