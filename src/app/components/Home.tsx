import { HeroSlider } from "./home/HeroSlider";
import { QuickIntro } from "./home/QuickIntro";
import { DisciplinesGrid } from "./home/DisciplinesGrid";

export function Home() {
  return (
    <div className="w-full">
      <HeroSlider />
      <QuickIntro />
      <DisciplinesGrid />
    </div>
  );
}
