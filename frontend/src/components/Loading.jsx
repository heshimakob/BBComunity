const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-row lds-ellipsis ml-5 p-5">
        <div className="dot bg-blue-900 w-4 h-4 rounded-full animate-pulse delay-100"></div>
        <div className=" dot bg-blue-900 w-4 h-4 rounded-full animate-pulse delay-200"></div>
        <div className="dot bg-blue-900 w-4 h-4 rounded-full animate-pulse delay-300"></div>
        <div className="dot bg-blue-900 w-4 h-4 rounded-full animate-pulse delay-400"></div>
        <div className="dot bg-blue-900 w-4 h-4 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default Loading;