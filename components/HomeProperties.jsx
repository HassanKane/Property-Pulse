import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';
import Spinner from '@/components/Spinner';

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const HomeProperties = async () => {
  const data = await fetchProperties();
  console.log(data); // Log data to check its structure

  try {
    // Fetch data
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error (e.g., display an error message)
  }
  if (!data || !data.properties) {
    return <Spinner />; // Or some other loading indicator
  }

  const recentProperties = shuffleArray(data.properties.slice()).slice(0, 3);

  return (
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Recent Properties
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {recentProperties.length === 0 ? (
              <p>No Properties Found</p>
            ) : (
              recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/properties'
          className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};
export default HomeProperties;
