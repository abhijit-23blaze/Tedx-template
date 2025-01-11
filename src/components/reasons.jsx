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
    <section className="py-12 bg-black text-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Why participation matters</h2>
        <p className="text-lg mt-2">
          Meet the heroes dedicated to the betterment of humanity and interact
          with visionaries who are redefining fields that resonate with your
          values.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <div key={reason.id} className="flex flex-col items-center">
            <div className="w-64 h-64 bg-gray-800 rounded-full flex justify-center items-center shadow-lg relative overflow-hidden transform transition duration-500 hover:scale-110">
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-full object-cover rounded-full opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-red-500 text-3xl font-bold mb-2">{`0${reason.id}`}</span>
                <h3 className="text-2xl font-semibold">{reason.title}</h3>
                <p className="text-center mt-4 text-gray-300 p px-6">
                  {reason.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReasonsToAttend;
