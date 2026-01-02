import Card from "../components/Card";
import { ocMembers } from "../data/ocMembers";
import "./OrganizingCommittee.css";

function OrganizingCommittee() {
  const roles = [
    "Organizing Committee President",
    "Organizing Committee Vice President Finance",
    "Organizing Committee Vice President Partnership Development",
    "Organizing Committee Vice President Logistics",
    "Organizing Committee Vice President Delegates",
    "Organizing Committee Vice President Events",
    "Organizing Committee Vice President Marketing",
  ];

  return (
    <div className="oc-page">
      <div className="page-header">
        <img
          src="/images/OC Logo Yellow.webp"
          alt="OC Logo"
          className="oc-logo"
        />
        <h1>Organizing Committee</h1>
        <p>Meet the dedicated team behind JXLDS 14.0</p>
      </div>

      <div className="team-intro">
        <p>
          Our Organizing Committee comprises passionate individuals committed to creating an exceptional leadership experience. Each member brings unique skills and dedication to make JXLDS 14.0 transformative for all participants.
        </p>
      </div>

      {roles.map((role) => {
        const members = ocMembers.filter((m) => m.role === role);
        if (members.length === 0) return null;

        return (
          <div key={role} className="role-section">
          <div className="container">
            <h2 className="role-title">{role}</h2>
            <div className="cards-grid">
              {members.map((member, index) => (
                <Card
                  key={index}
                  image={member.image}
                  
                  name={
                    <>
                      {member.name.split(" ")[0]}
                      <br />
                      {member.name.split(" ").slice(1).join(" ")}
                    </>
                  }
                  
                  instagram={member.instagram}
                  linkedin={member.linkedin}
                />
              ))}
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default OrganizingCommittee;
