import React from "react";

const reviews = [
  { id: 1, name: "أحمد محمد", text: "خدمة ممتازة وتوصيل سريع! الطعام وصل ساخن ولذيذ. أنصح الجميع بتجربة هذا التطبيق الرائع.", role: "عميل", avatar: "" },
  { id: 2, name: "فاطمة علي", text: "تطبيق سهل الاستخدام ومتنوع في الخيارات. التوصيل دائماً في الوقت المحدد والجودة عالية.", role: "عميلة", avatar: "" },
  { id: 3, name: "محمد حسن", text: "أفضل تطبيق توصيل جربته! الأسعار معقولة والخدمة احترافية. شكراً لكم على هذه التجربة الرائعة.", role: "مستقل", avatar: "" },
  { id: 4, name: "سارة أحمد", text: "خدمة عملاء ممتازة وتشكيلة واسعة من المطاعم. التطبيق سريع ومريح للغاية في الاستخدام.", role: "Freelancer", avatar: "" },
  { id: 5, name: "عمر خالد", text: "توصيل سريع وطعام طازج دائماً. واجهة التطبيق بسيطة وسهلة. تجربة رائعة في كل مرة!", role: "عميل", avatar: "" },
  { id: 6, name: "نور الدين", text: "أحب التنوع في الخيارات والعروض المستمرة. الخدمة موثوقة والتوصيل دقيق في المواعيد.", role: "عميل مميز", avatar: "" },
];

export default function ReviewsSection() {
  return (
    <section
      dir="rtl"
      // Sit behind the previous section's diagonal, and tuck under it
      className="relative -z-10 -mt-[60px] sm:-mt-[80px] md:-mt-[100px] pt-20 md:pt-28 pb-20"
      style={{
        background: "linear-gradient(135deg, #E9DFF7 0%, #F3EBFB 100%)",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ماذا يقول عملاؤنا
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            آراء وتجارب عملائنا الكرام مع خدماتنا المميزة
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-6 md:p-7"
            >
              <blockquote className="text-gray-800 leading-relaxed text-sm md:text-base">
                “{review.text}”
              </blockquote>

              <hr className="my-5 border-gray-200" />

              <div className="flex items-center gap-3 justify-start">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6C4BA3] to-[#9C7AD9] text-white flex items-center justify-center font-semibold">
                    {review.name.charAt(0)}
                  </div>
                )}

                <div className="text-left">
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.role || "عميل"}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          {/* <button className="bg-[#6C4BA3] hover:bg-[#5A3D8A] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
            شاركنا تجربتك
          </button> */}
        </div>
      </div>
    </section>
  );
}
