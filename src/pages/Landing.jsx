import Wrapper from '../assets/wrappers/LandingPage';
import main from '../../src/assets/images/main.svg';
import logo from '../../src/assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            placeholder placeholderplaceholderplaceholderplaceholderplaceholder
            placeholder placeholder placeholder placeholder placeholder
            placeholder placeholder placeholder placeholder placeholder
          </p>
          <Link to="/regiter" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" />
      </div>
    </Wrapper>
  );
};

export default Landing;
