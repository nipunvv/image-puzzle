import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      style={{ backgroundColor: '#282c34', color: 'white', width: '100%', display: 'flex' }}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1.5rem'}}>
        <div>PUZZLE</div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Link to='/upload' style={{fontSize: '1rem', color: 'white', textDecoration: 'none'}} >UPLOAD</Link>
        </div>
      </div>
    </div>
  );
}