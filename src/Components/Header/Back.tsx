import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import { useRouter } from 'next/router';

import { Icon } from '../Icon';
import { Tooltip } from 'react-tooltip';

export const Back = ({ url } : {url?: string}) => {

    const router = useRouter();

    const HandleBack = () => {
        if (url != null) {
            router.push(url);
        }
        else {
            router.back();
        }
    }

    return (
        <div 
            onClick={HandleBack} 
            className="absolute top-[10px] left-5 cursor-pointer z-[100]"
            data-tooltip-id="TipBack"
            data-tooltip-place="bottom"
            data-tooltip-content="Voltar para página inicial"
        >
            <Icon icon={MdOutlineKeyboardBackspace} size={36} />
            <Tooltip id='TipBack' />
        </div>
    );
}