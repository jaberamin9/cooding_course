import Categories from "./components/Categories";
import CodeLearning from "./components/CodeLearning";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillGrowth from "./components/SkillGrowth";

export default function Home() {
  return (
    <>
      <div className="container mx-auto w-screen bg-[#1B0C4D]">
        <Header />
      </div>
      <div className="container mx-auto w-screen bg-[#160A3A]">
        <Hero />
      </div>
      <div className="container mx-auto w-screen bg-[#2B0D57]">
        <Courses />
      </div>
      <div className="container mx-auto w-screen bg-[#FAF6FF]">
        <SkillGrowth />
      </div>
      <div className="container mx-auto w-screen bg-[#FAF6FF]">
        <CodeLearning />
      </div>
      <div className="container mx-auto w-screen bg-[#2B0D57]">
        <Categories />
      </div>
    </>
  );
}
