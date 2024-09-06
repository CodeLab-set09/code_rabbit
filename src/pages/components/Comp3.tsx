import Button from "../../static/Button";

const Comp3 = () => {
  return (
    <div className="bg-[#c3c2c2] min-h-[400px] py-10  ">
      <div className=" flex justify-center items-center flex-col">
        <Button
          text={"Key Features"}
          style={
            "bg-white px-3 py-1 text-center rounded-full text-neutral-500 font-medium"
          }
        />
        <h1 className="text-neutral-800 font-semibold text-[36px] pt-3">
          Safe, Reliable and Experienced
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 px-20 pt-10">
        <div className="bg-white p-3 rounded-md">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          impedit illo nesciunt ratione accusantium ex, autem sunt alias sint
          quis possimus ut eveniet temporibus, non earum enim aperiam dolorem
          doloribus.
        </div>
        <div className="bg-white p-3 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          aperiam, aut ullam iure velit animi minima nesciunt rem cum voluptates
          doloremque quibusdam sit enim? Nam consequatur repudiandae aperiam
          voluptatem?
        </div>
        <div className="bg-white p-3 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam
          aperiam, aut ullam iure velit animi minima nesciunt rem cum voluptates
          doloremque quibusdam sit enim? Nam consequatur repudiandae aperiam
          voluptatem?
        </div>
      </div>
    </div>
  );
};

export default Comp3;
