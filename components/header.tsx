import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="top-0 py-8 lg:py-0 mx-auto flex flex-wrap w-full max-w-7xl items-center place-content-center justify-between bg-white px-4 sm:py-8">
      <div className="w-full sm:w-auto mb-4 sm:mb-0 flex justify-center">
        <Link href="/">
          <Image src="/logo1.png" width={150} height={50} alt="Cupid AI" className="h-24 w-auto" />
        </Link>
      </div>
      <div className="w-full sm:w-auto text-center sm:text-left flex justify-center sm:justify-end">
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
