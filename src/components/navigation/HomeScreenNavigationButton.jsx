import React from 'react'

const HomeScreenNavigationButton = () => {
  return (
    <>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white text-s font-bold py-2 px-4 rounded"
        onClick={() => handleClick()}
      ></button>
    </>
  )
}

export default HomeScreenNavigationButton
