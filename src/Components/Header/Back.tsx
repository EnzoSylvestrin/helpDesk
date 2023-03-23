import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import { useRouter } from 'next/router';

import { Icon } from '../Icon';
import Tooltip from '../Tooltip';

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
        <Tooltip
            element={
                <div 
                    onClick={HandleBack} 
                    className="absolute top-[10px] left-5 cursor-pointer z-[100]"
                >
                    <Icon icon={MdOutlineKeyboardBackspace} size={36} />
                </div>
            }
            text="Voltar para tela principal"
            place='right'
        />
    );
}