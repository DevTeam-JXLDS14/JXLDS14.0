import Card from "../components/Card";
import { facilitators } from "../data/facilitators";
import "./Facilitators.css";

function Facilitators() {
  const chair = facilitators.find((f) => f.expertise === "To be Revealed");
  const otherFacilitators = facilitators.filter(
    (f) => f.expertise !== "To be Revealed"
  );

  return (
    <div className="facilitators-page">
      <div className="page-header">
        <h1>Our Facilitators</h1>
        <p>Learn from experienced leaders and experts</p>
      </div>

      <div className="team-intro">
        <p>
          JXLDS 14.0 brings together accomplished facilitators who are experts
          in their fields. Through interactive sessions and workshops, they'll
          guide you on your leadership journey and share valuable insights
          from their experience.
        </p>
      </div>

      {chair && (
        <div className="role-section">
          <div className="container">
            <h2 className="role-title">Conference Chair Person</h2>
            <div className="cards-grid">
              <Card
                image={chair.image}
                name={chair.name}
                role={chair.expertise}
                bio={chair.bio}
                isChair={true}
              />
            </div>
          </div>
        </div>
      )}

      {otherFacilitators.length > 0 && (
        <div className="role-section">
          <div className="container">
            <h2 className="role-title">Facilitators</h2>
            <div className="cards-grid">
              {otherFacilitators.map((facilitator, index) => (
                <Card
                  key={index}
                  image={facilitator.image}
                  name={
                    <>
                      {facilitator.name.split(" ")[0]}
                      <br />
                      {facilitator.name.split(" ").slice(1).join(" ")}
                    </>
                  }
                  role={facilitator.expertise}
                  bio={facilitator.bio}
                  instagram={facilitator.instagram}
                  linkedin={facilitator.linkedin}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Facilitators;
