import { gsap } from 'gsap';
import { useRef } from 'react';
import { useSelectedItem } from './state';
import { CardType } from './types';

function Card({ src, title, text, id, year }: CardType): JSX.Element {
  const imgRef = useRef<HTMLImageElement>(null);
  const setItem = useSelectedItem((s) => s.setItem);
  const selected = useSelectedItem((s) => s.selected);
  return (
    <article className="space-y-2 hover:text-black group">
      <p className="text-xs select-none pointer-events-none">{year}</p>
      <p className="text-3xl font-extralight font-Lora select-none pointer-events-none">
        {title}
      </p>
      <div className="w-full h-[200px] bg-black block overflow-hidden group-hover:shadow   group-hover:shadow-black/30  select-none pointer-events-none">
        <img
          ref={imgRef}
          src={src}
          className="w-full h-full object-cover block "
        />
      </div>
      <p className=" font-Nunito text-base font-extralight pt-6 pb-3 select-none pointer-events-none">
        {text}
      </p>
      <button
        onMouseEnter={() => {
          gsap.killTweensOf(imgRef.current);
          gsap.to(imgRef.current, {
            duration: 2,
            ease: 'power4',
            scale: 1.2,
          });
        }}
        onMouseLeave={() => {
          gsap.killTweensOf(imgRef.current);
          gsap.to(imgRef.current, {
            duration: 1,
            ease: 'expo',
            scale: 1,
          });
        }}
        onClick={() => {
          setItem({ src, title, text, id, year, selected: true });
        }}
        className="hover:bg-black hover:text-white group-hover:shadow-sm   text-black py-2 rounded-full border border-black/50 w-full"
      >
        view
      </button>
    </article>
  );
}

export default Card;
