export default function Header(props) {
  return (
    <div className="flex flex-row  flex-wrap justify-between  p-4 bg-white">
      <button type="button" className="block sm:hidden" onClick={e=>{props.changeNavOpen()}}>
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {props.isnavopen && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!props.isnavopen && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button>
      <div className="flex flex-row cursor-pointer">
        <h1 className="text-2xl  text-blue-500 font-bold uppercase">
          Health explore
        </h1>
      </div>
      <div className="hidden  lg:flex lg:flex-row lg:flex-wrap lg:space-x-2 ">
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
        <button className="hidden sm:block rounded-md  uppercase p-1  text-blue-500 focus:outline-none border-2 border-blue-500">
          create job
        </button>
        <div className=" bg-blue-500 text-white rounded-2xl uppercase p-2  cursor-pointer focus:outline-none">
          jo
        </div>
        <button className="hidden sm:block uppercase p-2 focus:outline-none">
          logout
        </button>
      </div>
    </div>
  );
}
