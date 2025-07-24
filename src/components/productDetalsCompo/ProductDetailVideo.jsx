const ProductDetailImage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
        <img src="/public/images/productDetailBanner.jpg" alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
          <h1 className="font-['heading'] text-4xl md:text-6xl lg:text-8xl font-semibold mix-blend-screen text-zinc-900">
            NEW COLLECTION
          </h1>
          <span className="font-['heading'] lg:text-3xl text-zinc-500">
            COMING SOON
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImage;
