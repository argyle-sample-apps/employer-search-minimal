import clsx from "clsx";

export function Heading({ children, className }) {
  return (
    <h2 className={clsx("text-heading text-gray-900", className)}>
      {children}
    </h2>
  );
}

export function Subheading({ children, className }) {
  return (
    <h3
      className={clsx("text-subheading font-normal text-gray-900", className)}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children, className }) {
  return (
    <p className={clsx("text-base font-normal text-gray-500", className)}>
      {children}
    </p>
  );
}
