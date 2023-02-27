import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdOutlineMail } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';
import LikeButton from '../commun/LikeButton';

function Nav() {
  return (
    <div className=" fixed top-0 left-0 z-[100] w-[50px] h-full shadow shadow-black bg-gray-900 text-white text-3xl flex items-center justify-between flex-col py-10">
      <img
        title="About : Mahdi Soultana 😊"
        className=" w-[40px] cursor-pointer hover:border-gray-100 border-2 border-transparent  h-[40px] rounded-full block"
        src="/mahdi.jpg "
      />
      <LikeButton />
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
