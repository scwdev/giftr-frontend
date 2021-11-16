

const Home = (props) => {
  return (
    <div className='home-index' style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/bg1.png')`,
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
      <div className="title-line">
      <h1 className="title">Giftr</h1> &nbsp; &nbsp;
      <img className='giftrimg' src={process.env.PUBLIC_URL + '/images/Giftr2d.png'} alt=""/>
      </div>
      <p className="tagline">Giftr is...</p>
    </div>
  );
};
export default Home;
