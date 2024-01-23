import React from "react";
import Image from "next/image";

type Props = {
    activeImage: any;
    clickNext: any;
    clickPrev: any;
    images: {
        id: number,
        srca: string,
        title: string,
        deta: string,
        href: string,
        btnTitle: string,
    }[]
};

const Description = ({ activeImage, clickNext, clickPrev, images }: Props) => {
    return (
        <div className="grid place-items-start w-full bg-[#e7dfd9] relative rounded-tr-3xl rounded-br-3xl">
            {images.map((item, index) => (
                <div key={index} className={`${index === activeImage
                    ? "block w-full md:h-[60vh] xs:h-[30vh] xs:py-5 md:py-20 px-10 text-left"
                    : "hidden"
                    }`}>
                    <div className="py-6 xs:text-xs md:text-3xl font-extrabold">
                        {item.title}
                    </div>
                    <div className="leading-relaxed hidden md:block font-medium text-base tracking-wide italic text-gray-600">
                        {item.deta}
                    </div>
                    <br />
                    <a className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md" href={item.href}>
                        {item.btnTitle}
                    </a>
                    <div className="absolute bottom-1 right-0 w-full flex justify-center items-center">
                        <div className="absolute bottom-2 right-10 cursor-pointer" onClick={clickPrev}>
                            <Image
                                src="/icona/left.svg"
                                alt=""
                                width={30}
                                height={30} />
                        </div>
                        <div className="absolute bottom-2 right-2 cursor-pointer" onClick={clickNext}>
                            <Image
                                src="/icona/right.svg"
                                alt=""
                                width={30}
                                height={30} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Description;