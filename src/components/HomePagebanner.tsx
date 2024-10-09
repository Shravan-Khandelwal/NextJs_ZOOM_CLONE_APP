import React from "react";

function HomePagebanner() {
  return (
    <div>
      <section className="relative rounded-2xl max-w-[80rem] max-h-[45vh] bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="sticky mb-80 max-w-xl  text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-500">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePagebanner;
