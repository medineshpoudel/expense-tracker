/* eslint-disable max-len */
// eslint-disable-next-line arrow-body-style
// import image from '/images/landing-image.jpeg';

const Landing = () => {
  console.log('hi');
  return (
    <div className="content-wrapper">
      <header className="landing-header">
        <div className="header-content">
          <div className="content">
            <h1>Control your expenses better than your competition.</h1>
            <h2> This is where you can always find the competitive advantage.</h2>
          </div>
          <div className="header-iamge">
            <img
              // src="https://www.founderjar.com/wp-content/uploads/2021/12/landing-page-examples.jpeg"
              src="/images/landing-image.jpeg"
              alt="landingImg"
            />
          </div>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 200" className="landing-wave">
            <path
              fill="#f3f4f5"
              fillOpacity="1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </header>
    </div>
  );
};

export default Landing;
