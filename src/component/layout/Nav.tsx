import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { MdOutlineMail } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';

function Nav() {
  return (
    <div className=" fixed top-0 left-0 z-[100] w-[50px] h-full shadow shadow-black bg-gray-900 text-white text-3xl flex items-center justify-between flex-col py-10">
      <img
        title="About : Mahdi Soultana 😊"
        className=" w-[40px] cursor-pointer hover:border-gray-100 border-2 border-transparent  h-[40px] rounded-full block"
        src="/mahdi.jpg "
      />
      <div
        className="flex items-center justify-center flex-col"
        title="let me know you liked projects ❤"
      >
        <button
          className={`"w-[40px] h-[40px] flex items-center justify-center hover:text-red-500 `}
        >
          <CiHeart />
        </button>
        <p className="text-xs -mt-1 pointer-events-none">324</p>
      </div>
      {[
        {
          icon: SiUpwork,
          link: '',
          className: 'hover:text-green-500',
          title: 'Upwork Portfolio 🟩',
        },
        {
          icon: MdOutlineMail,
          link: '',
          className: 'hover:text-orange-500',
          title: 'direct Email 🟧',
        },
        {
          icon: AiOutlineQuestionCircle,
          link: '',
          className: 'hover:text-yellow-500',
          title: 'any Questions here ! 🟨',
        },
      ].map((data) => (
        <button
          className={`"w-[40px] h-[40px] flex items-center justify-center ${data.className}`}
          title={data.title}
        >
          <data.icon title={data.title} />
        </button>
      ))}
    </div>
  );
}

export default Nav;
