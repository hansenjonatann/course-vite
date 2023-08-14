import ListNavigation from "./components/ListNavigation";

const navItems = [
  {
    label: "Menu 1",
    url: "#",
  },
  {
    label: "Menu 2",
    url: "#",
  },
];

const contents = [
  {
    title: "Air Mineral",
    html: <p>Dari mata air pilihan</p>,
    price: 1000,
  },
  {
    title: "Ciki",
    html: <p>Snack yang mengenyankan</p>,
    price: 2000,
    discount: 1500,
  },
  {
    title: "Ciki",
    html: <p>Snack yang mengenyankan</p>,
    price: 2000,
    discount: 1500,
  },
];
function App() {
  return (
    <body>
      <header className="bg-[#152a46] text-white px-[120px] py-[28px] flex justify-between ">
        <h1 className="text-[20px] font-bold">Header</h1>
        <nav>
          <ListNavigation items={navItems} />
        </nav>
      </header>
      <div className="px-[72px] py-[89px]  grid sm:grid-cols-1 md:grid-cols-3 ">
        {contents.map((item) => (
          <section className="w-[352px] " key={item.title}>
            <div className="bg-[#152a46] flex  flex-row rounded-t-[20px]">
              <img
                src="assets/img/person.png"
                alt=""
                className="w-[75px] h-[149.15px] ml-[28px] mt-[16px] "
              />
              <div>
                <h2 className="font-semibold  text-[16px] text-[#FFCD29] ml-[17px] mt-[27px]">
                  Intensive Bootcamp
                </h2>
                <p className="mt-[9px] ml-[17px] text-white font-bold text-[20px]">
                  Programming Laravel
                </p>
                <span className="text-white font-normal text-[12px] ml-[17px]">
                  (Getting Started with Laravel 9)
                </span>
              </div>
            </div>
            <h2 className="text-[#000] font-semibold mt-[9px] ml-[24px] text-[20px]">
              Programming Laravel
            </h2>
            <span className="text-[#000] text-[17px] font-semibold ml-[24px]">
              Getting Started with Laravel 9
            </span>
            <div className="flex flex-row items-center">
              <h2 className="ml-[24px] mt-[7px] text-[rgba(0,0,0,.50)] text-[12px] font-normal">
                Batch:
              </h2>
              <span className="ml-[16px] mt-[7px] text-[#000] text-[12px] font-normal">
                September 2022
              </span>
            </div>
            <div className="flex flex-row items-center">
              <h2 className="ml-[24px] mt-[7px] text-[rgba(0,0,0,.50)] font-normal">
                Mentor:
              </h2>
              <span className="ml-[9px] mt-[7px] text-[#000] text-[12px] font-normal">
                William Hartono, Farel Prayoga
              </span>
            </div>
            <div className="flex flex-row">
              <s className="ml-[125px] mt-[14px] text-[rgba(0,0,0,.50)] font-normal text-[15px] ">
                Rp 2060.000
              </s>
              <p className="text-[#0acf83] mt-[20px] ml-[6px] font-bold text-[20px]">
                Rp 560.000
              </p>
            </div>
          </section>
        ))}
      </div>

      <footer className="bg-[#152a46] text-white p-[20px] text-center">
        <p>
          Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.
        </p>
      </footer>
    </body>
  );
}

export default App;
