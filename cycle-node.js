import "./cycle-node.css";

const CycleNode = () => {
  return (
    <section className="cycle-node">
      <img className="dead-end-node" alt="" src="/dead-end-node@2x.png" />
      <img className="group-icon" alt="" src="/group.svg" />
      <img className="group-icon1" alt="" src="/group-1.svg" />
      <img className="group-icon2" alt="" src="/group-2.svg" />
      <img className="group-icon3" alt="" src="/group-3.svg" />
      <img className="group-icon4" alt="" src="/group-4.svg" />
      <img className="group-icon5" alt="" src="/group-5.svg" />
      <div className="input-output-nodes">
        <img className="processor-nodes-icon" alt="" />
        <img className="filter-nodes-icon" alt="" src="/vector-1.svg" />
      </div>
      <div className="sorting-nodes">
        <img className="search-nodes-icon" alt="" />
        <img className="matching-nodes-icon" alt="" src="/vector-3.svg" />
      </div>
      <div className="counting-nodes">
        <img className="aggregating-nodes-icon" loading="lazy" alt="" />
        <img className="calculating-nodes-icon" alt="" src="/vector-5.svg" />
      </div>
      <div className="transforming-nodes">
        <img className="storing-nodes-icon" alt="" />
        <img
          className="retrieving-nodes-icon"
          loading="lazy"
          alt=""
          src="/vector-7.svg"
        />
      </div>
      <div className="displaying-nodes">
        <img className="hiding-nodes-icon" alt="" />
        <img
          className="iterating-nodes-icon"
          loading="lazy"
          alt=""
          src="/vector-9.svg"
        />
      </div>
      <div className="conditional-nodes">
        <img className="control-flow-nodes" alt="" />
        <img
          className="data-hub-icon"
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
      </div>
      <img
        className="logo-savior-red-copy-2"
        alt=""
        src="/logo-savior-red-copy-2@2x.png"
      />
    </section>
  );
};

export default CycleNode;
