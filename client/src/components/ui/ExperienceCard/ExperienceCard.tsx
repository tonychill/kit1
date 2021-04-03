import { FC } from "react";
import Media from "../../ui/Media";
import Type from "../../core/Type";
import Link from "next/link";
import { utils } from "../../../hooks";
import Section from "../../core/Section";
import Icon from "../../core/Icons";

interface ExperienceCardProps {
  data: any;
  id: string;
}
/**
  id: string;
  title: string;
  price: number;
  description: string;
  media: object[] | string; 
  */

const ExperienceCard: FC<ExperienceCardProps> = ({ id, data }) => {
  const media = utils.parseMediaToObjectArray(data.media);
  return (
    <div className="">
      <section className="mb-2">
        <Media type="multi" media={media} />
      </section>
      <section className="mb-2">
        <Link href={`/experiences/${id}`}>
          <a>
            <div className="w-full flex">
              <div className="left side stuff">
                <div>
                  <Type variant="title">{data.name}</Type>
                </div>{" "}
                <div className="flex">
                  <div className="mr-1">
                    <Icon variant="pin" />
                  </div>
                  <div>
                    <Type variant="base">{data.place}</Type>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="mt-1 flex mr-4 ">
                    <div className="mr-2">
                      <Type variant="base">{data.cabins}</Type>
                    </div>
                    <div>
                      <Icon variant="bed" />
                    </div>
                  </div>
                  <div className="mt-1 flex mr-4 ">
                    <div className="mr-2">
                      <Type variant="base">{data.heads}</Type>
                    </div>
                    <div>
                      <Icon variant="bath" />
                    </div>
                  </div>
                  <div className="mt-1 flex mr-4">
                    <div className="mr-2">
                      <Type variant="base">{data.passengers}</Type>
                    </div>
                    <div>
                      <Icon variant="guests" />
                    </div>
                  </div>
                </div>{" "}
                <div className="flex">
                  <span className="mr-1">
                    <Type variant="bold">{`$${Math.floor(data.rate / 7)}`}</Type>
                  </span>
                  <span className="">
                    <Type variant="base">/night + </Type>
                  </span>
                </div>
              </div>
              <div className="right side stuff"></div>
            </div>
          </a>
        </Link>
      </section>
    </div>
  );
};

export default ExperienceCard;
/**
 * <div className="relative flex flex-col items-center justify-between col-span-4 space-y-1 overflow-hidden  sm:rounded-xl">
      {typeof media === "string" ? <img className="rounded-xl shadow-md" src={media} alt="vaction home" /> : null}
      <div className="mt-0">
        <div className="text-xs text-gray-600 ">
          <Type variant="title">{title}</Type>
        </div>
        <div className="font-bold text-gray-700 leading-snug mt-0">
          <Type clamp={4} variant="base">
            {description}
          </Type>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          <Type variant="bold">{`$${Math.floor(price)} / night`}</Type>
        </div>
      </div>
    </div>
 */

{
  /* <section className="py-20 bg-white">
  <div className="container max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
    <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
    <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-2">
      <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
        <div className="p-3 text-white bg-blue-500 rounded-full">
          <svg
            
            className="w-8 h-8 "
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 8a3 3 0 0 1 0 6" />
            <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
            <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
          </svg>
        </div>
        <h4 className="text-xl font-medium text-gray-700">Notifications</h4>
        <p className="text-base text-center text-gray-500">Send out notifications to all your customers to keep them engaged.</p>
      </div>

      <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
        <div className="p-3 text-white bg-blue-500 rounded-full">
          <svg
            
            className="w-8 h-8 "
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
            <line x1="12" y1="12" x2="20" y2="7.5" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <line x1="12" y1="12" x2="4" y2="7.5" />
            <line x1="16" y1="5.25" x2="8" y2="9.75" />
          </svg>
        </div>
        <h4 className="text-xl font-medium text-gray-700">Bundles</h4>
        <p className="text-base text-center text-gray-500">High-quality bundles of awesome tools to help you out.</p>
      </div>

      <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
        <div className="p-3 text-white bg-blue-500 rounded-full">
          <svg
            
            className="w-8 h-8 "
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9l3 3l-3 3" />
            <line x1="13" y1="15" x2="16" y2="15" />
            <rect x="3" y="4" width="18" height="16" rx="2" />
          </svg>
        </div>
        <h4 className="text-xl font-medium text-gray-700">Developer Tools</h4>
        <p className="text-base text-center text-gray-500">Developer tools to help grow your application and keep it up-to-date.</p>
      </div>

      <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
        <div className="p-3 text-white bg-blue-500 rounded-full">
          <svg
            
            className="w-8 h-8 "
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="9.5" y1="11" x2="9.51" y2="11" />
            <line x1="14.5" y1="11" x2="14.51" y2="11" />
            <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
            <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
          </svg>
        </div>
        <h4 className="text-xl font-medium text-gray-700">Building Blocks</h4>
        <p className="text-base text-center text-gray-500">The right kind of building blocks to take your company to the next level.</p>
      </div>

      <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
        <div className="p-3 text-white bg-blue-500 rounded-full">
          <svg
            
            className="w-8 h-8 "
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="15" y1="5" x2="15" y2="7" />
            <line x1="15" y1="11" x2="15" y2="13" />
            <line x1="15" y1="17" x2="15" y2="19" />
            <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
          </svg>
        </div>
        <h4 className="text-xl font-medium text-gray-700">Coupons</h4>
        <p className="text-base text-center text-gray-500">Coupons system to provide special offers and discounts for your app.</p>
      </div>
    </div>
  </div>
</section>; */
}
