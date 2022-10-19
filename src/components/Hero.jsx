import {
  clientAudiophile,
  clientDatabiz,
  clientMarker,
  clientMeet,
  heroDesktop,
  heroMobile,
} from '../assets'

const Hero = () => {
  return (
    <section role="contentinfo" className="mobile:flex mobile:flex-row-reverse mobile:justify-around ">
      <div className="mobile:w-[30em] ">
        <img
          src={heroMobile}
          alt="hero"
          className="block mobile:hidden max-w-full"
        />
        <img
          src={heroDesktop}
          alt="hero"
          className="hidden mobile:block max-w-full"
        />
      </div>

      <div className="mobile:flex flex-col justify-between pl-2 pr-2">
        <article className="mt-6 space-y-16 w-[35ch] mx-auto mobile:w-[50ch]">
          <h1 className="text-4xl font-bold text-center mobile:text-left mobile:text-[4.2rem] mobile:leading-[5rem] ">
            Make Remote Work
          </h1>
          <h2 className=" text-center  font-medium text-gray-500 mobile:text-left">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </h2>
          <div className="flex justify-center mt-6 mobile:justify-start">
            <button className=" bg-black text-white font-medium rounded-xl pl-5 pr-5 pt-2 pb-2 border-2 border-black button-state  mobile:pl-7 mobile:pr-7 mobile:pt-3 mobile:pb-3">
              Learn More
            </button>
          </div>
        </article>

        <ul className="flex justify-around p-4 mt-5 ">
          <li>
            <a href="#">
              <img className="p-2" src={clientDatabiz} alt="Databiz logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                className="p-2"
                src={clientAudiophile}
                alt="Audiophile logo"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="p-2" src={clientMeet} alt="Meet logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="p-2" src={clientMarker} alt="Marker logo" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Hero
