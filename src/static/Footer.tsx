import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons = [
    { logo: <FiFacebook /> },
    { logo: <LiaLinkedin /> },
    { logo: <FaTwitter /> },
    { logo: <FaInstagram /> },
  ];
  return (
    <div className="p-20">
      <div className="grid grid-cols-7">
        <div className="col-span-3 w-[200px] flex flex-col gap-4">
          <h1 className="text-black font-bold text-[20px]">LOGO</h1>
          <p className="text-[13px] font-normal text-neutral-800">
            Stay worry-free with camp buddy, providing peace of mind.
          </p>
          <div className="flex items-center gap-2">
            {icons.map((el, id: number) => (
              <Link className="bg-gray-300 rounded-full p-2" key={id} to={""}>
                {el.logo}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-4 grid grid-cols-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[15px]">Programs</h1>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[15px]">Programs</h1>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[15px]">Programs</h1>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[15px]">Programs</h1>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
              <p className="text-neutral-600 text-[12px] font-medium">
                Science Exploration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
