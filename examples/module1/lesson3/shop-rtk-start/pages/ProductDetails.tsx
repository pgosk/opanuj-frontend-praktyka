import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../hooks/rtk';
import { addToCart } from '../state/cartSlice';
import { useFetchProductsQuery } from '../services/products';
import { FetchDataState } from '../components/FetchDataState';

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, isLoading, isError } = useFetchProductsQuery();
  const dispatch = useAppDispatch();

  if (isLoading) {
    return <FetchDataState message="Loading..." />;
  }

  if (isError || !products) {
    return <FetchDataState message="Something went wrong..." />;
  }

  const product = products.find((item) => {
    return item.id === parseInt(id!);
  });

  if (!product) {
    return <FetchDataState message="Cannot find product..." />;
  }

  const { title, price, description, image } = product;
  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-2xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-green-600 py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
