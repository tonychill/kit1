import { FC, useState, FormEvent, BaseSyntheticEvent, LegacyRef, RefObject } from "react";
import { useKeenSlider, THookReturn } from "keen-slider/react";

interface CarouselProps {
  images: string[];
}
interface Extender extends THookReturn<HTMLDivElement> {}

const Carousel: FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    rtl: true,
    slidesPerView: 1,
    spacing: 10,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  }) as Extender;
  function handleSliderPrev(event: BaseSyntheticEvent) {
    event.preventDefault();
    if (slider !== undefined && "prev" in slider) {
      console.log("prev");
      slider.prev();
    }
  }
  function handleSliderNext(event: BaseSyntheticEvent) {
    event.stopPropagation();
    if (slider !== undefined && "next" in slider) {
      slider.next();
    }
  }
  console.log(sliderRef);
  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider rounded-md">
          {images.map((image, idx) => (
            <div key={idx} className="keen-slider__slide number-slide">
              <img className="w-full max-h-96" src={image} />
            </div>
          ))}
        </div>
        {slider && (
          <>
            <ArrowLeft onClick={(e: BaseSyntheticEvent) => handleSliderPrev(e)} disabled={currentSlide === 0} />
            <ArrowRight onClick={(e: BaseSyntheticEvent) => handleSliderNext(e)} disabled={currentSlide === slider.details().size - 1} />
          </>
        )}
      </div>
      {slider && (
        <div className="dots hidden">
          {/* TODO: get the indicies of all the sliders as an array and pass them to the folowing JSX
          so that they are able to be mapped. Basically remove the ...Array mumbojumbo.  */}
          {/* {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })} */}
        </div>
      )}
    </>
  );
};
interface ArrowProps {
  disabled: boolean;
  onClick: (e: BaseSyntheticEvent) => void;
}
function ArrowLeft(props: ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={"arrow arrow--left" + disabeld} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props: ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={"arrow arrow--right" + disabeld} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default Carousel;
