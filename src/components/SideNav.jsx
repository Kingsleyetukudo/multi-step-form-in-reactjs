function SideNav() {
  return (
    // <section>
    <div className="bg-desktop-bg bg-no-repeat bg-cover bg-center p-8 flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <p className=" font-bold bg-Light-blue border-Light-gray border rounded-full flex items-center justify-center w-9 h-9">
          1
        </p>
        <div className="flex flex-col justify-center uppercase">
          <p className="text-Cool-gray text-sm">Step 1</p>
          <p className="text-white font-medium text-base tracking-wider">
            your info
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className=" font-bold bg-Light-blue border-Light-gray border rounded-full flex items-center justify-center w-9 h-9">
          2
        </p>
        <div className="flex flex-col justify-center uppercase">
          <p className="text-Cool-gray text-sm">Step 2</p>
          <p className="text-white font-medium text-base tracking-wider">
            select plan
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className=" font-bold bg-Light-blue border-Light-gray border rounded-full flex items-center justify-center w-9 h-9">
          3
        </p>
        <div className="flex flex-col justify-center uppercase">
          <p className="text-Cool-gray text-sm">Step 3</p>
          <p className="text-white font-medium text-base tracking-wider">
            add-ons
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className=" font-bold bg-Light-blue border-Light-gray border rounded-full flex items-center justify-center w-9 h-9">
          4
        </p>
        <div className="flex flex-col justify-center uppercase">
          <p className="text-Cool-gray text-sm">Step 4</p>
          <p className="text-white font-medium text-base tracking-wider">
            summary
          </p>
        </div>
      </div>
    </div>
    // </section>
  );
}

export default SideNav;
