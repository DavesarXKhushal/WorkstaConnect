const ValueProps = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:pr-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold mb-3">Skip the job boards, go straight to work.</h4>
                <p className="text-gray-600">Your time spent searching for jobs can now be time spent earning money.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold mb-3">Work according to your own schedule.</h4>
                <p className="text-gray-600">Work whenever you want, as much or as little as you want. It's totally up to you.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 md:col-span-2">
                <h4 className="text-lg font-semibold mb-3">Know exactly how much and when you're paid.</h4>
                <p className="text-gray-600">Work as much as you want to earn what you need, and get paid on time weekly.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mb-10 lg:mb-0 order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant staff working" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
