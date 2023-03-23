import React from 'react';
// @ts-ignore
import * as TooltipRadix from '@radix-ui/react-Tooltip';

type TooltipProps = {
    element: JSX.Element,
    text: string,
    place?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip = ({ element, text, place } : TooltipProps) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={200}>
        <TooltipRadix.Trigger asChild>
          {element}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <div>
            <TooltipRadix.Content
              side={place}
              className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-darkColor dark:text-lightColor select-none rounded-lg bg-grayMain dark:bg-darkMain p-2 text-xs leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
              sideOffset={2}
            >
              {text}
              <TooltipRadix.Arrow className="fill-grayMain dark:fill-darkMain" />
            </TooltipRadix.Content>
          </div>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

export default Tooltip;