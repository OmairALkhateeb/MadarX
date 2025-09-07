// export function RestaurantCategories() {
//   const categories = [
//     { name: "ماكدونالدز", image: "/mcdonalds-logo.png" },
//     { name: "كنتاكي", image: "/kfc-logo.png" },
//     { name: "برجر كينج", image: "/burger-king-logo.png" },
//     { name: "ستاربكس", image: "/generic-coffee-logo.png" },
//     { name: "بيتزا هت", image: "/pizza-hut-logo.png" },
//     { name: "بابا جونز", image: "/generic-sandwich-shop-logo.png" },
//     { name: "صب واي", image: "/generic-sandwich-shop-logo.png" },
//     { name: "دومينوز", image: "/dominos-logo.png" },
//   ]

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4 md:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">أفضل المطاعم وأكثر في جلوفو</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
//           {categories.map((category, index) => (
//             <div key={index} className="flex flex-col items-center group cursor-pointer">
//               <div className="w-20 h-20 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform">
//                 <img
//                   src={category.image || "/placeholder.svg"}
//                   alt={category.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <span className="text-sm font-medium text-gray-700 text-center">{category.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
