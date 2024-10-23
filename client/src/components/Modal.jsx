import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  const onchangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
      dispatch({ type: "MODAL", payload: false });
      toast.success("Post is updated");
    } else {
      dispatch(createPostAction(postData));
      dispatch({ type: "MODAL", payload: false });
      toast.success("New Post is added");
    }
  };
  return (
    <div className="w-full h-screen bg-opacity-30 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white  w-1/3 p-2 rounded-md">
        <div className="flex items-center justify-between cursor-pointer">
          <h1 className="font-bold  text-2xl text-center">
            {modal?.updateId ? "POST GÜNCELLE" : "POST PAYLAŞ"}
          </h1>
          <AiOutlineClose
            onClick={() => dispatch({ type: "MODAL", payload: false })}
            className="text-indigo-600"
            size={25}
          />
        </div>
        <div className="my-4 flex flex-col space-y-3">
          <input
            value={postData.user}
            name="user"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="User.."
          />
          <input
            value={postData.title}
            name="title"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="Title.."
          />
          <input
            value={postData.description}
            name="description"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="Description.."
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800"
        >
          {modal?.updateId ? "Güncelle" : "Paylaş"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
