import { APITester } from "./APITester";
import static_db from "./static_db";
import "./index.css";

import logo from "./assets/logo.svg";
import InstagramPost from "./InstagramPost";
import Header from "./Header";

export function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="logo-container">
          <img src={logo} alt="Bun Logo" className="logo bun-logo" />
          {/* <img src={reactLogo} alt="React Logo" className="logo react-logo" /> */}
        </div>

        <h1>Bun + React123123123</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623.1304514588927!2d-79.4338669529638!3d43.67947695204553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35377a4063ff%3A0x730eccbf449168a9!2sShalom%20Catholic%20Community!5e0!3m2!1sen!2sca!4v1761458897925!5m2!1sen!2sca"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy={"no-referrer-when-downgrade"}
        ></iframe>

        <InstagramPost htmlData={static_db.instagram.posts[0]!} />

        <APITester />
      </div>
    </>
  );
}

export default App;
