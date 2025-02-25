import React, { useState } from "react";

type ButtonVariant = "primary" | "link";
type ButtonSize = "regular" | "small";

interface Props<C extends React.ElementType = "button"> {
    children?: React.ReactNode;
    as?: C;
    variant?: ButtonVariant;
    additional?: string;
    icon?: React.ElementType;
    size?: ButtonSize;
    rounded?: boolean;
    fontSize?: string[];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    [key: string]: any;
}

const Button = <C extends React.ElementType = "button">({
    children,
    as,
    variant = "primary",
    additional = "",
    icon,
    size = "regular",
    rounded = false,
    fontSize = ["xl", "xl"],
    onClick,
    type = "button",
    ...restProps
}: Props<C>) => {
    const Component = as || "button";
    const ButtonIcon = icon;

    const [isClicked, setIsClicked] = useState(false);

    let backgroundColor = "bg-white";
    let textColor = "text-black";
    let hoverBackgroundColor = "hover:bg-black";
    let hoverTextColor = "hover:text-white";
    let borderColor = "border-black";
    let padding = "px-6 py-2";
    let shadow = "shadow-md";
    let textDecoration = "";

    switch (variant) {
        case "primary":
            rounded = false; // Ensure no rounded corners
            break;

        case "link":
            backgroundColor = "bg-white";
            textColor = "text-black";
            borderColor = "border-transparent";
            textDecoration = "underline decoration-current";
            padding = "";
            shadow = "";

            // Change background color on click
            if (isClicked) {
                backgroundColor = "bg-gray-500";
            }
            break;
    }

    switch (size) {
        case "small":
            fontSize = ["md", "md"];
            break;
    }

    const textSize =
        typeof fontSize === "string"
            ? `text-${fontSize}`
            : `text-${fontSize[0]} ${fontSize.length > 1 ? `md:text-${fontSize[1]}` : ""}`;

    return (
        <Component
            {...restProps}
            onClick={(e: any) => {
                setIsClicked(true);
                if (onClick) onClick(e);
                setTimeout(() => setIsClicked(false), 300); // Reset after 300ms
            }}
            type={type}
            className={`${additional} ${backgroundColor} ${textColor} ${hoverBackgroundColor} ${hoverTextColor} 
                border ${borderColor} ${padding} ${textSize} font-bold ${shadow} 
                flex duration-300 items-center justify-center cursor-pointer focus:outline-none disabled:pointer-events-none 
                ${rounded ? "rounded-md" : ""} ${textDecoration}`}
        >
            {children}
            {ButtonIcon && <ButtonIcon className="ml-2 h-6 w-6" />}
        </Component>
    );
};

export default Button;