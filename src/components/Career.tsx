import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Post-Degree Diploma</h4>
                <h5>Langara College</h5>
              </div>
              <h3>2024-26</h3>
            </div>
            <p>
              Web & Mobile App Design and Development.
              Built capstone and team projects using React Native, Node.js,
              TypeScript, Supabase, and more.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT & Marketing Engineer</h4>
                <h5>Adroit Engineering Projects</h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <p>
              Led digital marketing and social media strategy. Developed and
              maintained the company website using frontend and backend
              technologies. Designed product presentations and provided
              technical support across teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>GTBIT, GGSIPU · Delhi</h5>
              </div>
              <h3>2019-22</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science Engineering.
              Strong foundation in programming, data structures, algorithms,
              and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>GNDIT, BTE · Delhi</h5>
              </div>
              <h3>2014-19</h3>
            </div>
            <p>
              Diploma in Computer Engineering. Built foundational
              knowledge in programming, networking, and computer systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Career;
