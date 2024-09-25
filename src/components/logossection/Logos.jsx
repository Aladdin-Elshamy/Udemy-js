import { logos } from "../../data/Logosdata";

function Logos() {
 
  return (
    <div className="w-full bg-slate-100 border-red-50 h-auto">
      <div className="w-10/12 mx-auto px-2 flex flex-col justify-center">
        {/* header of brands section */}
        <h2 className="font-normal text-l s:text-m md:text-xl text-center text-gray-500 mb-11 pt-8">
          Trusted by over 16,000 companies and millions of learners around the
          world
        </h2>
        {/* logos */}
        <ul className="grid grid-rows-2 grid-cols-4 gap-4 md:grid-cols-8 mb-10 md:mb-0">
          {logos.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Logos;
