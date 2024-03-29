import Card from '../UI/Card';
import { User, feedbacks } from './DUMMY_FEEDBACK';
import Image from 'next/image';

import classes from './Feedback.module.scss';

export default function Feedback() {
  return (
    <div className="container mx-auto mb-40" id="partners">
      <div className="mb-20 flex flex-col items-center">
        <h1 className="text-4xl font-medium px-2 xl:text-6xl xl:leading-snug mb-10 text-primary_typo text-center  leading-tight">
          The word on IdentityHub
        </h1>
        <p className="text-secondary_typo w-3/4 xl:w-1/4 text-center px-10 xl:p-0">
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </p>
      </div>
      <ul className="text-center">
        {feedbacks.map((feedback: User) => (
          <li
            key={feedback.id}
            className="m-5 w-3/4 sm:w-56 lg:w-80 inline-block "
          >
            <Card className={classes.feedback}>
              <div className="flex items-center mb-5">
                <Image
                  src={feedback.avatarImg}
                  height={36}
                  width={36}
                  alt="avatar"
                />
                <p className="ml-2 text-lg text-primary_typo">
                  {feedback.name}
                </p>
              </div>
              <p className="text-secondary_typo">{feedback.feedback}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
