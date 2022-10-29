import React from 'react';

const Faqs = () => {
  return (
    <div>
      <div className="w-3/4 py-10 mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <div className="mt-10">
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Who is this Platform for?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>
                  Who wants to become a web developer. For those who want to
                  learn web development from scratch and then get a job in a
                  software company as a web developer. For those who don't know
                  much about programming or web development. Even those who have
                  studied CSE for four years and could not decide what to do,
                  did not learn much, they can learn complete web development
                  from this course and apply for jobs. 😀
                </p>
              </div>
            </div>

            <div className="collapse mt-4">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                What happend if I stuck in somewhere or if I need help?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>
                  We have created a secret Facebook group for the course. Where
                  I will be, we will have 14 professional web developers, we
                  have a few other team members to guide and support you in
                  other tasks. Our target is to answer all your questions within
                  24 hours. Most of the times instant reply is given. All
                  replies will be received within 6-8 hours on average.
                  Moreover, if you can't solve the problem inside the code by
                  writing (except Friday), there will be a few parallel meet
                  sessions at three times every day. Where you can solve your
                  problem by screen sharing. If you don't understand something
                  well, it will be explained. What else does it take? 😉
                </p>
              </div>
            </div>

            <div className="collapse mt-4">
              <input type="checkbox" className="peer" />
              <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Do I need to have CSE background to do the courses?
              </div>
              <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>
                  We have designed the course in such a way that academic
                  background does not matter. You can do this course from any
                  academic background. University students, college students,
                  job seekers, unemployed, lovers, runaway lovers, even lovers
                  who don't pick up the phone, have been started from scratch so
                  that everyone can learn. But must give time 6-8 hours. Minimum
                  4-5 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
