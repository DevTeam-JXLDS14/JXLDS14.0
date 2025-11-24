import Card from "../components/Card";
import { facilitators } from "../data/facilitators";
import "./Facilitators.css";

function Facilitators() {
  return (
    <div className="facilitators-page">
      <div className="page-header">
        <h1>Our Facilitators</h1>
        <p>Learn from experienced leaders and experts</p>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            JXLDS 14.0 brings together accomplished facilitators who are experts
            in their fields. Through interactive sessions and workshops, they'll
            guide you on your leadership journey and share valuable insights
            from their experience.
          </p>
        </div>

        <div className="cards-grid">
          {facilitators.map((facilitator, index) => (
            <Card
              key={index}
              image={facilitator.image}
              name={facilitator.name}
              role={facilitator.expertise}
              bio={facilitator.bio}
              isChair={facilitator.isChair}
              isEmoji={facilitator.isEmoji}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facilitators;
