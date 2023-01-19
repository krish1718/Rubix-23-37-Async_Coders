import React from "react";

const Journal = () => {
  return (
    <div>
      <div>
        <div className="min-h-[90vh] lg:p-10 p-2 bg-[url('https://www.memonotepad.com/img/wood.png')] card shadow-5-strong backdrop-blur-[30px]">
          <div className="min-h-[55vh] w-[60vw] bg-cover bg-no-repeat mx-auto rounded-xl p-2 bg-[url('https://img.freepik.com/premium-vector/paper-line_77417-515.jpg?size=626&ext=jpg')] card shadow-5-strong backdrop-blur-[30px]">
            <div className="text-center text-2xl mt-[30px] font-semibold">My Journal</div>
            <textarea
              type="text"
              className="p-3 px-10 pt-[32px] text-lg mt-10 ml-10 bg-transparent outline-none rounded-xl w-full min-h-[55vh] h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
