import { FloatingNavBar } from "@/components/organisms/FloatingNavbar";
import { StartPageSparkles } from "@/components/organisms/StartPageSparkles";
import { SvgMaskEffect } from "@/components/organisms/SvgMaskEffect";
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
      <WavyBackground>
        <h1 className="md:text-6xl text-2xl lg:text-5xl font-bold">
          {"Frontend > Backend"}
        </h1>
      </WavyBackground>
      <SvgMaskEffect
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of Wöges is, that the backend is schuld
          </p>
        }
        className="h-[40rem]"
        revealSize={200}
      >
        The first rule of Wöges is, that the <span className="text-red-500">backend</span> is <span className="text-red-500">schuld</span>
      </SvgMaskEffect>
    </>
  );
}
