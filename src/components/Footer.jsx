import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="footer">

      <span className='inlinefooter'> 

       &nbsp; &nbsp;
      <a class="link" target="_blank" href="https://github.com/scwdev/giftr-frontend">
      <img className='footerlinks' src={process.env.PUBLIC_URL + '/images/githubSanta.png'} alt="github logo"/>
      </a>
      &nbsp; &nbsp;
      <Link to='/about'>
      <img className='footerlinks' src={process.env.PUBLIC_URL + '/images/linkedinSanta.png'} alt="linkedIn logo"/>
      </Link>

      </span> 
    
    </div>
  );
};
export default Footer;
