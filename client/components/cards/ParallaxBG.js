const ParallaxBG = ({ url, children = "FinXco" }) => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url( " + url + " )",
        backgroundAttachment: "fixed",
        padding: "200px 0px 200px 0px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "block",
      }}
    >
      <h1 className="display-1 sha font-weight-bolder text-center">
        {children}
      </h1>
    </div>
  );
};

export default ParallaxBG;
