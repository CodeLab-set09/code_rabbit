import { changeFaliedState, changeReadToggle } from "../../../global/slice";
import { TextEffect } from "../../../static/TextEffect";
import CodedSide from "./CodedSide";
import DisplayCode from "./DisplayCode";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import rabb from "../../../../public/rabb.png";

const Challenge = () => {
  const state = useSelector((state: any) => state.faliedState);
  const read = useSelector((state: any) => state.readToggle);

  const dispatch = useDispatch();
  return (
    <div className="relative">
      <div className="flex gap-3 w-full">
        <div className="w-[650px] border rounded-md p-2 relative bg-slate-50">
          <DisplayCode />
        </div>
        <div className="w-[320px] border rounded-md p-2">
          <CodedSide />
        </div>
      </div>

      {state && (
        <div className="absolute top-0 left-0 w-[100%] backdrop-blur-md h-[100%] flex items-center justify-center ">
          <main className="overflow-hidden border rounded-md w-[500px] h-[300px] bg-white">
            <div className="text-center mt-10">
              <h1 className="text-3xl font-bold">Bad Code!</h1>
              <p>
                You've written a very <strong>BAD Code</strong>, Please go
                through it again and correct the Errors.
              </p>

              <div className="flex justify-center mt-20 text-[50px] w-full  ">
                <div
                  className="hover:bg-slate-100 duration-300 transition-all cursor-pointer rounded-full"
                  onClick={() => {
                    dispatch(changeFaliedState(false));
                  }}
                >
                  <MdClose />
                </div>
              </div>
            </div>
          </main>
        </div>
      )}

      {read && (
        <div className=" transtion-all duration-300 backdrop-blur-sm absolute top-0 left-0 h-full w-full">
          <div className="flex justify-center items-center w-full drop-shadow-md rounded-lg border h-full">
            <div className="overflow-hidden p-4 w-[600px] h-[400px] border bg-white rounded-[10px]">
              <div className="flex ">
                <div
                  className="cursor-pointer h-[40px] w-[40px] rounded-full transition-all duration-300 hover:bg-slate-200 flex justify-center items-center "
                  onClick={() => {
                    dispatch(changeReadToggle(false));
                  }}
                >
                  <MdClose size={25} />
                </div>
              </div>

              <div className="mt-2">
                <TextEffect>
                  {
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem reprehenderit eveniet aliquam sequi quibusdam, voluptatem quos molestias unde magni quidem et vitae, quam veritatis a ad! Commodi est praesentium iure"
                  }
                </TextEffect>
              </div>
              <img src={rabb} className="h-[300px] object-contain" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenge;
