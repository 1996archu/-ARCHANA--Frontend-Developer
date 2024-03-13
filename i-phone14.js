import CycleNode from "../components/cycle-node";
import TextCollection from "../components/text-collection";
import FrameComponent2 from "../components/frame-component2";
import DictionaryNode from "../components/dictionary-node";
import FunctionNode from "../components/function-node";
import ImageNode from "../components/image-node";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import WhileLoopNode from "../components/while-loop-node";
import "./i-phone14.css";

const IPhone14 = () => {
  return (
    <div className="iphone-14-5">
      <section className="leaf-node">
        <img className="parent-node-icon" alt="" src="/parent-node@2x.png" />
        <img
          className="logo-savior-red-copy-1"
          loading="lazy"
          alt=""
          src="/logo-savior-red-copy-1@2x.png"
        />
        <img
          className="child-nodes-icon"
          loading="lazy"
          alt=""
          src="/frame-1798.svg"
        />
      </section>
      <header className="connection-node">
        <div className="container-node">
          <div className="saviour">Saviour</div>
        </div>
        <button className="output-node">
          <div className="connect-wallet">Connect Wallet</div>
        </button>
      </header>
      <h1 className="introduction">Introduction</h1>
      <img
        className="brick-matrix-generate-a-logo-c-icon"
        alt=""
        src="/brick-matrix-generate-a-logo-concept-that-visually-represents-t-9df3d56e2aaa42b8add901ba1b656499-2@2x.png"
      />
      <img className="branch-node-icon" alt="" src="/branch-node@2x.png" />
      <img className="branch-node-icon1" alt="" src="/branch-node@2x.png" />
      <div className="iphone-14-5-child" />
      <section className="descendant-nodes">
        <img
          className="adjacent-nodes-icon"
          loading="lazy"
          alt=""
          src="/rectangle-20@2x.png"
        />
        <div className="cluster-nodes" />
      </section>
      <div className="iphone-14-5-item" />
      <div className="iphone-14-5-inner" />
      <div className="ellipse-div" />
      <h1 className="participate-in-our">Participate in our IDO Event!</h1>
      <section className="composite-node">
        <h1 className="weve-all-been-container">
          <p className="weve-all-been">{`We've all been in the mud once, and now we've decided to fight it out. Pay tribute to those pioneers of WEB3 and the warriors who dedicated their love to the blockchain. Save the lucky ones alive, join us to save the future! `}</p>
          <p className="our-mission-is">
            Our mission is to empower everyone to share wealth and succeed.
          </p>
          <p className="read-more">read more...</p>
          <p className="blank-line">&nbsp;</p>
        </h1>
        <div className="flattened-node">
          <div className="intermediate-node">
            <div className="documents">Documents</div>
            <div className="anchor-node">
              <img
                className="eparrow-down-bold-icon"
                alt=""
                src="/eparrowdownbold.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="become-an-affiliate">{`Become an affiliate & Earn 7% as Commission!`}</section>
      <input className="fluentcopy-16-filled" type="checkbox" />
      <CycleNode />
      <img className="branch-node-icon2" alt="" src="/branch-node@2x.png" />
      <TextCollection />
      <FrameComponent2 />
      <section className="section">
        <div className="divelementor-container" />
        <h1 className="where-blockchain-heroes">
          Where Blockchain Heroes Thrive: Rescuing Dreams, Elevating Fortunes.
        </h1>
      </section>
      <section className="array-node">
        <DictionaryNode />
        <FunctionNode />
      </section>
      <section className="shape-node">
        <div className="text-node">
          <ImageNode />
          <FrameComponent1 />
        </div>
        <div className="shape-node-inner">
          <FrameComponent />
        </div>
      </section>
      <b className="if-statement-node">:</b>
      <WhileLoopNode />
    </div>
  );
};

export default IPhone14;
