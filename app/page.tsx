"use client"

import { NeonRounded } from "@/components/ui/NeonRounded";
import ShineBorder from "@/components/ui/shine-border";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const photoProfileLight = "/logo-light.png";
  const photoProfileDark = "/logo-dark.png";
  const [pp, setPp] = useState(photoProfileLight);

  useEffect(() => {
    const updateProfilePicture = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setPp(isDark ? photoProfileDark : photoProfileLight);
    };

    updateProfilePicture();

    const observer = new MutationObserver(updateProfilePicture);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const listProject = [
    {
      name: "Dkampus",
      link: "https://dkampus.my.id",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam magni ratione praesentium rem adipisci officiis vero voluptates dicta, odit ducimus?",
      language: ["/laravel.svg", "/tailwind.svg", "/firebase.svg", "/mysql.svg"]
    },
    {
      name: "RShop (Demo)",
      link: "https://dkampus.my.id",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, aperiam beatae assumenda blanditiis vero consequuntur quaerat, repellendus placeat sequi esse optio labore maiores quis iure perspiciatis non doloribus minima sed atque quam animi illo quasi commodi. Odit, amet. Corporis, voluptatibus!",
      language: [pp === photoProfileDark ? "/next-js-white.svg" : "/next-js.svg", "/tailwind.svg", "/react.svg", "/mysql.svg"]
    },
    {
      name: "(Demo)",
      link: "https://dkampus.my.id",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam magni ratione praesentium rem adipisci officiis vero voluptates dicta, odit ducimus?",
      language: ["/laravel.svg", "/tailwind.svg", "/firebase.svg"]
    },
  ];

  const listProgrammingLang = [
    { img: pp === photoProfileDark ? "/next-js-white.svg" : "/next-js.svg", name: "Next.Js" },
    { img: "/laravel.svg", name: "Laravel" },
    { img: "/codeigniter.svg", name: "CodeIgniter" },
    { img: "/flutter.svg", name: "Flutter" },
    { img: "/react.svg", name: "React" },
    { img: "/tailwind.svg", name: "Tailwind" },
    { img: "/bootstrap.svg", name: "Bootstrap" },
    { img: "/python.svg", name: "Python" },
    { img: "/javascript.svg", name: "javaScript" },
    { img: "/firebase.svg", name: "Firebase" },
    { img: "/mysql.svg", name: "MySql" },
  ]

  return (
    <>
      <div className="mx-1 sm:mx-14 md:mx-16 md:space-y-16 font-mono">
        <section className="flex flex-wrap-reverse lg:flex-nowrap lg:space-x-8" id="home">
          <div className="flex-col">
            <p className="mb-1 sm:text-base text-sm">Software Developer</p>
            <p className="text-xl md:text-5xl font-extralight">Hello I&#39;m</p>
            <p className="text-xl md:text-5xl sm:mb-5 mb-3">Razzaq Adi Wibowo</p>
            <p className="mb-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis mollitia vitae quod deleniti harum? Hic cumque molestiae libero. Suscipit, reiciendis.</p>
            <div className="flex sm:gap-6 flex-nowrap gap-2">
              <ShineBorder
                className="relative flex h-fit w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl sm:mr-0"
                color={["#FFD700", "#FFA500", "#FF4500"]}>
                <Link href={""} className={`py-2 px-2 sm:px-4 text-nowrap`}>
                  My CV</Link>
              </ShineBorder>
              <ShineBorder
                className="relative flex h-fit sm:w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl flex-grow md:flex-none"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                <Link href={""} className={`py-2 px-2 sm:px-4`}>LinkedIn</Link>
              </ShineBorder>
              <ShineBorder
                className="relative flex h-fit sm:w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                color={["#BB86FC", "#3700B3", "#6200EE"]}>
                <Link href={""} className={`py-2 px-4`}>GitHub</Link>
              </ShineBorder>
            </div>
          </div>
          <div className="w-full">
            <div className="flex-shrink-0 w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-dashed border-foreground relative mb-6 mx-auto ">
              <NeonRounded className="max-w-sm items-center justify-center text-center rounded-full">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap text-center text-xl font-bold leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  <Image src={pp} alt={"photo"} width={50} height={50} priority unoptimized className="w-full h-full z-20 mx-auto p-8" />
                </span>
              </NeonRounded>
            </div>
          </div>
        </section>
        {/* Section II */}
        <section className="pt-16 w-full" id="projects">
          <h1 className="text-center md:text-4xl text-2xl">My Project</h1>
          <div className="md:px-12 w-full">
            <h2 className="mt-8 md:text-3xl ml-2 text-xl">Web Dev</h2>
            <div className="flex-col">
              {listProject.map((item, index) => (
                <div className="bg-gray-600/10 p-4 rounded-lg mt-6 shadow-md shadow-foreground-200/40" key={index}>
                  <div className="w-full transition-all duration-300">
                    <div className="flex justify-between">
                      <div className="flex sm:hidden w-full">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button className="md:text-xl font-bold flex sm:hidden w-full bg-transparent text-foreground justify-start hover:bg-transparent shadow-none">
                              <p className="md:text-xl font-bold text-lg">{item.name}</p>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-start">
                                <div className="flex justify-between items-center">
                                  <Button className="bg-transparent shadow-none hover:bg-transparent">
                                    <div className="text-end">
                                      <Link className="text-lg font-semibold text-foreground -ml-4" href={item.link}>{item.name}</Link>
                                    </div>
                                  </Button>
                                  <div className="gap-3 flex">
                                    {item.language.map((lang, langIndex) => (
                                      <Image src={lang} key={langIndex} alt={"photo"} width={50} height={50} priority unoptimized className="size-6 mx-auto" />
                                    ))}
                                  </div>
                                </div>
                              </AlertDialogTitle>
                              <AlertDialogDescription className="text-justify flex justify-between">
                                {item.desc}
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="hover:bg-transparent">Cancel</AlertDialogCancel>
                              <AlertDialogAction className="bg-primary text-foreground border">
                                <Link href={item.link}>Visit Project</Link>
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                      <p className="md:text-xl font-bold hidden sm:flex">{item.name}</p>
                      <div className="gap-3 flex items-center flex-wrap">
                        {item.language.map((lang, langIndex) => (
                          <Image src={lang} key={langIndex} alt={"photo"} width={50} height={50} priority unoptimized className="hidden sm:size-6 sm:flex mx-auto" />
                        ))}
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <div className={`flex mt-3`}>
                        <p className={`text-justify my-auto`}>{item.desc}</p>
                      </div>
                      <div className="text-end">
                        <Link className="text-primary" href={item.link}>Visit Project &gt;&gt;</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Of Section II */}
        <section id="others">
          <h1 className="text-center text-2xl">Other Programming Languages</h1>
          <div className="flex flex-wrap gap-14 mt-8 justify-center">
            {listProgrammingLang.map((progLang, index) => (
              <div className="items-center" key={index}>
                <Image src={progLang.img} alt={"photo"} width={50} height={50} priority unoptimized className="sm:size-8 mx-auto" />
                <p className="mt-2">{progLang.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
