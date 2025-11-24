import Card from '../components/Card';
import { ocMembers } from '../data/ocMembers';
import './OrganizingCommittee.css';

function OrganizingCommittee() {
  return (
    <div className="oc-page">
      <div className="page-header">
        <h1>Organizing Committee</h1>
        <p>Meet the dedicated team behind JXLDS 14.0</p>
      </div>

      <div className="container">
        <div className="team-intro">
          <p>
            Our Organizing Committee comprises passionate individuals committed to creating 
            an exceptional leadership experience. Each member brings unique skills and 
            dedication to make JXLDS 14.0 transformative for all participants.
          </p>
        </div>

        <div className="cards-grid">
          {ocMembers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrganizingCommittee;
