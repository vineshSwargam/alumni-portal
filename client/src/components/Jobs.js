// import React, { Component } from 'react';
import React, { Component } from 'react';

const list = [{
  title: 'Senior Software Engineer',
  company: 'AI Data Solutions',
  location: 'Bangalore, In',
  deadline: '20th Oct, 19',
  salary: 40000,
  applicants: 14,
  positions: 3,
  recruiter: 'Graven Whismas',
  postedOn: '29th Aug, 19',
}, {
  title: 'Senior Software Engineer',
  company: 'AI Data Solutions',
  location: 'Bangalore, In',
  deadline: '20th Oct, 19',
  salary: 40000,
  applicants: 14,
  positions: 3,
  recruiter: 'Graven Whismas',
  postedOn: '29th Aug, 19',
}, {
  title: 'Senior Software Engineer',
  company: 'AI Data Solutions',
  location: 'Bangalore, In',
  deadline: '20th Oct, 19',
  salary: 40000,
  applicants: 14,
  positions: 3,
  recruiter: 'Graven Whismas',
  postedOn: '29th Aug, 19',
}, {
  title: 'Senior Software Engineer',
  company: 'AI Data Solutions',
  location: 'Bangalore, In',
  deadline: '20th Oct, 19',
  salary: 40000,
  applicants: 14,
  positions: 3,
  recruiter: 'Graven Whismas',
  postedOn: '29th Aug, 19',
}, {
  title: 'Senior Software Engineer',
  company: 'AI Data Solutions',
  location: 'Bangalore, In',
  deadline: '20th Oct, 19',
  salary: 40000,
  applicants: 14,
  positions: 3,
  recruiter: 'Graven Whismas',
  postedOn: '29th Aug, 19',
  }];

// class Jobs extends Component{

//   render() {
    
//     return(
//       <div id="jobs">
//         {list.map(job => (
//           <div className="jobBox">
//             <div className="jobTitle">
//               {job.title}
//             </div>
//             <div className="jobCompany">
//               {job.company}
//             </div>
//             <div className="jobDetails">
//               <div className="jobLocation">
//                 {job.location}
//               </div>
//               <div className="jobDeadline">
//                 {job.deadline}
//               </div>
//               <div className="jobSalary">
//                 {job.salary}
//               </div>
//               <div className="jobApplicants">
//                 {job.applicants}
//               </div>
//               <div className="jobPositions">
//                 {job.positions}
//               </div>
//             </div>
//             <div className="jobFooter">
//               <div className="jobPoster">
//                 <img src={require('')} />
//                 <div className="jobRecruiterName">
//                   {job.recruiter}
//                 </div>
//                   {/* <div className="jobPostedOn">
//                     {job.postedOn}
//                   </div> */}
//               </div>
//               <div>

//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )
//   }
// }

// export default Jobs;


class Jobs extends Component {
  state = {
    saved: false,
    seekerOption: 'activelyApplying',
    providerOption: 'jobProvider'
  }

  handleSave = e => {
    e.preventDefault();
    this.setState({ saved: true });
    console.log(this.state);
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.options[e.target.selectedIndex].text });

  render() {

    return (
      <div id="jobs">
        <div className="jobBox" >
          <div className="jobTitle" style={{ background: 'rgb(80, 141, 240)', display: 'flex', justifyContent: 'space-between' }}>
            {this.state.saved ? 'My Job Preference' : 'Set Job Preference'}
            <button value='Edit'>Edit</button>
          </div>
          {this.state.saved ? (
            <div className="savedPreferenceBox jobPadding">
              <div className="savedPreference">
                {this.state.providerOption}
              </div>
              <div className="savedPreference">
                {this.state.seekerOption}
              </div>
            </div>
          ) : (
            <form id="preferenceForm" onSubmit={this.handleSave}>
              <div className="preference">
                <div className="preferenceTitle">
                  Your preference as a job provider
                </div>
                <div className="provider">
                  <select onChange={this.handleChange} name="providerOption">
                    <option value="jobReferrer">Job Referrer</option>
                    <option value="jobProvider">Job Provider</option>
                    <option value="notInterested">Not Interested</option>
                  </select>
                </div>
                <div className="preferenceTitle">
                  Your preference as a job provider
                </div>
                <div className="seeker">
                  <select onChange={this.handleChange} name="seekerOption">
                    <option value="activelyApplying">Actively Applying</option>
                    <option value="casuallyLooking">Casually Looking</option>
                    <option value="Not Interested">Not Interested</option>
                  </select>
                </div>
                <button id="preferenceSave" className="actionButton" type="submit" >Save</button>
              </div>
            </form>
          )}
        </div>
        {list.map(job => (
          <div className="jobBox">
            <div className="jobTitle">
              {job.title}
            </div>
            <div className="jobPadding">
              <div className="jobCompany">
                {job.company}
              </div>
              <div className="jobDetails">
                <div className="jobLocation">
                  {job.location}
                </div>
                <div className="jobDeadline">
                  {job.deadline}
                </div>
                <div className="jobSalary">
                  Salary {job.salary}
                </div>
                <div className="jobApplicants">
                  Applicants {job.applicants}
                </div>
                <div className="jobPositions">
                  Positions {job.positions}
                </div>
              </div>
              <div className="jobFooter">
                <div className="jobPoster">
                  <img src={require('../img/vision.jpg')} />
                  <div className="jobRecruiterName">
                    {job.recruiter}
                  </div>
                </div>
                <div className="jobPostedOn">
                  {job.postedOn}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Jobs;