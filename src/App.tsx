import { APITester } from "./APITester";
import static_db from "./static_db";
import "./index.css";

import InstagramPost from "./InstagramPost";
import Header from "./Header";
import { useEffect, useState } from "react";
import Banner from "./Banner";

export function App() {
  const [data, setData] = useState([]);

  const [aaa, setAAA] = useState<string>();
  // const [error, setError] = useState();
  // const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch("/toshalom.org/db/fixed_events.json"); // Replace with your API endpoint
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const result = await response.json();
    //     setData(result);
    //   } catch (error) {
    //     // setError(error);
    //   } finally {
    //     // setLoading(false);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <>
      <Header />
      
      {/* <div>
        <h1>Bun + React123123123</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <div>
          {data.map((v, i) => (
            <>{v.title}, </>
          ))}
        </div>
      </div> */}
      <div className="app grid grid-cols-4 gap-4 md:pt-0 md:p-30 lg:pt-10 lg:p-50">
        <Banner className="col-span-4" />
        <div className="...">01</div>
        <div className="...">02</div>
        <div className="...">03</div>
        <div className="col-span-2 ...">04</div>
        <div className="...">05</div>
        <div className="...">06</div>
        <div className="col-span-2 ...">07</div>
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: aaa }}></div>
      <iframe
        className=""
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d623.1304514588927!2d-79.4338669529638!3d43.67947695204553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35377a4063ff%3A0x730eccbf449168a9!2sShalom%20Catholic%20Community!5e0!3m2!1sen!2sca!4v1761458897925!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{ border: 0, maxWidth: "-webkit-fill-available"}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy={"no-referrer-when-downgrade"}
      ></iframe>

      <InstagramPost htmlData={static_db.instagram.posts[0]!} /> */}

      {/* <Cloud />
      <Cloud /> */}
      {/* <APITester /> */}
    </>
  );
}

export default App;
