function SpeakerCard({ image, name, description }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 hover:shadow-2xl hover:shadow-glow">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Speaker() {
  const speakers = [
    {
      name: "Thulasimathi Murugesan  ",
      description:
        "A badminton paralympian from Tamil Nadu. She represented India at the Paris 2024 Paralympics and 2022 Asian Para Games. She won three medals in para badminton competitions, SL3-SU5 and SU5 classes. She made history as the first Indian woman shuttler to win a Paralympic silver medal, following a remarkable journey to the final in the SU5 category.",
      image: "/thulasi.webp",
      alt: "Thulasimathi Murugesan",
    },
    {
      name: "Malvika Jey",
      description:
        "An artist known for her exploration of surrealism and abstract art. She began her artistic journey since she was 4 years old. Over the years, she has experimented with various mediums and styles to develop her unique signature, focusing on emotional expression through color and form.",
      image: "/malvikajey.png",
      alt: "Malvika Jey",
    },

    {
      name: "Dr. Abhinanda Sarkar",
      description:
        "Dr. Sarkar is a certified Master Black Belt in Lean Six Sigma and Design for Six Sigma. He has been visiting faculty at Stanford and ISI and continues to teach at IIM-Bangalore and IISc. His publications, patents & technical leadership have been in applying probabilistic models, statistical analysis, and machine learning.",
      image: "/abhinandasarkar.jpeg",
      alt: "Dr. Abhinanda Sarkar",
    },
    {
      name: "Dr. Ashok Rajgopal",
      description:
        "An Indian orthopaedic surgeon, credited with close to 20,000 Arthroscopic and over 35,000 Total Knee Arthroplasty surgeries and reported to be one of the most experienced in his field in India. He was honoured by the Government of India in 2014, by bestowing on him the Padmashri, the fourth highest civilian award, for his services to the fields of orthopaedic surgery.",
      image: "/ashokrajgopal.jpg",
      alt: "Dr. Ashok Rajgopal",
    },
    {
      name: "Ramalingam Natarajan",
      description:
        "The co-founder of Volunteer for India (VFI), an organization aimed at fostering volunteerism to address social issues across the country. His career trajectory is notable for its blend of engineering, education, and social innovation. Initially trained as an aerospace engineer, he worked on projects for Airbus and Boeing before shifting to impactful community work.",
      image: "/ramalingam.jpg",
      alt: "Ramalingam Natarajan",
    },
    {
      name: "Swarnalatha",
      description:
        "Swarnalatha Y is a visionary leader in innovation and strategic growth. With a strong background in leadership and problem-solving, she transforms challenges into opportunities.As communication coach she is widely acknowledged in the industry for her human-centered engaging style and focus on authentic story-telling, powerful ideas, compelling presentations and effective public speaking and communication.",
      image: "/swarnalatha.png",
      alt: "Swarnalatha",
    },

    {
      name: "Sunil Raveendran",
      description:
        "A visionary software architect and technology thought leader who believes in harnessing digital innovation for societal good.Featured in Forbes 50 Blockchain Teams, Sunil brings over two decades of enterprise software architecture experience. As the President of Kerala Chapter of India Blockchain Forum and a board of studies member at Digital University Kerala, he's actively shaping the future of digital education and technology adoption.",
      image: "/sunilraveendran.jpg",
      alt: "Sunil Raveendran",
    },
    {
      name: "Karuppannan Jaishankar",
      description:
        'Karuppannan Jaishankar is an Indian criminologist. He is the Founder and Principal Director and Professor of Criminology and Justice Sciences at the International Institute of Justice & Police Sciences.He is the founding father of cyber criminology,an academic sub-discipline of criminology and the proponent of the "Space Transition Theory of Cyber Crimes" which holds that people behave differently online than they do in real life.',
      image: "/jaishankar.jpg",
      alt: "Karuppannan Jaishankar",
    },
    {
      name: "Anil Kumar",
      description:
        "A leader in digital transformation, he blends expertise in AI, cloud, and innovation to deliver groundbreaking solutions.With 400+ successful deals and a passion for mentoring future leaders, his journey is truly inspiring. Anil Kumar's work continues to shape the future of technology across industries.",
      image: "/anilkumar.png",
      alt: "Anil Kumar",
    },
    // Add more speaker objects as needed
  ];

  return (
    <div className="h-[80%] relative">
      <div
        className="w-full h-[60vh] bg-repeat-y bg-right-bottom flex flex-col justify-center items-center mt-[3vh]"
        style={{
          backgroundImage: `url('src/assets/speakers.png')`,
          backgroundSize: "100% 60vh",
          backgroundPosition: "10% 30%",
        }}
      >
        <div className="absolute top-[4%] left-0 w-full flex justify-center items-center text-white font-bold text-4xl z-10">
          <span>Meet Our TEDx Speakers</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-[-25%]">
        <div className="flex flex-wrap justify-center">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              image={speaker.image}
              name={speaker.name}
              description={speaker.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speaker;
