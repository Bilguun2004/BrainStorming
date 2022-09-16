import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReviewCard } from "../components/ReviewCard";
const Home = () => {
  return (
    <>
      <div className="Home-container">
        <div className="Home-top">
          <Navbar />
          <div className="Home-top-child">
            <div className="Home-top-text-container">
              <span className="Home-top-big-text">
                Instant collaborations for remote teams
              </span>
              <span className="Home-top-small-text">
                All in one for your remote team chats, collaboration and track
                projects
              </span>
              <span style={{ height: "50px" }}></span>
              <span className="Home-top-input-container">
                <input className="Home-top-input" placeholder="Email" />
                <span className="Home-top-input-button">Get early access</span>
              </span>
            </div>
          </div>
        </div>
        <div className="Home-2"></div>
        <div className="Home-3"></div>
        <div className="Home-4"></div>
        <div className="Home-5">
          <div style={{ width: "100px" }}></div>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <Footer />
      </div>
    </>
  );
};
export { Home };
