function Team() {
  const team = {
    Leads: [
      {
        name: "Bezawada Kalyan Chakravarthy",
        title: "Lead Organizer",
        photo: "/teams/kalyan.jpg",
      },
      {
        name: " Bishwadip Maitra",
        title: "Co-Lead Organizer",
        photo: "/teams/formal(linkedin_photo) - Bishwadip Maitra.jpg", // Replace with actual photo URL
      },
      {
        name: " Yojith Kaustabh ",
        title: "Executive Producer",
        photo: "/teams/photo_2023-10-02_22-00-10 - Yojith Kaustabh.jpeg", // Replace with actual photo URL
      },
    ],
    
    "Sponsorships & Finanace": [
      {
        name: "Saurav Singh",

        photo: "/teams/IMG_20240929_151013 - SAURAV SINGH.jpg", // Replace with actual photo URL
      },
      {
        name: "Abhijit Patil",

        photo: "/teams/IMG_20240527_232540767 - ABHIJIT CHANDRAKANT PATIL.jpg", // Replace with actual photo URL
      },
      {
        name: "Anmol Kumar Pandey",

        photo: "/teams/WhatsApp Image 2025-01-16 at 9.21.31 PM.jpeg", // Replace with actual photo URL
      },
      {
        name: "Velicharla Madhu Sravani",

        photo: "/teams/20240328_082657 - Madhu Sravani Velicharla.jpg", // Replace with actual photo URL
      },
      {
        name: "Sripathy Siddartha",

        photo: "/teams/DSC_2526 - Sripathy Siddartha.JPG", // Replace with actual photo URL
      },
    ],
    "Design": [
      {
        name: "Akansh Vaibhav",

        photo: "/teams/DP 7.png", // Replace with actual photo URL
      },
      {
        name: "Vijay Krishna",

        photo:
          "/teams/Screenshot_2024-11-14-23-15-07-32_99c04817c0de5652397fc8b56c3b3817 - Vijay Krishna Anand.jpg", // Replace with actual photo URL
      },
      {
        name: "Badugu Rakshitha",

        photo: "/teams/rakshitha.jpg", // Replace with actual photo URL
      },
      {
        name: "Sham Gagan Siddharth",

        photo: "/teams/Gagan Siddharth Sham.jpeg", // Replace with actual photo URL
      },
      
      {
        name: "Sahal Ansar",

        photo: "/teams/WhatsApp Image 2025-01-16 at 11.27.33 PM.jpeg", // Replace with actual photo URL
      },
      {
        name: "Shriansh Jain",

        photo: "/teams/WhatsApp Image 2025-01-16 at 8.28.10 PM.jpeg", // Replace with actual photo URL
      },
      
    ],
    "Website & Tech": [
      {
        name: "Ankur Raj",

        photo: "/teams/IMG_1931 - Ankur Raj.png", // Replace with actual photo URL
      },
      {
        name: "Harshit Chauhan",

        photo: "/teams/1731606215766 - Harshit Chauhan.jpg", // Replace with actual photo URL
      },
    ],
    "Operation & Logistics": [
      {
        name: "Sripathy Siddartha",

        photo: "/teams/DSC_2526 - Sripathy Siddartha.JPG", // Replace with actual photo URL
      },
      {
        name: "Utkarsh Yuvraj",

        photo: "/teams/Utkarsh Yuvraj Profile Pic - Utkarsh Yuvraj.jpeg", // Replace with actual photo URL
      },
      {
        name: "Swaroop Chegondi",

        photo: "/teams/IMG_1011 - Satya Swaroop Chegondi.JPG", // Replace with actual photo URL
      },
      {
        name: "Kartik M Sarma",

        photo: "/teams/IMG_6533 - KARTHIK M SARMA.jpeg", // Replace with actual photo URL
      },
      {
        name: "Krishna Suryawanshi",

        photo: "/teams/KrishnaS_ProfilePic - Krishna Suryawanshi.jpg", // Replace with actual photo URL
      },
    ],
    "Marketing & Social Media": [
      {
        name: "Viksa Mote",

        photo: "/teams/IMG_2756 - VIKSA MOTE.png", // Replace with actual photo URL
      },
      {
        name: "Mohammed Husaamuddin Ahmed",

        photo: "/teams/IMG_20240923_074925 - Husaamuddin Ahmed Mohammed.jpg", // Replace with actual photo URL
      },
      {
        name: "Sneha Sri Sai Vadde",

        photo: "/teams/IMG_20250116_205454.jpg", // Replace with actual photo URL
      },
    ],
    "Speaker Curation": [
      {
        name: "Velicharla Madhu Sravani",

        photo: "/teams/20240328_082657 - Madhu Sravani Velicharla.jpg", // Replace with actual photo URL
      },
      {
        name: "Kartikeya Gupta",

        photo:
          "/teams/Screenshot_2024-11-14-22-36-41-21_965bbf4d18d205f782c6b8409c5773a4 - KartikeyaGupta RAHUL.jpg", // Replace with actual photo URL
      },
      {
        name: "Ritovan Dasgupta",

        photo: "/teams/IMG20240507145428 - Ritovan Dasgupta.jpg", // Replace with actual photo URL
      },
      {
        name: "Sakshi Agrawal",

        photo: "/teams/pic_mine - SAKSHI AGRAWAL.jpg", // Replace with actual photo URL
      },
      
      
    ],
    "Video & Production": [
      {
        name: "Piyush Singh",

        photo: "/teams/Piyush_Profile.png", // Replace with actual photo URL
      },
      {
        name: "Jaiveer Naik",

        photo: "/teams/Screenshot 2025-01-16 165323.png", // Replace with actual photo URL
      },
      {
        name: "Vedant Kesarwani",

        photo: "/teams/IMG_20240529_072459 - Vedant Kesarwani.jpg", // Replace with actual photo URL
      },
    ],
  };

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
            Our Team
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Team Sections */}
        {Object.entries(team).map(([category, members], index) => (
          <div key={index} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">
                {category}
              </h2>
              <div className="w-16 h-1 bg-red-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {members.map((member, idx) => (
                <div
                  key={idx}
                  className="group relative p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 group-hover:brightness-110"
                  />
                  <h3 className="text-xl font-bold text-gray-300 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400">{member.title}</p>
                  <div className="absolute inset-0 rounded-lg bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-4 border-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Team;
