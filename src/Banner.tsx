import { useEffect, useState } from "react";

// import pic from "./assets/moyses.jpg";
export default function Banner({ className }: { className: string }) {
  // const [bannerPic, setBannerPic] = useState<string>();
  const [srcUrls, setSrcUrls] = useState<string[]>();

  useEffect(() => {
    
      console.log(">>>" + process.env.NODE_ENV);
    
    const fetchSrcUrls = async () => {
      try {
        const response = await fetch("/toshalom.org/db/banners.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (process.env.NODE_ENV !== "production") {
          console.log(JSON.stringify(result) + "DEV MODE");
        }
        setSrcUrls(result);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchSrcUrls();
  }, []);

  return (
    <div className={className}>
      <img
        className="border border-red-500 h-100 md:h-120 lg:h-160 w-screen object-cover object-top"
        src="/db/images/moyses.jpg"
      ></img>
    </div>
  );
}
