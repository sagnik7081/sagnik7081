import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Preview Label */}
        <div className="text-center mb-8">
          <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
            📄 GitHub Profile README Preview
          </div>
        </div>
        
        {/* GitHub README Content */}
        <div className="bg-white rounded-lg shadow-2xl p-8 markdown-body">
          {/* Header with Animation - Left Aligned */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                👋 Hi, I'm Sagnik Ghosh
              </h1>
              <div className="text-xl text-gray-600 font-medium mb-6">
                <span className="inline-block animate-bounce mr-2">🤖</span> AI/ML Engineer 
                <span className="mx-2">•</span> 
                <span className="inline-block animate-pulse mr-2">🎓</span> 4th Year Student
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-spin-slow opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl animate-bounce">🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Typing Effect - Left Aligned */}
          <div className="mb-12">
            <div className="inline-block bg-gray-900 text-green-400 px-6 py-3 rounded-lg font-mono text-lg">
              <span className="animate-pulse">$</span> ./deploy_ai_solutions.sh
              <span className="animate-ping inline-block w-2 h-5 bg-green-400 ml-1"></span>
            </div>
          </div>

          {/* About Me Section with Cartoon */}
          <div className="mb-12">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 animate-bounce">🚀</span> About Me
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    My name is <strong>Sagnik Ghosh</strong>, currently in my 4th year pursuing my passion for 
                    Artificial Intelligence and Machine Learning. I'm dedicated to building intelligent systems 
                    that solve real-world problems, with expertise spanning from cloud infrastructure to deep learning models.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-block animate-bounce">🔭</span> Working on AI/ML projects
                    <span className="mx-2">•</span>
                    <span className="inline-block animate-pulse">🌱</span> Learning Advanced Deep Learning
                    <span className="mx-2">•</span>
                    <span className="inline-block animate-bounce">⚡</span> Love automating everything!
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 animate-float">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-6xl animate-wiggle">🧠</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Asymmetric Layout */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 animate-spin-slow">⚡</span> Tech Stack & Skills
            </h2>
            
            {/* AI/ML Skills */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-700">🧠 AI/ML & Data Science</h3>
                <div className="animate-bounce">
                  <span className="text-2xl">🤖</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'PyTorch', 'Pandas', 'Seaborn', 'OpenCV', 'Scikit-learn', 'LangChain'].map((skill, index) => (
                  <span key={skill} className={`px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full font-semibold shadow-lg transform hover:scale-105 hover:rotate-3 transition-all duration-300 animate-pulse`} style={{animationDelay: `${index * 0.1}s`}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 justify-end">
                <div className="animate-bounce">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-end">
                {['Python', 'Java', 'C++', 'HTML', 'CSS3'].map((lang, index) => (
                  <span key={lang} className={`px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg transform hover:scale-105 hover:-rotate-3 transition-all duration-300 animate-bounce`} style={{animationDelay: `${index * 0.2}s`}}>
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-700">☁️ Cloud & DevOps</h3>
                <div className="animate-float">
                  <span className="text-2xl">🐳</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'Docker', 'Linux', 'Git', 'Grafana'].map((tool, index) => (
                  <span key={tool} className={`px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full font-semibold shadow-lg transform hover:scale-105 hover:rotate-2 transition-all duration-300 animate-pulse`} style={{animationDelay: `${index * 0.15}s`}}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 justify-end">
                <div className="animate-wiggle">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-3 justify-end">
                {['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'].map((db, index) => (
                  <span key={db} className={`px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold shadow-lg transform hover:scale-105 hover:-rotate-2 transition-all duration-300 animate-bounce`} style={{animationDelay: `${index * 0.1}s`}}>
                    {db}
                  </span>
                ))}
              </div>
            </div>

            {/* Web & Testing */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-700">🌐 Web & Testing</h3>
                <div className="animate-spin-slow">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Flask', 'Bootstrap', 'Selenium', 'Postman'].map((tool, index) => (
                  <span key={tool} className={`px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-semibold shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-pulse`} style={{animationDelay: `${index * 0.2}s`}}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Current Focus with Cartoon Characters */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="mr-3 animate-bounce">🎯</span> Current Focus
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 transform hover:scale-105 hover:rotate-1 transition-all duration-300 relative">
                <div className="absolute -top-4 -right-4 animate-float">
                  <span className="text-4xl">🔬</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Research & Learning</h3>
                <p className="text-blue-700">Exploring advanced ML architectures and LLM applications</p>
                <div className="mt-3 flex gap-2">
                  <span className="animate-bounce">📚</span>
                  <span className="animate-pulse">🧪</span>
                  <span className="animate-wiggle">💡</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 relative">
                <div className="absolute -top-4 -left-4 animate-bounce">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Building Projects</h3>
                <p className="text-green-700">Developing scalable AI solutions on cloud platforms</p>
                <div className="mt-3 flex gap-2 justify-end">
                  <span className="animate-spin-slow">⚙️</span>
                  <span className="animate-pulse">☁️</span>
                  <span className="animate-bounce">🏗️</span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Stats with Animations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3 animate-pulse">📊</span> GitHub Statistics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-2 -right-2 animate-bounce">
                  <span className="text-2xl">📈</span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">GitHub Stats</div>
                <div className="text-blue-500">Replace with your stats</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-2 -right-2 animate-wiggle">
                  <span className="text-2xl">🔥</span>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-2">Streak Stats</div>
                <div className="text-orange-500">Replace with streak data</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 relative">
                <div className="absolute -top-2 -right-2 animate-spin-slow">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-2">Top Languages</div>
                <div className="text-purple-500">Replace with languages</div>
              </div>
            </div>
          </div>

          {/* Contact with Floating Elements */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center justify-center">
              <span className="mr-3 animate-wiggle">📫</span> Let's Connect!
            </h2>
            <div className="flex justify-center space-x-6 flex-wrap gap-4">
              <div className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer relative">
                <span className="absolute -top-2 -right-2 animate-bounce">💼</span>
                LinkedIn
              </div>
              <div className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-110 hover:-rotate-3 transition-all duration-300 cursor-pointer relative">
                <span className="absolute -top-2 -right-2 animate-pulse">📧</span>
                Email
              </div>
              <div className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer relative">
                <span className="absolute -top-2 -right-2 animate-float">🌐</span>
                Portfolio
              </div>
            </div>
          </div>

          {/* Footer with Animation */}
          <div className="text-center pt-8 border-t border-gray-200">
            <div className="text-gray-600 font-medium flex items-center justify-center gap-2">
              <span className="animate-pulse">⭐</span>
              From <span className="font-bold text-blue-600 animate-bounce">sagnik-ghosh</span> 
              with <span className="animate-pulse text-red-500">❤️</span>
              <span className="animate-wiggle">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
