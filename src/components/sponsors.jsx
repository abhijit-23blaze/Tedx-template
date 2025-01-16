function Sponsors() {
  const sponsors = [
    {
      name: "Electrosteel",
      logo: "https://images.jdmagicbox.com/v2/comp/navi-mumbai/q4/022pxx22.xx22.000514231910.m2q4/catalogue/electrosteel-casting-ltd-cbd-belapur-navi-mumbai-pvc-pipe-manufacturers-0bgj50hg78.jpg", // Replace with actual logo URL
    },
  ];
  const partners = [
    {
      name: "Big Stay",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuksl1mMFOSTPdrZPzutR7mdOutY0vJC_5A&s",
    },
    {
      name: "Courtyard by Yuhi",
      logo: "https://images.jdmagicbox.com/v2/comp/rohtak/e4/9999p1262.1262.180912020131.m7e4/catalogue/yuhi-hospitality-rohtak-sonipat-road-rohtak-hospitality-services-zfl3rj0moy.jpg",
    },

    {
      name: "Havin Homes",
      logo: "https://images.yourstory.com/cs/images/companies/HavinHomes-1614688536555.PNG?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75",
    },
  ];

  return (
    <main className="min-h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-red-950 pt-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
            Title Sponsors
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-black/30 rounded-xl p-8 border border-gray-700 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-auto rounded-lg object-contain group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-4 border-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mt-8 mb-4">
            Hospitality Partners
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-black/30 rounded-xl p-8 border border-gray-700 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partners, index) => (
              <div
                key={index}
                className="group relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={partners.logo}
                  alt={partners.name}
                  className="w-full h-auto rounded-lg object-contain group-hover:brightness-110"
                />
                <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-4 border-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Sponsors;
