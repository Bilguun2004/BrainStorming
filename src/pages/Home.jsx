import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ReviewCard } from "../components/ReviewCard";
import HomeComp from "../components/HomeComp";
import Home2 from '../assets/images/Home2.svg'
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
        <HomeComp position={false} img={'../assets/images/Home2.svg'} text={'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'} />
        <HomeComp position={true} img={'../assets/images/Home2.svg'} text={'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'} />
        <HomeComp position={false} img={'../assets/images/Home2.svg'} text={'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'} />
        <HomeComp position={true} img={'../assets/images/Home2.svg'} text={'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'} />
        <HomeComp position={false} img={'../assets/images/Home2.svg'} text={'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'} />

        {/* <div className="Home-2"></div>
        <div className="Home-3">
          <div className="Home-3-child">

          </div>
          <div className="Home-3-child-2">
            <div className="Home-3-big-text">
            Simple task management
            </div>
            <div className="Home-3-small-text">
            Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.
            </div>
            <div className="Home-3-learnmore">
            Learn more
            </div>
          </div>
        </div> */}
        {/* <div className="Home-4"></div> */}
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
