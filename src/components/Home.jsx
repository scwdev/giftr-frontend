

const Home = (props) => {
  return (
    <div>
      <div className='home-index' style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/snow.jpg')`,
        backgroundPosition: "bottom",
        backgroundSize: "fill"
      }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <div className="title-line">
        {/* <h1 className="title">Giftr</h1> &nbsp; &nbsp; */}
        <img className='titleimg' src={process.env.PUBLIC_URL + '/images/Giftr3.png'} alt=""/>
        &nbsp; &nbsp;
        <img className='giftrimg' src={process.env.PUBLIC_URL + '/images/Giftr.png'} alt=""/>
        </div>
        <p className="tagline"></p>
      </div>
    </div>
  );
};
export default Home;
