import Link from "next/link";

const SiteLogo = () => {
  return (
    <div className='flex items-baseline space-x-1.5'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>UrbanGoods</h1>
      </Link>
      <p className='text-xs font-bold text-lime'>Admin</p>
    </div>
  );
};

export default SiteLogo;
