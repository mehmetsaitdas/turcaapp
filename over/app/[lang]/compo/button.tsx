import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  href?: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, href, full }: ButtonProps) => {
  return (
    <a href={href} target="_blank"
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon &&
        <Image
          src={icon}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '10%', height: 'auto' }} />
      }
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </a>
  )
}

export default Button