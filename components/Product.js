import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );

  return (
    <div className="relative flex flex-col items-center m-5 z-30 p-10 bg-white">
      <div className="absolute top-2 right-2 text-xs italic text-gray-400 my-3">
        {category}
      </div>
      <Image src={image} height={200} width={200} className="object-contain" />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <div className="text-xs my-2 line-clamp-2">{description}</div>

      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
