import { FloatingNavBar } from "@/components/organisms/FloatingNavbar";
import { StartPageSparkles } from "@/components/organisms/StartPageSparkles";
import { WavyBackground } from "@/components/organisms/WavyBackground";

export default function Home() {
  return (
    <>
      <FloatingNavBar
        navItems={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "About",
            link: "/about",
          },
        ]}
      ></FloatingNavBar>
      <StartPageSparkles></StartPageSparkles>
      <WavyBackground>some cool wave</WavyBackground>
    </>
  );
}
