import Image from "next/image";

import { Container } from "./Container";
import { Variants, motion } from "framer-motion";
import { sectionInOutFadeVariants } from "./PrimaryFeatures";

const testimonials = [
  [
    {
      content:
        "TeamReq is the best requirements management software I’ve ever used. I would recommend it to any student.",
      author: {
        name: "Abhay Das",
        role: "Student at CET",
        image: "/person1.jpg",
      },
    },
    {
      content:
        "TeamReq has been a lifesaver for me as a student. With its collaboration features, I can easily work with my classmates on projects and ensure we're all on the same page. The AI integration helps me improve my requirements, and the gamification elements keep me motivated. It's a must-have tool!",
      author: {
        name: "Anuja Rose Baby",
        role: "Student at KTU",
        image: "/person4.jpg",
      },
    },
  ],
  [
    {
      content:
        "As a student, I have always struggled with keeping track of project requirements, coordinating with teammates, and staying motivated throughout the process. However, TeamReq has completely transformed my approach to managing requirements, thanks to its powerful features such as collaboration, AI integration, and gamification.",
      author: {
        name: "Merin Mathew",
        role: "Student at College of Engineering Trivandrum",
        image: "/person5.jpg",
      },
    },
    {
      content:
        "TeamReq is a fantastic tool for students. Its collaboration features, AI integration, and gamification elements make requirement management a breeze. Highly recommended!",
      author: {
        name: "Aravind Sekhar",
        role: "Student at University of kannur",
        image: "/person2.jpg",
      },
    },
  ],
  [
    {
      content:
        "TeamReq has completely transformed how I approach requirement management as a student. The collaborative capabilities make group work seamless, and the AI integration provides valuable insights. The gamification aspect keeps me engaged and motivated. TeamReq is an excellent tool for students!",
      author: {
        name: "Anita Justin",
        role: "Student at University of kerala",
        image: "/person3.jpg",
      },
    },
    {
      content:
        "TeamReq has made my project life much more manageable. The collaboration options have improved my group projects, and the AI integration helps me create better requirements.",
      author: {
        name: "Pranav P",
        role: "Student at IIM Ahemmedabad",
        image: "/person6.jpg",
      },
    },
  ],
];

function QuoteIcon(props: any) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

const Testimonials = () => {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionInOutFadeVariants}
    >
      <section
        id="testimonials"
        aria-label="What our customers are saying"
        className="bg-slate-50 py-20 sm:py-32 bg-gradient-to-b from-white to-primaryblue"
      >
        <Container>
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Loved by students all over the world
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Our software is so simple that students all over the world are
              using it to track their projects and requirements.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            {testimonials.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  {column.map((testimonial, testimonialIndex) => (
                    <li key={testimonialIndex}>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900 text-justify">
                            {testimonial.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt=""
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </motion.div>
  );
};

export default Testimonials;
