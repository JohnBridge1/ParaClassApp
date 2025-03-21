// Introduction to Paralympic classifications 

import Link from 'next/link';

export default function ClassificationBasics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Understanding Paralympic Classifications</h1>
      
      <div className="space-y-8">
        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">What are Classifications?</h2>
          <p className="text-gray-700 mb-4">
            Paralympic classifications are a system designed to minimize the impact of impairments 
            on sport performance. They ensure competition is fair and equal by grouping athletes 
            with similar levels of impairment together.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Key Points:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Classifications group athletes by ability level</li>
              <li>Each sport has its own classification requirements</li>
              <li>Classifications are based on functional ability, not disability</li>
              <li>Regular reviews ensure fair competition</li>
            </ul>
          </div>
        </section>

        {/* Classification Process */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">The Classification Process</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">Medical Assessment</h3>
              <p className="text-gray-700">
                Evaluation of medical documentation and physical examination
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold mb-2">Technical Assessment</h3>
              <p className="text-gray-700">
                Sport-specific tests to evaluate functional ability
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold mb-2">Observation in Competition</h3>
              <p className="text-gray-700">
                Assessment of the athlete during actual competition
              </p>
            </div>
          </div>
        </section>

        {/* Classification Categories */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Types of Classifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Physical Impairment</h3>
              <p className="text-gray-700">
                Including impaired muscle power, range of movement, limb deficiency
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Visual Impairment</h3>
              <p className="text-gray-700">
                Different levels of visual acuity and field of vision
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Intellectual Impairment</h3>
              <p className="text-gray-700">
                Limitations in intellectual functioning and adaptive behavior
              </p>
            </div>
          </div>
        </section>

        {/* Understanding Classifications Resources */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Classification Resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a 
              href="https://www.paralympic.org/classification" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-4">📋</span>
                <div>
                  <h3 className="font-semibold mb-2">Understanding Classifications</h3>
                  <p className="text-gray-700">
                    Basic guide to how Paralympic classifications work and why they're important
                  </p>
                </div>
              </div>
            </a>
            <a 
              href="https://www.paralympic.org/classification/classification-evaluation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-4">🔍</span>
                <div>
                  <h3 className="font-semibold mb-2">Classification Process</h3>
                  <p className="text-gray-700">
                    How athletes are evaluated and classified in Paralympic sports
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Medical Background - Impairment Types */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Medical Background</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link 
              href="/classifications/impairments"
              className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏥</span>
                <div>
                  <h3 className="font-semibold mb-2">Impairment Types</h3>
                  <p className="text-gray-700">
                    Medical basis for different classification categories
                  </p>
                </div>
              </div>
            </Link>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📊</span>
                <div>
                  <h3 className="font-semibold mb-2">Functional Assessment</h3>
                  <p className="text-gray-700">
                    How different abilities are assessed in classification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Learn More</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/classifications/track-field" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100">
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏃‍♂️</span>
                <div>
                  <h3 className="font-semibold mb-2">Track & Field Classifications →</h3>
                  <p className="text-gray-700">
                    Explore classifications in athletics
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/classifications/swimming" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100">
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏊‍♂️</span>
                <div>
                  <h3 className="font-semibold mb-2">Swimming Classifications →</h3>
                  <p className="text-gray-700">
                    Learn about swimming categories
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 