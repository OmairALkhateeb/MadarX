// app/privacy-policy/page.tsx
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div
      dir="rtl"
      className="min-h-screen flex flex-col"
      style={{ background: "linear-gradient(135deg, #E9DFF7 0%, #F3EBFB 100%)" }}
    >
      <Header />

      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-bold mb-6 text-center">سياسة الخصوصية</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">مقدمة</h2>
          <p>
            نحن في تطبيقنا نأخذ خصوصيتك على محمل الجد. تشرح هذه السياسة كيفية جمع
            واستخدام وحماية معلوماتك الشخصية عند استخدامك للتطبيق.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">المعلومات التي نقوم بجمعها</h2>
          <ul className="list-disc pr-6 space-y-2"> {/* pr for RTL lists */}
            <li>
              المعلومات الشخصية التي تقدمها عند التسجيل، مثل الاسم، البريد الإلكتروني،
              ورقم الهاتف.
            </li>
            <li>
              معلومات الاستخدام مثل صفحات التطبيق التي تزورها وكيفية تفاعلك معها.
            </li>
            <li>بيانات الموقع الجغرافي إذا سمحت بذلك.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">كيفية استخدام المعلومات</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>لتحسين جودة خدماتنا وتخصيص تجربتك داخل التطبيق.</li>
            <li>لإرسال تحديثات، إشعارات، وعروض خاصة ذات صلة.</li>
            <li>للحفاظ على أمان حسابك ومنع الاحتيال.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">حماية المعلومات</h2>
          <p>
            نلتزم باتخاذ جميع التدابير الأمنية المناسبة لمنع الوصول غير المصرح به أو
            التعديل أو الكشف أو التدمير غير القانوني للمعلومات الشخصية.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">مشاركة المعلومات مع أطراف ثالثة</h2>
          <p>
            لن نشارك معلوماتك الشخصية مع أي طرف ثالث بدون موافقتك، إلا إذا كان ذلك
            مطلوبًا قانونيًا أو لتقديم الخدمات لك.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">حقوقك</h2>
          <p>
            لديك الحق في الوصول إلى معلوماتك الشخصية التي نحتفظ بها، وطلب تصحيحها أو
            حذفها في أي وقت. يمكنك التواصل معنا لذلك عبر البريد الإلكتروني الخاص بنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">تغييرات على سياسة الخصوصية</h2>
          <p>
            قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات مهمة عبر
            التطبيق أو البريد الإلكتروني.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">الاتصال بنا</h2>
          <p>
            إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يرجى التواصل معنا
            على البريد الإلكتروني:
          </p>
          <p className="font-semibold mt-2">madarx.app.sa@hotmail.com</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
