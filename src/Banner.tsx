import { useEffect, useState } from "react";

// import pic from "./assets/moyses.jpg";
export default function Banner({ className }: { className: string }) {

  const [bannerPic, setBannerPic] = useState<string>();
  

  useEffect(() => {
    import("./assets/moyses.jpg")
      .then((pic) => setBannerPic(pic.default))
      .catch((err) => console.error(`Unable to load banner image.\n${err}`));
  });

  return (
    <div className={className}>
      <img
        className="border border-red-500 h-100 md:h-120 lg:h-160 w-screen object-cover object-top"
        src="/toshalom.org/db/images/moyses.jpg"
      ></img>
    </div>
  );
}
