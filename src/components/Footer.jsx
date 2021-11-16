const Footer = (props) => {
  return (
    <div className="d-flex justify-content-around">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
        alt="github image"
        className="github"
      />
      <div className="d-flex justify-content-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
          alt="linkedIn logo"
          className="linkedIn"
        />
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <a href="https://www.linkedin.com/in/aeronbarajas/">
            <p className="linkedInName">Aeron</p>
          </a>
          <a href="https://www.linkedin.com/in/jack-mayer-se/">
            <p className="linkedInName">Jackie</p>
          </a>
          <a href="https://www.linkedin.com/in/jaredmalabed/">
            <p className="linkedInName">Jared</p>
          </a>
          <a href="https://www.linkedin.com/in/jordan-r-marks/">
            <p className="linkedInName">Jordan</p>
          </a>
          <a href="https://www.linkedin.com/in/kathryn-butler/">
            <p className="linkedInName">Kathryn</p>
          </a>
          <a href="https://www.linkedin.com/in/khooshali-magoo/">
            <p className="linkedInName">Khooshali</p>
          </a>
          <a href="https://www.linkedin.com/in/noam-blanks/">
            <p className="linkedInName">Noam</p>
          </a>
          <a href="https://www.linkedin.com/in/sullivan-mortimer/">
            <p className="linkedInName">Sully</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
