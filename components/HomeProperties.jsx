import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import { fetchProperties } from '@/utils/requests';

const HomeProperties = ({ properties, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        href='/properties'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        View All Properties
      </Link>
    </section>
  );
};

export async function getStaticProps() {
  try {
    const properties = await fetchProperties();
    return { props: { properties, loading: false } };
  } catch (error) {
    return { props: { error: true, loading: false } };
  }
}

export default HomeProperties;
