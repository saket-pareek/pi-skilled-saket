export default function Features() {
  return (
    <div>
      <section className="features container mx-auto -mt-12 flex flex-col items-center">
        <div className="bg-white w-4/5 px-10 sm:w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 sm:px-20 lg:px-32 xl:px-20 py-5 rounded-3xl shadow-lg">
          <div className="feature-1 flex flex-col items-center">
            <img src="/images/icon1-b.svg" className="icon-1 h-20 w-20"></img>
            <div className="h-2 bg-blue-600 w-2/3 mt-4 rounded-lg"></div>
            <h3 className="text-1 text-center pt-5">Acquire job-ready skills with courses created by industry experts.</h3>
          </div>
          <div className="feature-2 flex flex-col items-center">
            <img src="/images/icon2-b.svg" className="icon-2 w-20 h-20"></img>
            <div className="h-2 bg-red-600 w-2/3 mt-4 rounded-lg"></div>
            <div className="text-2 text-center pt-5">Fast-track your career with mentoring from industry experts.</div>
          </div>
          <div className="feature-3 flex flex-col items-center">
            <img src="/images/icon3-b.svg" className="icon-3 w-20 h-20"></img>
            <div className="h-2 bg-green-600 w-2/3 mt-4 rounded-lg"></div>
            <div className="text-3 text-center pt-5">Acquire Industry certification from Global certification bodies.</div>
          </div>
          <div className="feature-4 flex flex-col items-center">
            <img src="/images/icon4-b.svg" className="icon-4 w-20 h-20"></img>
            <div className="h-2 bg-yellow-600 w-2/3 mt-4 rounded-lg"></div>
            <div className="text-4 text-center pt-5">Job placement assistance inline with career goals.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
