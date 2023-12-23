const { Carousel } = require("react-responsive-carousel");

const Category = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" />
        <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p5.png" />
        <img src="/p6.png" />
        <img src="/p7.png" />
      </Carousel>
    </div>
  );
};
export default Category;
