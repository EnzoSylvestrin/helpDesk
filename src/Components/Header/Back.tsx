import { MdOutlineKeyboardBackspace } from 'react-icons/md';

import { useRouter } from 'next/router';

import { Icon } from '../Icon';

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
        <div onClick={HandleBack} className="absolute text-2xl top-[10px] left-5 cursor-pointer">
            <Icon icon={MdOutlineKeyboardBackspace} size={36} />
        </div>
    );
}