import React from "react";

// Import all SVG components from the assets folder
import * as Icons from "../../assets";

const SvgCarousel = () => {
  const rowOne = [
    Icons.Git,
    Icons.Github,
    Icons.Mobx,
    Icons.Mongodb,
    Icons.Mysql,
    Icons.Aws,
    Icons.Netlify,
    Icons.Npm,
    Icons.Postman,
    Icons.Prisma,
    Icons.Vitest,
    Icons.Webpack,
  ];

  const rowTwo = [
    Icons.Gatsby,
    Icons.Python,
    Icons.Visualbasic,
    Icons.Typescript,
    Icons.Javascript,
    Icons.Logo,
    Icons.Nextjs,
    Icons.Jest,
    Icons.ReactQuery,
    Icons.Vite,
  ];

  const rowThree = [
    Icons.Sass,
    Icons.Illustrator,
    Icons.Tailwind,
    Icons.Jquery,
    Icons.Bootstrap,
    Icons.ChakraUI,
    Icons.Css,
    Icons.AdobeXd,
    Icons.Photoshop,
    Icons.Figma,
  ];
  return (
    <div className="flex flex-col gap-7">
      <div className="block">
        <div className="overflow-hidden whitespace-nowrap  group">
          <div className="inline-block animate-top-row  group-hover:[animation-play-state:paused]">
            {rowOne.map((Svg, index) => (
              <Svg
                className="size-[60px] grayscale hover:grayscale-0 inline ml-5"
                key={index}
              />
            ))}
          </div>
          <div className="inline-block animate-top-row  group-hover:[animation-play-state:paused]">
            {rowOne.map((Svg, index) => (
              <Svg
                className="size-[60px] grayscale hover:grayscale-0 inline ml-5"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="block">
        <div className="overflow-hidden whitespace-nowrap  group">
          <div className="inline-block animate-middle-row  group-hover:[animation-play-state:paused]">
            {rowTwo.map((Svg, index) => (
              <Svg
                className="size-[60px] grayscale hover:grayscale-0 inline ml-5"
                key={index}
              />
            ))}
          </div>
          <div className="inline-block animate-middle-row  group-hover:[animation-play-state:paused]">
            {rowTwo.map((Svg, index) => (
              <Svg
                className="size-[60px] grayscale hover:grayscale-0 inline ml-5"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="block">
        <div className="overflow-hidden whitespace-nowrap  group">
          <div className="inline-block animate-bottom-row  group-hover:[animation-play-state:paused]">
            {rowThree.map((Svg, index) => (
              <Svg
                className="size-[60px] grayscale hover:grayscale-0 inline ml-5"
                key={index}
              />
            ))}
          </div>
          <div className="inline-block animate-bottom-row  group-hover:[animation-play-state:paused]">
            {rowThree.map((Svg, index) => (
              <Svg
                className="size-[60px] grayscale hover:grayscale-0 inline ml-5"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SvgCarousel;
