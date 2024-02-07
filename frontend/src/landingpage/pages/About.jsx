import money from "/money.png";
import feedback from "/feedback.png";
import submit from "/submit.png";
import rocket from "/rocket.png";

function About() {
  const cards = [
    {
      image: submit,
      title: "Submit your Product",
      description: "Get started by posting your MVP / Idea and gain exposure",
    },

    {
      image: money,
      title: "Acquire Customers",
      description: "Attract early adopters and acquire customers for your SaaS",
    },
    {
      image: feedback,
      title: "Get Feedback",
      description:
        "Customize your feedback gathering process or use pre-built templates to validate your idea through valuable user feedback.",
    },
    {
      image: rocket,
      title: "Boost Your Growth",
      description:
        "Supercharge your journey with community support and lead your product towards success.",
    },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-y-10 md:gap-y-10 lg:py-14 px-10">
        <div className="hidden lg:flex absolute top-10 -right-10 overflow-hidden"></div>
        {cards.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 items-start justify-center"
          >
            <div>
              <img src={item.image} alt="" />
            </div>
            <div className="flex max-w-xs mx-0 flex-col gap-y-2 items-start justify-start">
              <h2 className="font-bold text-xl text-black">{item.title}</h2>
              <p className="font-medium text-sm text-slate-400/80">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
