import { Poppins } from 'next/font/google'
import { twMerge } from 'tailwind-merge';


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: "700"
})

export default function Button({ children, className, ...rest }) {
  return (
    <button
      {...rest}
      className={twMerge(`${poppins.className} 
      text-white bg-primary py-2 md:py-3 px-3 md:px-6 font-bold rounded hover:drop-shadow-2xl uppercase`,
        className)}
    >
      {children}
    </button>
  );
}