const Footer = (props) => {
  return (
    <div className="">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
        alt="github image"
      />
      <div className="d-flex">
        <img
          src="https://cdn-icons-png.flaticon.com/512/38/38669.png"
          alt="linkedIn logo"
          className=""
        />
        <div className="d-flex flex-column">
          <a href="https://www.linkedin.com/in/jaredmalabed/">
            <p>Jared</p>
          </a>
          <a href="https://www.linkedin.com/in/jack-mayer-se/">
            <p>Jackie</p>
          </a>
          <a href="https://www.linkedin.com/in/aeronbarajas/">
            <p>Aeron</p>
          </a>
          <a href="https://www.linkedin.com/in/noam-blanks/">
            <p>Noam</p>
          </a>
          <a href="https://www.linkedin.com/in/jordan-r-marks/">
            <p>Jordan</p>
          </a>
          <a href="https://www.linkedin.com/in/kathryn-butler/">
            <p>Kathryn</p>
          </a>
          <a href="https://www.linkedin.com/in/khooshali-magoo/">
            <p>Khooshali</p>
          </a>
          <a href="https://www.linkedin.com/in/sullivan-mortimer/">
            <p>Sully</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
