

const Footer = ({logocompany}) => {
  return (
    <div className="bg-black text-white mt-10 p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
            <img
              src={logocompany}
              alt=""
              width="40"
              className="failory-logo-image"
            />
            <h3 className="text-2xl font-bold mb-2">Failory</h3>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-3/4 lg:w-3/4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-8">
                <h3 className="text-2xl font-bold mb-2 px-10">Learn</h3>
                <p className="text-sm text-gray-500 flex flex-row px-10">
                  <a href="" className="footer-link">
                    Failed Startups
                  </a>
                  <a href="" className="footer-link">
                    Successful Startups
                  </a>
                  <a href="" className="footer-link">
                    Blog
                  </a>
                  <br />
                  <a href="" className="footer-link">
                    Entrepreneurial Tools
                  </a>
                  <a href="" className="footer-link">
                    Startup Cemetery
                  </a>
                  <a href="" className="footer-link">
                    Podcast
                  </a>
                </p>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 mb-8">
                <h3 className="text-2xl font-bold mb-2">Other</h3>
                <p className="text-sm text-gray-500">
                  <a href="" className="footer-link">
                    Sponsor Us!
                  </a>
                  <a href="" className="footer-link">
                    Open Startup
                  </a>
                  {/* Add other links as needed */}
                </p>
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-2xl font-bold mb-2">Follow Us!</h3>
              <div className="flex space-x-4 mb-4">
                <a href="" target="_blank" className="footer-social-network-icons">
                  <img
                    src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbf0a2f2b67e3b3ba079c_Twitter%20Icon.svg"
                    width="20"
                    alt="Twitter icon"
                  />
                </a>
                <a href="" target="_blank" className="footer-social-network-icons">
                  <img
                    src="https://uploads-ssl.webflow.com/5966ea9a9217ca534caf139f/5c8dbfe70fcf5a0514c5b1da_Instagram%20Icon.svg"
                    width="20"
                    alt="Instagram icon"
                  />
                </a>
                {/* Add other social icons as needed */}
              </div>
              <p className="text-sm text-gray-500">Email me at: <a href="" className="link-email-footer">Lorem Ipsum</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
