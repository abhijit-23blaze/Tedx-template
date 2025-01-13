function ReasonsToAttend() {
  const reasons = [
    {
      id: 1,
      title: "Diverse Ideas",
      description:
        "A day where remarkable individuals from all walks of life share the stories that shaped their legacy",
      image: "/diverse.png",
      alt: "Diverse Ideas",
    },
    {
      id: 2,
      title: "Networking",
      description:
        "Opportunity to engage in dialogue and connect with diverse individuals,a collaborative exchange of ideas.",
      image: "/network.jpg",
      alt: "Networking",
    },
    {
      id: 3,
      title: "Inspiration",
      description:
        "Hear stories that inspire and challenge the way you think about the world.",
      image: "/inspiration.jpg",
      alt: "Inspiration",
    },
    {
      id: 4,
      title: "Performances",
      description:
        "Entertainment is never overlooked! Find yourself immersed in a day of brilliant performances, ranging from art to music to stand-up comedy.",
      image: "/performance.jpeg",
      alt: "Performances",
    },
    {
      id: 5,
      title: "Expeience to cherish",
      description:
        "Hear stories that inspire and challenge the way you think about the world.",
      image: "/experience.jpg",
      alt: "Experience to cherish",
    },
    {
      id: 6,
      title: "Meet and Greet",
      description:
        "Connect with fellow attendees & special guests in an engaging meet and greet session, where meaningful conversations and new friendships begin.",
      image: "/meetngreet.png",
      alt: "Meet and Greet",
    },

    // Add more items as needed
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Why <span className="text-red-600">Participation</span> Matters
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the heroes dedicated to the betterment of humanity and interact
            with visionaries who are redefining fields that resonate with your
            values.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason) => (
            <div 
              key={reason.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl opacity-0 group-hover:opacity-10 transform transition-all duration-500"></div>
              <div className="backdrop-blur-lg bg-black/30 rounded-2xl p-8 border border-gray-800 shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:border-red-500/30">
                <div className="w-full aspect-square rounded-xl overflow-hidden mb-6">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="relative">
                  <span className="absolute -top-12 right-0 text-6xl font-bold text-red-600/10">
                    {`0${reason.id}`}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReasonsToAttend;