export const API_KEY = process.env.OPENAI_API_KEY;
export const ORG_ID = process.env.OPENAI_ORG_ID;

const GetKeys = async (req: any, res: any) => {
    res.status(200).send('');
}

export default GetKeys;