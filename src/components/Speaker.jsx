import { useState, useEffect } from 'react';

function SpeakerCard({ image, name, description }) {
  return (
    <div className="relative group perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-red-900 rounded-2xl opacity-0 group-hover:opacity-20 transform transition-all duration-500 animate-gradient-xy"></div>
      <div className="backdrop-blur-lg bg-black/30 rounded-2xl p-6 border border-gray-800 shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:rotate-y-12 hover:border-red-500/30">
        <div className="relative mb-6 overflow-hidden rounded-xl aspect-[4/3] transform transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-3">{name}</h3>
        <p className="text-gray-300 leading-relaxed text-sm transform transition-all duration-300 group-hover:text-white">{description}</p>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute -inset-px bg-gradient-to-r from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
          <div className="absolute inset-0 bg-[url('/kaleidoscope-pattern.png')] bg-center bg-no-repeat bg-cover mix-blend-overlay opacity-30"></div>
        </div>
      </div>
    </div>
  );
}


function Speaker() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


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
      image: "/anilkumar.jpg",
      alt: "Anil Kumar",
    },
    // Add more speaker objects as needed
  ];

  return (
    <section className="py-24 pt-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4 relative">
            Our <span className="text-red-600">Speakers</span>
            <div className="absolute -inset-1 bg-red-600/20 blur-lg rounded-full"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our extraordinary speakers who will inspire and transform your perspective
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.name} 
              className={`transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speaker;