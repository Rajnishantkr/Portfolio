
import { NavigationMenuDemo } from "@/components/navigation";
import ProfileCard from "@/components/profileCard";
import Skills from "@/components/skills";

const page = () => {
  return (
    <div className="bg-background text-foreground w-full px-3">
      <div className="w-full my-3 ">
        <NavigationMenuDemo />
      </div>
      <div className=" flex justify-center  ">
        <ProfileCard/>
      </div>
      <div>
        <Skills/>
      </div>
    </div>
  );
};

export default page;
