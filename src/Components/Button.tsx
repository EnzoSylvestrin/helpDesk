import { motion } from 'framer-motion';

import clsx from 'clsx';

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg',
  text: string,
  href?: string,
  full?: boolean,
  type?: "button" | "submit" | "reset",
  loading?: boolean,
  onClick?: () => void,
}

export const Button = ({ size = 'md', type = "button", text, href, loading = false, full, onClick, ...props }: ButtonProps) => {
  const Button = href ? 'a' : 'button';

  return (
    <Button
      type={type}
      className={clsx(
        "rounded-md bg-[var(--main)] text-white ring-[var(--main)] ring-2 transition-all duration-[400ms]",
        "px-1 py-[2px] cursor-pointer selection:text-inherit",
        'hover:shadow-[0_0_5px_var(--main),_0_0_10px_var(--main),_0_0_20px_var(--main)] hover:scale-[1.03]', {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'w-full': full,
        '!text-transparent relative bg-transparent': loading
      })}
      {...(href ? { target: "_blank", rel: "noopener noreferrer", href: href } : {})}
      onClick={!loading ? onClick : () => { return }}
      {...props}
    >
      {text}
      {
        loading
          ?
          <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <motion.div
              className="rounded-full border-secondary border-2 border-t-transparent w-6 h-6"
              animate={{
                rotate: '360deg'
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            />
          </div>
          :
          ''
      }
    </Button>
  );
};
