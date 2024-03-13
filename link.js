import "./link.css";

const Link = ({
  divWrapperStyledWrapperSc,
  phase3,
  communityBuildingAndMarke,
}) => {
  return (
    <div className="link6">
      <div className="pseudo12" />
      <div className="image-processor">
        <div className="pseudo13" />
        <img
          className="divwrapper-styledwrapper-sc-icon6"
          loading="lazy"
          alt=""
          src={divWrapperStyledWrapperSc}
        />
        <div className="divbox-sc-xeb524-010" />
      </div>
      <h1 className="phase-31">{phase3}</h1>
      <h2 className="community-building-and1">{communityBuildingAndMarke}</h2>
    </div>
  );
};

export default Link;
