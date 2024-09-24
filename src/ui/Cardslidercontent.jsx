/* eslint-disable react/prop-types */

import Button from "../elements/Button";

function Cardslidercontent({ title, description, buttons }) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <div className="flex md:flex-row space-x-0 md:space-x-4 justify-center flex-col">
        <Button
          text={buttons[0].text}
          className="bg-black text-white md:py-2 md:px-4 p-8 rounded hover:bg-gray-800"
        />
        <Button
          text={buttons[1].text}
          className="border border-black md:py-2 ml-0 md:px-4 p-8 rounded hover:bg-gray-200"
        />
      </div>
    </>
  );
}

export default Cardslidercontent;
