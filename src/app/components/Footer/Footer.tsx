import Image from 'next/image';

export default function Footer() {
  return (
    <div className="container mx-auto flex flex-wrap lg:gap-20 justify-center p-10">
      <div className="flex h-fit mb-10">
        <Image src="/logo.png" width={32} height={32} alt="main logo" />
        <h1 className="text-2xl font-medium ml-3 text-primary_typo">
          IdentityHub
        </h1>
      </div>
      <ul className=" text-secondary_typo ml-10 mb-10">
        <li className=" text-primary_typo text-lg mb-3">
          It's free so why not
        </li>
        <li className="mb-2">Pricing</li>
        <li className="mb-2">Features</li>
        <li className="mb-2">FAQ</li>
      </ul>
      <ul className=" text-secondary_typo ml-10 mb-10">
        <li className=" text-primary_typo text-lg mb-3">
          It's free so why not
        </li>
        <li className="mb-2">Pricing</li>
        <li className="mb-2">Features</li>
        <li className="mb-2">FAQ</li>
      </ul>
      <ul className=" text-secondary_typo ml-10  mb-10">
        <li className=" text-primary_typo text-lg mb-3">
          It's free so why not
        </li>
        <li className="mb-2">Pricing</li>
        <li className="mb-2">Features</li>
        <li className="mb-2">FAQ</li>
      </ul>
    </div>
  );
}
