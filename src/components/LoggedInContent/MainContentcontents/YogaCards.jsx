import React from 'react'

const YogaCards = ({name,details,link}) => {
  return (
    <>
        <div className="bg-purple-600 text-white p-3 rounded-2xl min-h-[800px] w-[470px] lg:w-[29vw]">
          <div className="rounded-lg mb-3">
            <iframe
              className="w-full h-[250px] rounded-lg mx-auto"
              src={link}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="bg-white h-[503px] text-purple-700 rounded-lg p-4 px-6">
            <div className="text-xl font-semibold mb-4 mt-2 border-4 py-2 px-3 border-purple-600 rounded-lg">
              <a className="font-bold">{name}</a>
            </div>
            <div>
              {details}
            </div>
          </div>
        </div>
    </>
  )
}

export default YogaCards