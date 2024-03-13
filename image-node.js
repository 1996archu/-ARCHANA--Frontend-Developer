import "./image-node.css";

const ImageNode = () => {
  return (
    <div className="image-node">
      <div className="vector-node">
        <h1 className="faq">FAQ</h1>
      </div>
      <img
        className="image-1-icon"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="ellipse-node">
        <div className="triangle-node">
          <div className="star-node">
            <div className="star-node-child" />
            <div className="polygon-node">1</div>
            <div className="why-choose-savior">Why choose "Savior"?</div>
            <img
              className="eparrow-down-bold-icon1"
              alt=""
              src="/eparrowdownbold-1.svg"
            />
          </div>
          <div className="frames-node">
            <div className="layout-parent">
              <div className="layout-parent-child" />
              <div className="grid-system">2</div>
              <div className="why-is-the">Why is the IDO duration so long?</div>
              <img
                className="eparrow-down-bold-icon2"
                alt=""
                src="/eparrowdownbold-2.svg"
              />
            </div>
            <div className="layout-parent1">
              <div className="layout-parent-item" />
              <div className="div2">3</div>
              <div className="when-will-trading">
                When will trading go live?
              </div>
              <img
                className="eparrow-down-bold-icon3"
                alt=""
                src="/eparrowdownbold-2.svg"
              />
            </div>
            <div className="auto-layout-node">
              <div className="auto-layout-node-child" />
              <div className="constraints-parent">
                <div className="guides-parent">
                  <div className="fills-parent">4</div>
                  <div className="when-can-we">
                    When can we claim the tokens?
                  </div>
                </div>
              </div>
              <img
                className="eparrow-down-bold-icon4"
                alt=""
                src="/eparrowdownbold-4.svg"
              />
              <div className="input-filter">
                <div className="input-filter-child" />
                <h3 className="after-the-ido-container">
                  <p className="after-the-ido">
                    After the IDO concludes, you can claim the tokens on our
                    official website.
                  </p>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageNode;
