import image from "./images/my-logo.png";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import instagram from "./images/instagram.svg";
import reddit from "./images/reddit.svg";

function Socials() {
  return (
    <div className="socials">
      <a href="https://twitter.com/saivishnu725>">
        <img className="social-icon" src={twitter} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/_sai.vishnu_>">
        <img className="social-icon" src={instagram} alt="Instagram" />
      </a>
      <a href="https://www.reddit.com/saivishnu725>">
        <img className="social-icon" src={reddit} alt="Reddit" />
      </a>
      <a href="https://www.github.com/saivishnu725>">
        <img className="social-icon" src={github} alt="GitHub" />
      </a>
    </div>
  );
}

function Container() {
  return (
    <div>
      <div className="about content">
        <h3> About Me </h3>
        <p>
          I am a Computer Science student. I am currently learning React (even
          though I hate web development). I am created this static page to
          create a business card thing-y.
        </p>
      </div>
      <div className="interests content">
        <h3> Interests </h3>
        <p>
          I am interested in coding, reading, watching movies and staring at the
          wall pointlessly.
        </p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="card-container">
      <img src={image} alt="logo" className="my-logo" />
      <h3 className="my-name"> Sai Vishnu </h3>
      <h4 className="my-motto"> just a tech </h4>
      <a href="https://www.github.com/saivishnu725" className="my-website">
        github.com/saivishnu725
      </a>
      <br />
      <a href="mailto:saivishnu725@gmail.com">
        <button type="button" className="social-button">
          Email
        </button>
      </a>
      <a href="https://www.linkedin.com/in/sai-vishnu-061366194/">
        <button type="button" className="social-button">
          LinkedIn
        </button>
      </a>
      <Container />
      <Socials />
    </div>
  );
}

export default Card;
