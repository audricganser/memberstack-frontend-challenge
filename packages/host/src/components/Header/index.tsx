import '../../App.css';
interface ColorProps {
  value: string;
}

const Header = ({ value }: ColorProps) => {
  return (
    <div className="container-nav">
        <img className="nav-logo-icon" src="https://assets-global.website-files.com/5bbfaf3252489b4c484ba9b9/5ebaa49f0273b95c1aab8d19_Logo%401000.png"></img>
        <div className="logo-text" style={{color: value}}>Memberstack Colors</div>
    </div>
  )
}

export default Header