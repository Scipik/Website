
const spinnerStyles = "border-4 border-stone-300 border-t-blue-700 rounded-full aspect-square animate-spin w-4";

type SpinnerProps = {
  className?: React.ComponentProps<'div'>['className'];
};

/**
 * Simple spinner comopnent to indicate loading
 * @param className Tailwind (or native css classname) for styling
 * @returns Component
 */

export const Spinner = ({className}: SpinnerProps) => {
  return <div className={`${spinnerStyles} ${className}`} />;
};