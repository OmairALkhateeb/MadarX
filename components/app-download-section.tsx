"use client";

import Image from "next/image";

export function AppDownloadSection({
  appName = "مدار",
  appStoreUrl = "#",
  playStoreUrl = "#",
  phoneMock = "/don.png",
  dir = "rtl" as "rtl" | "ltr",
}: {
  appName?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  phoneMock?: string;
  dir?: "rtl" | "ltr";
}) {
  const isRTL = dir === "rtl";

  // Mobile: center text; sm+ respect RTL/LTR
  const textAlign = isRTL ? "text-center sm:text-right" : "text-center sm:text-left";
  const flexRowDir = isRTL ? "sm:flex-row-reverse" : "sm:flex-row";
  const gridOrderText = isRTL ? "order-2 md:order-1" : "order-1 md:order-1";
  const gridOrderImage = isRTL ? "order-1 md:order-2" : "order-2 md:order-2";
  const sideMargin = isRTL ? "mx-auto sm:ml-auto" : "mx-auto sm:mr-auto";

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-18 md:py-24 lg:py-28 bg-white"
      aria-label={`منطقة تحميل تطبيق ${appName}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" dir={dir}>
        <div className="grid items-center gap-10 sm:gap-12 lg:gap-16 md:grid-cols-2">
          {/* TEXT */}
          <div className={gridOrderText}>
            <div className={`max-w-xl ${sideMargin} ${textAlign}`}>
              <h2 className="mt-4 sm:mt-5 font-bold tracking-tight text-slate-900 leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                حمّل تطبيق {appName}
              </h2>

              <p className="mt-4 sm:mt-5 text-slate-600 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
                اطلب أي شيء وراقبه لحظةً بلحظة. سرعة موثوقة وتجربة مصممة بعناية لراحتك.
              </p>

              {/* Store badges */}
              <div
                className={`mt-7 sm:mt-8 flex flex-col ${flexRowDir} gap-3 sm:gap-4 justify-center ${
                  isRTL ? "sm:justify-end" : "sm:justify-start"
                } items-center sm:items-start`}
              >
                {/* Google Play */}
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={isRTL ? "تنزيل من جوجل بلاي" : "Get it on Google Play"}
                  className="sm:w-auto mx-auto sm:mx-0"
                >
                  <Image
                    src="/playstore.png"
                    alt="Google Play download badge"
                    height={55}
                    width={0}
                    className="block mx-auto h-[55px] w-auto"
                  />
                </a>

                {/* App Store */}
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={isRTL ? "تنزيل من آب ستور" : "Download on the App Store"}
                  className="sm:w-auto mx-auto sm:mx-0"
                >
                  <Image
                    src="/appstore.png"
                    alt="App Store download badge"
                    height={55}
                    width={0}
                    className="block mx-auto h-[55px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className={gridOrderImage}>
            <div className="relative mx-auto w-full max-w-xl sm:max-w-2xl">
              {/* Gradient Shadow / Glow Layer */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl scale-105"
                style={{
                  background: "linear-gradient(135deg, #E9DFF7 0%, #F3EBFB 100%)",
                  opacity: 0.9,
                }}
              />

              <Image
                src={phoneMock}
                alt={`واجهة تطبيق ${appName}`}
                width={1200}
                height={2000}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 640px"
                className="relative w-full object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center text-[11px] sm:text-xs text-slate-500 leading-5">
          بالضغط على زر التحميل، فأنت تقرّ بموافقتك على الشروط وسياسة الخصوصية.
        </div>
      </div>
    </section>
  );
}
