import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import bootstrap from "../../assets/bootstrap.svg";
import tailwindcss from "../../assets/tailwindcss.svg";
import javascript from "../../assets/javascript.svg";
import php from "../../assets/php.svg";
import laravel from "../../assets/laravel.svg";
import nodejs from "../../assets/nodejs.svg";
const Skills = () => {
  return (
    <section className="skills  w-full pt-16 container mx-auto text-white open-sans ">
      <div className="items-center flex justify-between">
        <div className="skills-title">
          <div className="mb-4">
            <h4 className="text-2xl text-gray-400 border-b-4 w-6 border-red-600">Skill</h4>
          </div>
          <div className="text-2xl capitalize">
            <h2>Skills That I Learn,</h2>
            <h2>Front End & Backend</h2>
          </div>
          <div className="flex mt-2">
            <div className="h-1 w-56 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="skills-list w-3/4 md:w-1/4">
          <div className="flex flex-wrap justify-center">
            <img className="mt-6 mr-6 " src={html} alt="" />
            <img className="mt-6 mr-6 " src={css} alt="" />
            <img className="mt-6 mr-6 " src={bootstrap} alt="" />
            <img className="mt-6 mr-6 " src={tailwindcss} alt="" />
            <img className="mt-6 mr-6 " src={javascript} alt="" />
            <img className="mt-6 mr-6 " src={php} alt="" />
            <img className="mt-6 mr-6 " src={laravel} alt="" />
            <img className="mt-6 mr-6 " src={nodejs} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
