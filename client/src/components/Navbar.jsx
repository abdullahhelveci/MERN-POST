import { BiLogOut } from "react-icons/bi";
import { useDispatch } from "react-redux";

const Navbar = ({ username }) => {
  const dispatch = useDispatch();

  const logoutFunc = () => {
    localStorage.clear();

    window.location = "/auth";
  };

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };

  return (
    <div className="h-20 bg-indigo-600 flex items-center justify-between px-5">
      <div className="text-white font-bold text-2xl  cursor-pointer">
        POST PAYLAŞ
      </div>
      <div className="flex items-center space-x-5">
        <span className="text-white">Hoşgeldin {username}</span>
        <input
          type="text"
          placeholder="ara.."
          className="p-2 outline-none rounded-md focus:shadow-xl"
        />
        <div
          onClick={openModal}
          className="w-36 border border-indigo-900 p-2 rounded-md text-center text-white cursor-pointer hover:bg-indigo-800 shadow-xl"
        >
          Post Oluştur
        </div>
        <BiLogOut
          onClick={logoutFunc}
          size={25}
          className="text-white cursor-pointer hover:text-indigo-400"
        />
      </div>
    </div>
  );
};

export default Navbar;
