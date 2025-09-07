export function CountriesSection() {
  const countries = [
    "عنيزة", "الخرج", "ينبع", "الباحة", "القنفذة",
    "الدلم", "بلجرشي", "بيشة", "بارق", "ذهبان",
    "الدرعية", "ضباء", "دومة الجندل", "دوادمي",
    "فرسان", "قطغات", "غويّية", "القويعية", "حوطات سدير",
  ];

  return (
    <section
      dir="rtl"
      className="relative bg-primary text-white overflow-hidden"
      aria-label="الأماكن التي نوصل إليها"
    >
      {/* Top diagonal — smooth & seam-proof */}
      <div className="absolute inset-x-0 -top-px leading-none" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="block h-[100px] w-full"
        >
          {/* overscan upward to avoid a seam */}
          <path
            d="M0,100 L1440,-2 L1440,-2 L0,-2 Z"
            fill="#ffffff"
            stroke="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Bottom diagonal — smooth & seam-proof */}
      <div className="absolute inset-x-0 -bottom-px leading-none" aria-hidden>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          shapeRendering="geometricPrecision"
          className="block h-[100px] w-full"
        >
          {/* overscan downward to overlap next section */}
          <path
            d="M0,102 L1440,0 L1440,120 L0,102 Z"
            fill="#ffffff"
            stroke="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-16 py-32 text-center">
        <div className="mb-8">
          <img
            src="/5.png"
            alt="Delivery icon"
            className="
              mx-auto mb-4
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-32 md:h-32
              lg:w-40 lg:h-40
              xl:w-48 xl:h-48
              object-contain
            "
          />
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          الأماكن التي نوصل إليها
        </h2>

        <div className="flex flex-wrap justify-center gap-4 space-x-reverse">
          {countries.map((country, index) => (
            <span
              key={index}
              className="
                bg-white text-black
                px-8 py-2
                rounded-full
                text-2xl font-medium
                transition duration-300
                hover:bg-gray-100 hover:scale-105 hover:shadow-md
                select-none
              "
            >
              {country}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
