import { useState } from "react";
import "./RegistrationsGoogle.css";

function RegistrationsGoogle() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    district: "",
    address: "",
    whatsappNumber: "",
    aiesecEmail: "",
    nicNumber: "",
    entity: "",
    usjFO: "",
    usjBOs: [],
    highestRoleUSJ: "",
    faculty: "",
    saegisFO: "",
    saegisBOs: [],
    saegisRole: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    foodPreference: "",
    morningTransport: "",
    eveningTransport: "",
    healthInfo: "",
    expectations: "",
    excitement: "5",
    privacyConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && (name === "usjBOs" || name === "saegisBOs")) {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Google Form action URL
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSct9URSS2ypheZgYzA_5obO49W9Xck7DQfG2R2kw1f6RR50WA/formResponse";

    // Create form data with actual entry IDs from the Google Form
    const submitData = new FormData();

    // Map form fields to Google Form entry IDs
    submitData.append("entry.1080191722", formData.name);
    submitData.append("entry.625335100", formData.gender);
    submitData.append("entry.363736687", formData.district);
    submitData.append("entry.1719273761", formData.address);
    submitData.append("entry.1668284081", formData.whatsappNumber);
    if (formData.aiesecEmail) {
      submitData.append("entry.1492899860", formData.aiesecEmail);
    }
    submitData.append("entry.421076545", formData.nicNumber);
    submitData.append("entry.446184937", formData.entity);

    // USJ specific fields
    if (formData.entity === "USJ") {
      submitData.append("entry.1390371188", formData.usjFO);
      if (formData.usjBOs.length > 0) {
        formData.usjBOs.forEach((bo) => {
          submitData.append("entry.44582473", bo);
        });
      }
      submitData.append("entry.1776633913", formData.highestRoleUSJ);
      submitData.append("entry.989986619", formData.faculty);
    }

    // Saegis specific fields
    if (formData.entity === "Saegis") {
      submitData.append("entry.1753135251", formData.saegisFO);
      if (formData.saegisBOs.length > 0) {
        formData.saegisBOs.forEach((bo) => {
          submitData.append("entry.12113783", bo);
        });
      }
      if (formData.saegisRole) {
        submitData.append("entry.531573405", formData.saegisRole);
      }
    }

    // Emergency and preferences
    submitData.append("entry.865219202", formData.emergencyContactName);
    submitData.append("entry.1320277898", formData.emergencyContactNumber);
    submitData.append("entry.1961249007", formData.foodPreference);
    submitData.append("entry.1761927026", formData.morningTransport);
    submitData.append("entry.2045422274", formData.eveningTransport);
    if (formData.healthInfo) {
      submitData.append("entry.1617731232", formData.healthInfo);
    }
    submitData.append("entry.270853510", formData.expectations);
    submitData.append("entry.2089893456", formData.excitement);

    // Privacy consent
    if (formData.privacyConsent) {
      submitData.append(
        "entry.1506048730",
        "I have read and agree to AIESEC Sri Lanka's Privacy Policy and I may be contacted by AIESEC representatives for further processing. I like to proceed."
      );
    }

    // Debug: Log what we're sending
    console.log("Submitting form data:");
    for (let [key, value] of submitData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: submitData,
      });

      setSubmitStatus("success");
      // Reset form
      setFormData({
        name: "",
        gender: "",
        district: "",
        address: "",
        whatsappNumber: "",
        aiesecEmail: "",
        nicNumber: "",
        entity: "",
        usjFO: "",
        usjBOs: [],
        highestRoleUSJ: "",
        faculty: "",
        saegisFO: "",
        saegisBOs: [],
        saegisRole: "",
        emergencyContactName: "",
        emergencyContactNumber: "",
        foodPreference: "",
        morningTransport: "",
        eveningTransport: "",
        healthInfo: "",
        expectations: "",
        excitement: "5",
        privacyConsent: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const districts = [
    "Colombo",
    "Kandy",
    "Gampaha",
    "Kalutara",
    "Nuwara Eliya",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Kilinochchi",
    "Mannar",
    "Vavuniya",
    "Mullaitivu",
    "Batticaloa",
    "Ampara",
    "Trincomalee",
    "Kurunegala",
    "Puttalam",
    "Anuradhapura",
    "Polonnaruwa",
    "Badulla",
    "Monaragala",
    "Ratnapura",
    "Kegalle",
    "Matale",
  ];

  const usjFOs = [
    "iGV B2B",
    "iGV CXP",
    "iGV M & IR",
    "iGT B2B & CXP",
    "iGT M & IR",
    "oGV B2C",
    "oGV PS",
    "oGT B2C",
    "oGT PS",
  ];

  const usjBOsList = [
    "ED",
    "BD",
    "F&L",
    "Marketing",
    "PR & IM",
    "TM",
    "I don't have a back office :(",
  ];

  const usjRoles = [
    "LCP",
    "LCVP",
    "Specialist",
    "Manager",
    "Team Leader",
    "Member",
    "Newbie",
  ];

  const faculties = [
    "Allied Health Sciences",
    "Applied Sciences",
    "Computing",
    "Engineering",
    "Humanities and Social Sciences",
    "Management Studies and Commerce",
    "Technology",
    "Urban and Aquatic Bioresources",
  ];

  const saegisFOs = ["oGV", "oGT"];

  const saegisBOsList = [
    "TM",
    "BD",
    "Product Marketing",
    "Brand Marketing",
    "I don't have a back office :(",
  ];

  const saegisRoles = ["IGP", "IGVP", "Team Leader", "Member", "Newbie"];

  return (
    <div className="registrations-google-page">
      <div className="register-header">
        <h1>Register for JXLDS 14.0</h1>
        <p>Fill out the form below to secure your spot</p>
      </div>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="custom-registration-form">
          {/* Personal Information */}
          <section className="form-section">
            <h2>Personal Information</h2>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Gender *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="gender"
                    value="Prefer not to say/Other"
                    checked={formData.gender === "Prefer not to say/Other"}
                    onChange={handleChange}
                  />
                  Prefer not to say/Other
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="district">District *</label>
              <select
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address *</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsappNumber">WhatsApp Number *</label>
              <input
                type="tel"
                id="whatsappNumber"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="+94XXXXXXXXX"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="aiesecEmail">AIESEC Email</label>
              <input
                type="email"
                id="aiesecEmail"
                name="aiesecEmail"
                value={formData.aiesecEmail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="nicNumber">NIC Number *</label>
              <input
                type="text"
                id="nicNumber"
                name="nicNumber"
                value={formData.nicNumber}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* Entity Information */}
          <section className="form-section">
            <h2>Entity Information</h2>

            <div className="form-group">
              <label>Entity *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="entity"
                    value="USJ"
                    checked={formData.entity === "USJ"}
                    onChange={handleChange}
                    required
                  />
                  USJ
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="entity"
                    value="Saegis"
                    checked={formData.entity === "Saegis"}
                    onChange={handleChange}
                  />
                  Saegis
                </label>
              </div>
            </div>

            {/* USJ Fields */}
            {formData.entity === "USJ" && (
              <>
                <div className="form-group">
                  <label htmlFor="usjFO">USJ F/O *</label>
                  <select
                    id="usjFO"
                    name="usjFO"
                    value={formData.usjFO}
                    onChange={handleChange}
                    required={formData.entity === "USJ"}
                  >
                    <option value="">Select F/O</option>
                    {usjFOs.map((fo) => (
                      <option key={fo} value={fo}>
                        {fo}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>USJ B/Os</label>
                  <div className="checkbox-group">
                    {usjBOsList.map((bo) => (
                      <label key={bo} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="usjBOs"
                          value={bo}
                          checked={formData.usjBOs.includes(bo)}
                          onChange={handleChange}
                        />
                        {bo}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="highestRoleUSJ">Highest Role USJ *</label>
                  <select
                    id="highestRoleUSJ"
                    name="highestRoleUSJ"
                    value={formData.highestRoleUSJ}
                    onChange={handleChange}
                    required={formData.entity === "USJ"}
                  >
                    <option value="">Select Role</option>
                    {usjRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Faculty *</label>
                  <div className="radio-group vertical">
                    {faculties.map((faculty) => (
                      <label key={faculty} className="radio-label">
                        <input
                          type="radio"
                          name="faculty"
                          value={faculty}
                          checked={formData.faculty === faculty}
                          onChange={handleChange}
                          required={formData.entity === "USJ"}
                        />
                        {faculty}
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Saegis Fields */}
            {formData.entity === "Saegis" && (
              <>
                <div className="form-group">
                  <label htmlFor="saegisFO">Saegis F/O *</label>
                  <select
                    id="saegisFO"
                    name="saegisFO"
                    value={formData.saegisFO}
                    onChange={handleChange}
                    required={formData.entity === "Saegis"}
                  >
                    <option value="">Select F/O</option>
                    {saegisFOs.map((fo) => (
                      <option key={fo} value={fo}>
                        {fo}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Saegis B/O</label>
                  <div className="checkbox-group">
                    {saegisBOsList.map((bo) => (
                      <label key={bo} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="saegisBOs"
                          value={bo}
                          checked={formData.saegisBOs.includes(bo)}
                          onChange={handleChange}
                        />
                        {bo}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="saegisRole">Saegis Role</label>
                  <select
                    id="saegisRole"
                    name="saegisRole"
                    value={formData.saegisRole}
                    onChange={handleChange}
                  >
                    <option value="">Select Role</option>
                    {saegisRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </section>

          {/* Emergency Contact */}
          <section className="form-section">
            <h2>Emergency Contact</h2>

            <div className="form-group">
              <label htmlFor="emergencyContactName">
                Emergency Contact Name *
              </label>
              <input
                type="text"
                id="emergencyContactName"
                name="emergencyContactName"
                value={formData.emergencyContactName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="emergencyContactNumber">
                Emergency Contact Number *
              </label>
              <input
                type="tel"
                id="emergencyContactNumber"
                name="emergencyContactNumber"
                value={formData.emergencyContactNumber}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* Event Preferences */}
          <section className="form-section">
            <h2>Event Preferences</h2>

            <div className="form-group">
              <label htmlFor="foodPreference">Food Preference *</label>
              <select
                id="foodPreference"
                name="foodPreference"
                value={formData.foodPreference}
                onChange={handleChange}
                required
              >
                <option value="">Select Preference</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="morningTransport">Morning Transport *</label>
              <select
                id="morningTransport"
                name="morningTransport"
                value={formData.morningTransport}
                onChange={handleChange}
                required
              >
                <option value="">Select Option</option>
                <option value="Option 1 - Own Transport">
                  Option 1 - Own Transport
                </option>
                <option value="Option 2 - By the provided bus">
                  Option 2 - By the provided bus
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eveningTransport">Evening Transport *</label>
              <select
                id="eveningTransport"
                name="eveningTransport"
                value={formData.eveningTransport}
                onChange={handleChange}
                required
              >
                <option value="">Select Option</option>
                <option value="Option 1 - Own Transport">
                  Option 1 - Own Transport
                </option>
                <option value="Option 2 - By the provided bus">
                  Option 2 - By the provided bus
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="healthInfo">
                Do you have any illnesses, allergies, or phobias that we should
                be aware of?
              </label>
              <textarea
                id="healthInfo"
                name="healthInfo"
                value={formData.healthInfo}
                onChange={handleChange}
                rows="3"
                placeholder="If so, please state them here..."
              />
            </div>
          </section>

          {/* Feedback */}
          <section className="form-section">
            <h2>Your Thoughts</h2>

            <div className="form-group">
              <label htmlFor="expectations">
                We would love to know your expectations or suggestions for this
                edition JXLDS. *
              </label>
              <textarea
                id="expectations"
                name="expectations"
                value={formData.expectations}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="excitement">
                How excited are you for JXLDS 14.0? * (1 = Lameee, 10 = Super
                Excited)
              </label>
              <div className="slider-container">
                <span>1</span>
                <input
                  type="range"
                  id="excitement"
                  name="excitement"
                  min="1"
                  max="10"
                  value={formData.excitement}
                  onChange={handleChange}
                  className="excitement-slider"
                />
                <span>10</span>
              </div>
              <div className="slider-value">
                Selected: {formData.excitement}
              </div>
            </div>
          </section>

          {/* Privacy Consent */}
          <section className="form-section">
            <h2>Privacy Disclosure</h2>

            <div className="form-group">
              <label className="checkbox-label consent-label">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I have read and agree to AIESEC Sri Lanka's{" "}
                  <a
                    href="https://www.aiesec.lk/privacy-and-cookie-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>{" "}
                  and I may be contacted by AIESEC representatives for further
                  processing. I like to proceed. *
                </span>
              </label>
            </div>
          </section>

          {/* Submit Status */}
          {submitStatus === "success" && (
            <div className="submit-message success">
              ✓ Registration submitted successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="submit-message error">
              ✗ There was an error submitting your registration. Please try
              again.
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationsGoogle;
