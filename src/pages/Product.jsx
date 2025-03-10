import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ShopeContext } from "../context/ShopeContext";
import Image from "../components/Image";
import starIcon from "../assets/star_icon.png";
import starDullIcon from "../assets/star_dull_icon.png";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency  , addToCart} = useContext(ShopeContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);
  return productData ? (
    <div className="border-t2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <div onClick={() => setImage(item)} className="">
                <Image
                  key={index}
                  className={
                    "w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  }
                  imgSrc={item}
                  imgAlt={item}
                />
              </div>
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <Image className={"w-full h-auto"} imgSrc={image} imgAlt={image} />
          </div>
        </div>
        {/* product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <Image className={"w-3.5"} imgSrc={starIcon} imgAlt={starIcon} />
            <Image className={"w-3.5"} imgSrc={starIcon} imgAlt={starIcon} />
            <Image className={"w-3.5"} imgSrc={starIcon} imgAlt={starIcon} />
            <Image className={"w-3.5"} imgSrc={starIcon} imgAlt={starIcon} />
            <Image
              className={"w-3.5"}
              imgSrc={starDullIcon}
              imgAlt={starDullIcon}
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>selec Size </p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === Size ? "border-red-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 md:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash On Delvery is available On this Product</p>
            <p>Easy Return and Exchange Policy Within 7 Days </p>
          </div>
        </div>
      </div>
      {/* Description and Review  */}
      <div className="mt-20">
        <div className="flex">
          <b className="border py-3 px-5 text-sm">Description</b>
          <p className="border py-3 px-5 text-sm">Review(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilities the
            buying and selling of products or service over the internet . It
            serves as a virtual marketplace where bussiness and individual can
            showcase their products , interact with customers , and conduct
            transaction without the the need for a physical presence .
            E-commerce website have gained immense popularity due to their
            convenience , accessibility , and the global reach theey offer
          </p>
          <p>
            E-commerce website typically display products or services along with
            detailed description , images, prices, and any available variation
            (e.g.,sizes, colors). Each product usually has its own dedicated
            page with relevant HiInformationCircle.
          </p>
        </div>
      </div>
      {/* Display related product */}
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
