import Image from 'next/image';
import Link from 'next/link';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };
  return (
    <div class='rounded-xl shadow-md relative'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=''
        height={0}
        width={0}
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
      />

      <div class='p-4'>
        <div class='text-left md:text-center lg:text-left mb-6'>
          <div class='text-gray-600'>{property.type}</div>
          <h3 class='text-xl font-bold'>{property.name}t</h3>
        </div>
        <h3 class='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          ${getRateDisplay()}
        </h3>

        <div class='flex justify-center gap-4 text-gray-500 mb-4'>
          <p>
            <faBed className='inline mr-2' /> {property.beds}{' '}
            <span class='md:hidden lg:inline'>Beds</span>
          </p>
          <p>
            <i class='fa-solid fa-bath'></i> {property.baths}{' '}
            <span class='md:hidden lg:inline'>Baths</span>
          </p>
          <p>
            <i class='fa-solid fa-ruler-combined'></i>
            {property.square_feet}{' '}
            <span class='md:hidden lg:inline'>sq ft</span>
          </p>
        </div>

        <div class='flex justify-center gap-4 text-green-900 text-sm mb-4'>
          <p>
            <i class='fa-solid fa-money-bill'></i> Weekly
          </p>
          <p>
            <i class='fa-solid fa-money-bill'></i> Monthly
          </p>
        </div>

        <div class='border border-gray-100 mb-5'></div>

        <div class='flex flex-col lg:flex-row justify-between mb-4'>
          <div class='flex align-middle gap-2 mb-4 lg:mb-0'>
            <i class='fa-solid fa-location-dot text-lg text-orange-700'></i>
            <span class='text-orange-700'>
              {' '}
              {property.location.city} {property.location.state}{' '}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
