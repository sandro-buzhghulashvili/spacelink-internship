import Image from 'next/image';
import Card from '../UI/Card';

import classes from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <>
      <div
        className="container mx-auto mb-40 flex flex-col items-center xl:flex-row xl:justify-center"
        id="aboutUs"
      >
        <div className="mb-20 xl:m-0 xl:w-2/5">
          <h1 className="text-4xl font-medium px-2 xl:text-6xl xl:leading-snug mb-10 text-primary_typo text-center xl:text-left leading-tight">
            Dedicated Support
          </h1>
          <p className="text-secondary_typo text-center px-10 xl:p-0 xl:text-left">
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </p>
        </div>
        <div className="relative w-full xl:w-fit flex justify-center xl:ml-36">
          <Image
            src="/card3.png"
            alt="card3"
            width={300}
            height={200}
            className="w-3/4 sm:w-96 h-48 sm:h-52 relative z-10"
          />
          <Image
            src="/card2.png"
            alt="card2"
            width={300}
            height={200}
            className="w-3/4 sm:w-96 h-48  sm:h-52 absolute -top-5 left-10 right-0 mx-auto"
          />
        </div>
      </div>
      <div className="container mx-auto mb-40">
        <div className="mb-20 flex flex-col items-center">
          <h1 className="text-4xl font-medium px-2 xl:text-6xl xl:leading-snug mb-10 text-primary_typo text-center  leading-tight">
            Why choose us
          </h1>
          <p className="text-secondary_typo w-3/4 xl:w-1/4 text-center px-10 xl:p-0">
            We are the only service that provides all 3 services as a packaged
            service
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center px-10 mb-5">
          <Card className={`${classes.card} xl:w-1/3`}>
            <h1 className="text-2xl text-primary_typo font-medium mb-3">
              Personal information removal
            </h1>
            <p className="text-secondary_typo mb-3">
              We purge your personal data from online sources, using automated
              and manual methods. A privacy expert oversees removals and handles
              any manual activities.
            </p>
            <Image
              src="/card4.png"
              alt="card4"
              width={400}
              height={400}
              className="w-full h-40 sm:h-52"
            />
          </Card>
          <Card className={`${classes.card} xl:w-1/3`}>
            <h1 className="text-2xl text-primary_typo font-medium mb-3">
              Cloaking alias profiles
            </h1>
            <p className="text-secondary_typo mb-5">
              You’ll receive regular reports on your privacy status and any
              outstanding threats. If new records become associated with you, we
              will send you an alert.
            </p>
            <Image
              src="/checkmark.png"
              alt="checkmark"
              width={400}
              height={400}
              className="w-20 h-20 mb-5"
            />
            <Image
              src="/card5.png"
              alt="card5"
              width={400}
              height={400}
              className="w-3/4 h-16 sm:h-24"
            />
          </Card>
        </div>
        <div className="px-10 mb-5">
          <Card
            className={`${classes.panel} lg:flex lg:justify-between lg:items-center`}
          >
            <div className="mb-10 lg:m-0 lg:w-2/5">
              <h1 className="text-2xl text-primary_typo font-medium mb-3">
                Detailed Reporting
              </h1>
              <p className="text-secondary_typo mb-10 lg:mb-0">
                You’ll receive regular reports on your privacy status and any
                outstanding threats. If new records become associated with you,
                we will send you an alert.
              </p>
            </div>
            <Image
              src="/card6.png"
              alt="card4"
              width={400}
              height={400}
              className="w-full lg:w-2/5 h-32 sm:h-44"
            />
          </Card>
        </div>
      </div>
    </>
  );
}
