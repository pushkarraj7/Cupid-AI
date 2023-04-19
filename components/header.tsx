import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="sticky top-0 mx-auto flex w-full max-w-7xl items-center justify-between bg-white px-8 sm:px-12">
      <Link href="/">
        <Image src="/logo1.png" width={150} height={50} alt="Cupid AI" className="-ml-6 h-24 w-auto" />
      </Link>
      <div className="space-x-4">
        <Link
          data-tip="Github Repository"
          href="https://github.com/pushkarraj7"
          target="_blank"
          className="btn whitespace-nowrap rounded-[20px] border-2 border-primary px-4 py-2 text-xs font-medium text-primary hover:bg-primaryDarker hover:text-white sm:text-base"
        >
          Github Repository
        </Link>
      </div>
    </nav>
  );
};

export default Header;
