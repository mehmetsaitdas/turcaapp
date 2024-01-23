"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Description from "./description";

const Slider = ({ images }: {
    images: {
        id: number,
        srca: string,
        title: string,
        deta: string,
        href: string,
        btnTitle: string,
    }[]
}) => {
    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
        activeImage === images.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1);
    };
    const clickPrev = () => {
        activeImage === 0
            ? setActiveImage(images.length - 1)
            : setActiveImage(activeImage - 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);

    return (
        <div className="grid place-items-center grid-cols-2 w-full mx-auto shadow-2xl rounded-3xl">
            <div
                className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-3xl p-0`}>
                {images.map((elem, idx) => (
                    <div
                        key={idx}
                        className={`${idx === activeImage
                            ? "block w-full md:h-[60vh] xs:h-[30vh] object-cover transition-all duration-500 ease-in-out"
                            : "hidden"
                            }`}>
                        <Image
                            src={elem.srca}
                            alt=""
                            width={1512}
                            height={576}
                            className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl" />
                    </div>
                ))}
            </div>
            <Description
                activeImage={activeImage}
                clickNext={clickNext}
                clickPrev={clickPrev}
                images={images} />
        </div>
    );
};

export default Slider;