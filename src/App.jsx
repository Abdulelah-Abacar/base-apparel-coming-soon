import logo from './images/logo.svg';
import heroDes from './images/hero-desktop.jpg';
import heroMob from './images/hero-mobile.jpg';
import arrowIcon from './images/icon-arrow.svg';
import errorIcon from './images/icon-error.svg';
/*
  We're coming soon

  Hello fellow shoppers! We're currently building our new fashion store. 
  Add your email below to stay up-to-date with announcements and our launch deals.

  Email Address
*/
function App() {

  return (
    <main className="min-h-screen bg-red-50/70 flex items-center justify-center">
      <section className="font-JS mt-2 max-w-screen-xl w-full sm:w-11/12 grid md:grid-cols-3 md:grid-rows-3">

        {/* large divices */}
        <div className="hidden md:block px-32 pt-20 row-span-3 col-span-2 md:bg-[url(./images/bg-pattern-desktop.svg)] bg-cover bg-center bg-no-repeat">
          <div className='bg-red-40'>
            <h1>
              <img src={logo} alt="logo" />
            </h1>
          </div>
          <div className='bg-blue-40 pt-28'>
            <h1 className='leading-tight text-6xl font-semibold uppercase text-gray-800'><span className='font-light text-red-300'>We're</span> <br /> coming <br /> soon</h1>
            <p className='my-6 text-red-300 pr-20'>
              Hello fellow shoppers! We're currently building our new fashion store. 
              Add your email below to stay up-to-date with announcements and our launch deals.
            </p>
            <div>
              <div className='relative w-fit mb-12'>
                <input className='peer w-80 border-2 border-red-300 py-2 px-8 rounded-full outline-none invalid:border-red-600' type="email" placeholder='Email Address' />
                <span className='peer-invalid:block hidden absolute top-1/2 -translate-y-1/2 right-[90px]'><img src={errorIcon} alt="..." /></span>
                <button className='absolute top-1/2 -translate-y-1/2 right-0 bg-red-300 px-8 py-3 rounded-full hover:scale-110'><img src={arrowIcon} alt="..." /></button>
                <span className='peer-invalid:block absolute -bottom-8 text-red-500 px-5 py-1 hidden group-invalid:block'>Please provide a valid email</span>
              </div>
            </div>
          </div>
        </div>

        {/* small divices */}
        <div className="md:hidden bg-red-40 row-span-2 p-8">
          <h1>
            <img src={logo} alt="logo" />
          </h1>
        </div>

        <div className="bg-pink-400 row-span-3">
          <div className='h-full'>
            <picture>
              <source media='(min-width: 767.99px)' srcSet={heroDes} />
              <img className='object-cover w-full h-full' src={heroMob} alt="hero" />
            </picture>
          </div>
        </div>

        {/* small divices */}
        <div className="md:hidden bg-blue-40 row-span-2 text-center">
          <h1 className='text-4xl font-semibold uppercase text-gray-800 mt-16'><span className='font-light text-red-300'>We're</span> <br /> coming <br /> soon</h1>
          <p className='my-6 text-red-300 w-80 mx-auto'>
            Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <div>
            <div className='relative w-fit mb-12 mx-auto'>
              <input className='peer w-80 border-2 border-red-300 py-2 px-8 rounded-full outline-none invalid:border-red-600' type="email" placeholder='Email Address' />
              <span className='peer-invalid:block hidden absolute top-1/2 -translate-y-1/2 right-[90px]'><img src={errorIcon} alt="..." /></span>
              <button className='absolute top-1/2 -translate-y-1/2 right-0 bg-red-300 px-8 py-3 rounded-full hover:scale-110'><img src={arrowIcon} alt="..." /></button>
              <span className='peer-invalid:block absolute -bottom-8 text-red-500 px-5 py-1 hidden group-invalid:block'>Please provide a valid email</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
