const ValueProps = () => {
  return (
    <section className="py-20 md:py-28 bg-black">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Chef preparing food" 
              className="rounded-xl shadow-xl"
            />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <div className="space-y-8">
              <div className="border-l-4 border-[#fdf568] pl-6">
                <h3 className="text-2xl font-bold mb-4">Skip the job boards, go straight to work.</h3>
                <p className="text-white/70 text-lg">Your time spent searching for jobs can now be time spent earning money.</p>
              </div>
              
              <div className="border-l-4 border-[#fdf568] pl-6">
                <h3 className="text-2xl font-bold mb-4">Work according to your own schedule.</h3>
                <p className="text-white/70 text-lg">Work whenever you want, as much or as little as you want. It's totally up to you.</p>
              </div>
              
              <div className="border-l-4 border-[#fdf568] pl-6">
                <h3 className="text-2xl font-bold mb-4">Know exactly how much and when you're paid.</h3>
                <p className="text-white/70 text-lg">Work as much as you want to earn what you need, and get paid on time weekly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
