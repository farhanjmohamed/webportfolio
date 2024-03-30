import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="w-screen h-auto min-h-screen bg-gray-50 dark:bg-gray-800">
        {/* { ***************************** Header *********************** } */}

        <p className="text-center text-red-600 font-black text-5xl pt-10 pb-20">Farhan J Mohamed</p>

        <div className="border-b-2 w-1/2 mx-auto mb-10 border-red-600" />
        <div className="grid grid-cols-1 auto-rows-auto gap-[5rem] pb-20">
          <div className="mx-auto relative h-60 w-1/2 bg-gradient-to-b from-red-600 to-red-800 rounded-2xl p-5">
            <div className="absolute bottom-0 left-0 right-0 bg-red-800 rounded-b-2xl flex justify-center items-center">
              <a href="https://github.com/farhanjmohamed" className="text-white mx-3">
                Github
              </a>
              <a href="https://linkedin.com/in/farhanjmohamed" className="text-white mx-3">
                Linkedin
              </a>
              <a href="https://calendly.com/farhanjmohamed" className="text-white mx-3">
                Calendly
              </a>
            </div>
            <p className="text-center text-white">Header</p>
          </div>

          {/* { **************************** About ********************** } */}

          <div className="mx-auto relative h-60 w-1/2 bg-gradient-to-b from-red-600 to-red-800 rounded-2xl p-5">
            <div className="absolute bottom-0 left-0 right-0 bg-red-800 rounded-b-2xl flex justify-center items-center">
              <a href="https://github.com/farhanjmohamed" className="text-white mx-3">
                Github
              </a>
              <a href="https://linkedin.com/in/farhanjmohamed" className="text-white mx-3">
                Linkedin
              </a>
              <a href="https://calendly.com/farhanjmohamed" className="text-white mx-3">
                Calendly
              </a>
            </div>
            <p className="text-center text-white">About</p>
          </div>

          {/* { *************************** Skills *********************** } */}

          <div className="mx-auto relative h-60 w-1/2 bg-gradient-to-b from-red-600 to-red-800 rounded-2xl p-5">
            <p className="text-center text-white">Skills</p>

            <div className="p-2 text-center grid grid-cols-2 auto-rows-auto">
              <div className="inline-block">
                <p className="text-white">Javascript</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">PostgresSql</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">Rust</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">C#</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">Ruby</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">TailwindCSS</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">HTML</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">CSS</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">Ruby on Rails</p>
              </div>
              {/* ************************************ */}
              <div className="block">
                <p className="text-white">Reactjs</p>
              </div>
            </div>
          </div>

          {/* { ************************** Projects ********************** } */}

          <div className="mx-auto relative h-[50rem] w-1/2 bg-gradient-to-b from-red-600 to-red-800 rounded-2xl p-5">
            <p className="text-center text-white">Projects</p>

            <div className="grid grid-cols-1 auto-cols-auto gap-5">
              <div className="block">
                <p className="text-white text-xl pb-2">Project 1</p>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aspernatur earum excepturi ipsum
                  doloribus similique, atque quis velit ea quaerat!
                </p>
                <a href="" className="text-black font-semibold">
                  See Code
                </a>
              </div>
              <div className="block">
                <p className="text-white text-xl">Project 1</p>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aspernatur earum excepturi ipsum
                  doloribus similique, atque quis velit ea quaerat!
                </p>
              </div>
              <div className="block">
                <p className="text-white text-xl">Project 1</p>
                <p className="text-white text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aspernatur earum excepturi ipsum
                  doloribus similique, atque quis velit ea quaerat!
                </p>
              </div>
            </div>
          </div>

          {/* { ************************** Blog ********************** } */}

          <div className="mx-auto relative h-60 w-1/2 bg-gradient-to-b from-red-600 to-red-800 rounded-2xl p-5">
            <p className="text-center text-white">Blog</p>
            <a href="" className="text-white">
              Blog 1
            </a>
            <a href="" className="text-white">
              Blog 2
            </a>
            <a href="" className="text-white">
              Blog 3
            </a>
            <a href="" className="text-white">
              Blog 4
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
