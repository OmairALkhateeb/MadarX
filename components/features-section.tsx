// Light-mode Features Section (RTL, Tailwind-only)
export function FeaturesSection() {
  const features = [
    {
      title: "توصيل آمن",
      description:
        "نحرص على أن تصل طلباتك بأعلى معايير الأمان، حيث يقوم المندوب بتوصيل أغراضك بعناية تامة وضمان سلامتها حتى باب منزلك.",
      image: "/1.png",
    },
    {
      title: "توصيل مرن",
      description:
        "خدمة مصممة لتلبية احتياجاتك المختلفة، حيث يمكن للمندوب حمل وتوصيل عدة أغراض في رحلة واحدة دون تأخير.",
      image: "/2.png",
    },
    {
      title: "توصيل بالسيارة",
      description:
        "للطلبات الكبيرة أو الشحنات المتعددة، نوفر سيارات توصيل مخصصة لضمان وصول كل احتياجاتك بسهولة وفي الوقت المحدد.",
      image: "/3.png",
    },
  ];

  return (
    <section
      dir="rtl"
      className="relative isolate z-10 -mt-px overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 text-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            توصيل أي شيء
          </h2>
          <p className="mx-auto mt-4 md:mt-8 max-w-2xl text-lg text-gray-600">
            كل ما تحتاجه، من المطاعم إلى البقالة، يصل إليك بسهولة.
          </p>
        </div>

        {/* Features grid (no cards) */}
        <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <div className="mx-auto mb-8 flex h-48 w-48 items-center justify-center">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-48 object-contain"
                />
              </div>

              <h3 className="text-2xl font-bold">{feature.title}</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
