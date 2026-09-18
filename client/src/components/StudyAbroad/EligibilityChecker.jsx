import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { countries } from '../../data/countries';
import { countryRequirements, educationLevels, englishTests, budgetRanges, fieldsOfStudy } from '../../data/eligibilityCriteria';

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    educationLevel: '',
    englishTest: '',
    englishScore: '',
    preferredCountry: '',
    budget: '',
    fieldOfStudy: '',
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkEligibility = (e) => {
    e.preventDefault();

    const countryData = countryRequirements[formData.preferredCountry];
    if (!countryData) return;

    let score = 0;
    const recommendations = [];
    const warnings = [];

    const testScore = parseFloat(formData.englishScore);
    const minScore = countryData[`min${formData.englishTest}`] || 0;

    if (testScore >= minScore) {
      score += 30;
      recommendations.push(`Your ${formData.englishTest} score meets the minimum requirement`);
    } else {
      warnings.push(`Your ${formData.englishTest} score (${testScore}) is below the minimum (${minScore})`);
    }

    if (formData.educationLevel === 'Bachelor\'s Degree' || formData.educationLevel === 'Master\'s Degree' || formData.educationLevel === 'PhD') {
      score += 25;
      recommendations.push('Your education level is suitable for this country');
    } else {
      score += 10;
      warnings.push('Your education level may limit university options');
    }

    if (formData.budget === '$20,000 - $30,000' || formData.budget === '$30,000 - $50,000' || formData.budget === 'Above $50,000') {
      score += 25;
      recommendations.push('Your budget is sufficient for most programs');
    } else {
      warnings.push('Your budget may be limited. Consider scholarship options');
    }

    score += 20;
    recommendations.push(`${countryData.postStudyWork} post-study work option available`);

    const country = countries.find(c => c.id === formData.preferredCountry);

    setResult({
      score: Math.min(score, 100),
      eligible: score >= 50,
      country: country,
      requirements: countryData,
      recommendations,
      warnings,
    });
  };

  return (
    <>
      <section className="py-5 eligibility-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="section-title">Check Your Eligibility for International Study</h2>
                <p className="section-subtitle">
                  Find out if you qualify for studying abroad. Fill in your details below.
                </p>
              </div>

              <div className="eligibility-form-card" data-aos="fade-up">
                <form onSubmit={checkEligibility}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Education Level *</label>
                      <select
                        className="form-select"
                        name="educationLevel"
                        value={formData.educationLevel}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Education Level</option>
                        {educationLevels.map((level) => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Preferred Country *</label>
                      <select
                        className="form-select"
                        name="preferredCountry"
                        value={formData.preferredCountry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.id} value={c.id}>{c.flag} {c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">English Test *</label>
                      <select
                        className="form-select"
                        name="englishTest"
                        value={formData.englishTest}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Test</option>
                        {englishTests.map((test) => (
                          <option key={test} value={test}>{test}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Test Score *</label>
                      <input
                        type="number"
                        step="0.5"
                        className="form-control"
                        name="englishScore"
                        value={formData.englishScore}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 6.5"
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Budget (Annual) *</label>
                      <select
                        className="form-select"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Budget</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Field of Study</label>
                      <select
                        className="form-select"
                        name="fieldOfStudy"
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                      >
                        <option value="">Select Field</option>
                        {fieldsOfStudy.map((field) => (
                          <option key={field} value={field}>{field}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-warning btn-lg w-100">
                        Check My Eligibility
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Results */}
              {result && (
                <div className="eligibility-result mt-5" data-aos="fade-up">
                  <div className={`result-header ${result.eligible ? 'eligible' : 'not-eligible'}`}>
                    <h3>
                      {result.eligible ? (
                        <>
                          <i className="bi bi-check-circle-fill me-2"></i>
                          You Appear Eligible!
                        </>
                      ) : (
                        <>
                          <i className="bi bi-exclamation-circle-fill me-2"></i>
                          You May Need Additional Preparation
                        </>
                      )}
                    </h3>
                    <div className="score-circle">
                      <span className="score-number">{result.score}</span>
                      <span className="score-label">Score</span>
                    </div>
                  </div>

                  <div className="result-body">
                    {result.country && (
                      <div className="result-country-info mb-4">
                        <h4>{result.country.flag} {result.country.name} Requirements</h4>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <p><strong>Minimum {formData.englishTest}:</strong> {result.requirements[`min${formData.englishTest}`]}</p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>Post-Study Work:</strong> {result.requirements.postStudyWork}</p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>Average Tuition:</strong> {result.requirements.avgTuition}</p>
                          </div>
                          <div className="col-md-6">
                            <p><strong>PR Eligible:</strong> {result.requirements.prEligible ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {result.recommendations.length > 0 && (
                      <div className="recommendations mb-3">
                        <h5 className="text-success">
                          <i className="bi bi-check-circle me-2"></i>Positive Factors
                        </h5>
                        <ul>
                          {result.recommendations.map((rec, i) => (
                            <li key={i}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {result.warnings.length > 0 && (
                      <div className="warnings mb-3">
                        <h5 className="text-warning">
                          <i className="bi bi-exclamation-triangle me-2"></i>Areas to Improve
                        </h5>
                        <ul>
                          {result.warnings.map((warn, i) => (
                            <li key={i}>{warn}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="text-center mt-4">
                      <Link to="/contact" className="btn btn-warning btn-lg">
                        Book Free Consultation
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EligibilityChecker;
