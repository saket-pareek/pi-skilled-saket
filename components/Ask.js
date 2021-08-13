import Image from "next/image";

export default function Ask() {
  return (
    <div className="pi-ask-que-clr flex justify-center mt-20">
      <div className="container mx-auto">
        <div className="text-3xl text-center font-bold pt-12">Ask a question and we will answer you by email</div>
        <div className="pi-ask-que-clr py-16">
          <form action="#" method="POST" className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="col-span-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md shadow-md"
                placeholder="max-trml@ya.ru (your email)"
              />
              <div className="grid grid-cols-10 gap-2 mt-3">
                <div className="col-span-1">
                  <Image src="/images/lock.svg" alt="Lock" width={20} height={20} />
                </div>
                <div className="col-span-9 text-xs text-gray-500">
                  Your contact data is securely protected, we undertake not to transfer your contact data to third parties
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <input
                id="message"
                name="message"
                type="text"
                className="w-full shadow-md py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                placeholder="Enter your question"
              />
            </div>
            <div className="col-span-1">
              <button
                type="submit"
                className="py-3 px-14 shadow-md text-base font-medium rounded-md text-white pi-ask-que-sub-clr hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
