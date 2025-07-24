const ProductBanner = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  ">
      <div className=" w-full  px-2 relative object-cover">
        <div className="w-full lg:h-[40vh] xl:h-[60vh] 2xl:h-[70vh]   overflow-hidden">
          <img
            className=" w-full h-full object-[25%_top] object-cover "
            src="../../../public/product/productbanner.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="font-['heading'] text-4xl md:text-6xl lg:text-8xl font-semibold  mix-blend-screen">
            NEW COLLECTION
          </h1>
          <span className="font-['heading'] lg:text-3xl">COMING SOON</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
