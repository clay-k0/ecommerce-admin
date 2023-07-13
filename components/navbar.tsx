import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "./mode-toggle";
import StoreSwitcher from "@/components/store-switcher";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import SiteLogo from "./site-logo";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <div className='mr-7'>
          <SiteLogo />
        </div>
        <Separator orientation='vertical' />
        <div className='ml-7'>
          <StoreSwitcher items={stores} />
        </div>
        <MainNav className='mx-9' />
        <div className='ml-auto flex items-center space-x-4 h-full text-sm'>
          <Separator orientation='vertical' />
          <ModeToggle />
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
