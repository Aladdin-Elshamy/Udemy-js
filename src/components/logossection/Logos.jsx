function Logos() {
  const logos = [
    "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
    "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
  ];

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
