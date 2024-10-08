import Image from "next/image";

type ButtonProps = {
  type: 'button'| 'submit' ;
  label: string;
  icon?: string;
  variant: 'btn_dark_green'| 'btn_green'| 'btn_white_text' | 'btn_white' | 'btn_dark_green_outline';
}

const Button = ({type,label,icon,variant}:ButtonProps) => {
  return (
    <button
    type={type}
    className={`flexCenter gap-3 rounded-full border ${variant}`}>
      {icon && <Image src={icon} alt="icon" className="mr-2" width={24} height={24}></Image> }
      <label className="bold-16 whitespace-nowrap ">
        {label}
      </label>

    </button>
  )
}

export default Button
