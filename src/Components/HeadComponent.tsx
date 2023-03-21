import Head from "next/head";

type HeadComponentProps = {
    title: string;
}

export const HeadComponent = ({ title } : HeadComponentProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Site para registro de chamados para funcionamento" />
            <meta name="author" content='Enzo Sylvestrin - enzospavani@gmail.com' />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}