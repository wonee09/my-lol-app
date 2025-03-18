import Link from "next/link";

type Props = {
  link: string;
  desc: string;
  buttontext: string;
};

const MainCardComp = ({ link, desc, buttontext }: Props) => {
  return (
    <div className="border-2 border-neutral-200 rounded-xl box-border p-4 flex flex-col justify-between text-center">
      <p className="text-xl text-primary h-full p-8 leading-normal">{desc}</p>
      <Link
        href={link}
        className="border-2 bg-background-light dark:bg-background-dark p-4 rounded-xl hover:bg-primary dark:hover:bg-primary"
      >
        {buttontext}
      </Link>
    </div>
  );
};

export default MainCardComp;
