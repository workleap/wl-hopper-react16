import React, { forwardRef, type ElementType, type RefAttributes, type SVGProps, type ComponentProps } from "react";

import styles from "./RichIcon.module.css";

export type RichIconDecorativeVariant = "option1" | "option2" | "option3" | "option4" | "option5" | "option6" | "option7" | "option8";
export type RichIconStatusVariant = "success" | "warning" | "danger" | "information" | "upsell";
export type RichIconVariant = RichIconDecorativeVariant | RichIconStatusVariant;

export interface RichIconProps extends ComponentProps<"svg"> {
    /**
     * The visual style of the icon.
     */
    variant?: RichIconVariant;
    /**
    * The size of the icon.
    */
    size?: "md" | "lg" | "xl";
    /**
     * The source of the icon with a size of 24px.
     */
    src24: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    /**
     * The source of the icon with a size of 32px.
     */
    src32: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
    /**
     * The source of the icon with a size of 40px.
     */
    src40: ElementType<Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>>;
}

export const RichIcon = forwardRef<SVGSVGElement, RichIconProps>((props, ref) => {
    const {
        size = "md",
        variant = "option7",
        src24,
        src32,
        src40,
        style,
        className,
        "aria-label": ariaLabel,
        "aria-hidden": ariaHidden,
        ...rest
    } = props;

    const sizeMappings = {
        md: src24,
        lg: src32,
        xl: src40
    };

    const As = sizeMappings[size];

    const classNames = [
        styles["hop-RichIcon"],
        styles[`hop-RichIcon--${variant}`],
        className
    ].filter(x => x !== undefined).join(" ");

    return (
        <As
            style={style}
            {...rest}
            ref={ref}
            focusable="false"
            role="img"
            aria-label={ariaLabel}
            aria-hidden={(ariaLabel ? (ariaHidden || undefined) : true)}
            className={classNames}
        />
    );
});

RichIcon.displayName = "RichIcon";
