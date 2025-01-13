function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">What is TEDx?</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto backdrop-blur-lg bg-black/30 rounded-xl p-8 border border-gray-700 shadow-2xl">
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Our event is called TEDxIIITS, where x = independently organized TED event. At our TEDxIIITS event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 mb-8">
          <p className="text-sm text-gray-400 italic">
            This independent TEDx event is operated under license from TED
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;