import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaXTwitter } from "react-icons/fa6";
import Products from "/1.png";
import Money from "/2.png";
import Ratings from "/ratings.png";
import { Helmet } from "react-helmet";

function Hero() {
  return (
    <div className="hero bg-[#1a1a1a] text-[#ffffff]">
      <Navbar />
      <div className="max-w-5xl flex flex-col gap-y-2 items-center justify-center mx-auto py-14 px-10 md:px-10 xl:px-0">
        <div className="hero-content lg:px-5 flex flex-col gap-y-5">
          <p className="bg-black mx-auto text-white font-semibold text-sm flex items-center justify-center gap-2 rounded-lg p-3 ">
            <FaXTwitter size={20} />
            <a
              href="https://twitter.com/bhagatpratik07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold text-sm hover:underline"
            >
              Follow my journey on X
            </a>
          </p>
          <h1 className="text-3xl text-[#a9ff68] md:text-5xl xl:text-[60px] leading-[1.2] md:max-w-xl mx-auto text-center lg:max-w-4xl font-semibold">
            Validate your SaaS ideas and get potential customers
          </h1>
          <p className="text-sm lg:text-lg max-w-[16rem] mx-auto md:max-w-xl md:mx-auto lg:max-w-2xl text-[#828282] text-center">
            Validate, Launch, and Grow Your Product in One Platform.
          </p>

          <div className=" max-w-xl mx-auto w-full flex items-center justify-center lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
            <div
              id="getWaitlistContainer"
              data-waitlist_id="13517"
              data-widget_type="WIDGET_2"
            ></div>
            <Helmet>
              <link
                rel="stylesheet"
                type="text/css"
                href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
              />
              <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
            </Helmet>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center justify-center gap-5 p-10 max-w-6xl mx-auto rounded-none lg:rounded-2xl overflow-hidden">
        <img src={Products} height="350" width="350" className="rounded-lg" />
        <img src={Ratings} height="350" width="350" className="rounded-lg" />
        <img src={Money} height="350" width="350" className="rounded-lg" />
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
