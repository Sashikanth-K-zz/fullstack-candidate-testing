export default function Header() {
  return (
    <div className="flex flex-row  flex-wrap justify-between  p-4 bg-white">
      <div className="flex flex-row cursor-pointer">
        <h1 className="text-2xl  text-blue-500 font-bold uppercase">Health explore</h1>
      </div>
      <div className="flex flex-row flex-wrap space-x-2 ">
        <div
          className="uppercase p-2 cursor-pointer hover:bg-blue-200 rounded-md"
          onClick={(e) => {
            console.log("clicked");
          }}
        >
          Profile
        </div>
        <div className="uppercase p-2 cursor-pointer hover:bg-blue-200 rounded-md">
          jobs
        </div>

        <div className="uppercase p-2 cursor-pointer hover:bg-blue-200 rounded-md">
          professional network
        </div>
        <div className="uppercase p-2 cursor-pointer hover:bg-blue-200 rounded-md">
          lounge
        </div>
        <div className="uppercase p-2 cursor-pointer hover:bg-blue-200 rounded-md">
          salary
        </div>
      </div>

      <div className="flex flex-row justify-around space-x-4">
        <button className="  rounded-md  uppercase p-1  text-blue-500 focus:outline-none border-2 border-blue-500">create job</button>
        <div className=" bg-blue-500 text-white rounded-2xl uppercase p-2  cursor-pointer focus:outline-none">jo</div>
        <button className="uppercase p-2 focus:outline-none">logout</button>
      </div>
    </div>
  );
}
