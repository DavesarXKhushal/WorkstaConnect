const ValueProps = () => {
  return (
    <section className="py-20 md:py-28 bg-blue-50">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Chef working in kitchen" 
              className="rounded-xl shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Work on your terms</h2>
            
            <div className="space-y-10">
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Skip the job boards, go straight to work</h3>
                  <p className="text-gray-600 text-lg">Your time spent searching for jobs can now be time spent earning money.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Work according to your own schedule</h3>
                  <p className="text-gray-600 text-lg">Work whenever you want, as much or as little as you want. The choice is yours.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shadow-sm">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Know exactly how much and when you're paid</h3>
                  <p className="text-gray-600 text-lg">Work as much as you want to earn what you need, and get paid on time weekly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
