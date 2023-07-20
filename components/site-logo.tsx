import Link from "next/link";

const SiteLogo = () => {
  return (
    <>
      <Link href='/' className='flex items-baseline space-x-1.5 pl-2'>
        <h1 className='text-3xl font-bold'>UrbanGoods</h1>
        <p className='text-xs font-bold text-lime'>Admin</p>
      </Link>
    </>
  );
};

export default SiteLogo;
