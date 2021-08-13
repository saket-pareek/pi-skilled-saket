import { useState } from "react";

const tabs = [
  { name: "Industry skills", href: "#", id: "One", current: false },
  { name: "Certification Training", href: "#", id: "Two", current: false },
  { name: "Skill Coach", href: "#", id: "Three", current: true },
  { name: "Placement Services", href: "#", id: "Four", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function TabOne() {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20 mx-2 sm:mx-8 xl:mx-0">
      <div className="card-1 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-1.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Client Onboarding ( KYC/AML)</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2 hidden sm:block shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-2.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Securities Operations</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-3 hidden lg:block shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-3.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">General Insurance Principles</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TabTwo() {
  return (
    <div className="mt-20 grid grid-cols-3 gap-20">
      <div className="card-1 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-1.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Client Onboarding ( KYC/AML)</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-2.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Securities Operations</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-3 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-3.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">General Insurance Principles</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TabThree() {
  return (
    <div className="mt-20 grid grid-cols-3 gap-20">
      <div className="card-1 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-1.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Client Onboarding ( KYC/AML)</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-2.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Securities Operations</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-3 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-3.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">General Insurance Principles</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function TabFour() {
  return (
    <div className="mt-20 grid grid-cols-3 gap-20">
      <div className="card-1 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-1.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Client Onboarding ( KYC/AML)</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-2 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-2.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">Securities Operations</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-3 shadow-xl rounded-xl p-3">
        <img className="img w-full" src="images/explore-3.png" alt="" />
        <div className="content">
          <div className="mt-4 flex justify-between">
            <div className="rating flex space-x-1 items-center">
              <img src="/images/star.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">45(120)</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/visibility.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">10 800</h6>
            </div>
            <div className="rating flex space-x-1 items-center">
              <img src="/images/start.svg" alt="" className="icon"></img>
              <h6 className="text text-sm">12 Lessons</h6>
            </div>
          </div>
          <h4 className="heading text-md font-semibold mt-4">General Insurance Principles</h4>
          <p className="sub text-md mt-4">Nemo enim ipsam voluptatem quia voluptas sit. Lorem ipsum dolor sit.</p>
          <div className="details mt-5 flex justify-between items-center">
            <div className="teacher flex space-x-2 items-center">
              <img src="images/teacher.png" alt="" class="w-12" />
              <div className="info">
                <div className="level text-gray-400 font-semibold text-sm">Expert</div>
                <div className="name font-semibold text-sm mt-1">John Doe</div>
              </div>
            </div>
            <div className="price flex space-x-12">
              <div className="prev-price text-gray-400 font-bold text-sm line-through hidden">$99.99</div>
              <div className="curr-price text-red-600 font-bold text-sm">$49.99</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Explore() {
  const [uiState, setUiState] = useState("One");

  return (
    <div>
      <div>
        <div className="hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="xl:container xl:mx-auto mt-36 relative">
          <img src="/images/left-arrow.svg" className="hidden xl:block absolute top-1/2 left-0 w-10 h-10"></img>
          <img src="/images/right-arrow.svg" className="hidden xl:block absolute top-1/2  right-0 w-10 h-10"></img>
          <div className="text-5xl text-center font-bold">Explore Our Offerings</div>
          <div className="flex flex-col items-center">
            {/* <nav className="-mb-px flex space-x-24 border-b border-gray-600 mt-12" aria-label="Tabs">
              {tabs.map((tab) => (
                <div
                  key={tab.name}
                  // href={tab.href}
                  className={classNames(
                    tab.id === uiState ? "border-red-500 text-red-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-1 px-4 border-b font-bold tracking-wide text-lg"
                  )}
                  aria-current={tab.id ? "page" : undefined}
                  onClick={() => setUiState(tab.id)}>
                  {tab.name}
                </div>
              ))}
            </nav> */}
            <div>{uiState === "One" && <TabOne />}</div>
            <div>{uiState === "Two" && <TabTwo />}</div>
            <div>{uiState === "Three" && <TabThree />}</div>
            <div>{uiState === "Four" && <TabFour />}</div>
          </div>
          <div className="flex justify-end capitalize mt-10 mx-8 xl:mx-0">
            <h5 className="border-b-2 border-blue-500">All our courses</h5>
          </div>
          {/* <ul className="nav-dots flex justify-between">
            <li className="h-5 w-5 bg-blue-300"></li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}
