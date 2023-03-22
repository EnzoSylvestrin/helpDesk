const API_KEY = process.env.OPENAI_API_KEY;
const ORG_ID = process.env.OPENAI_ORG_ID;

type KeysObjProps = {
    key: string | undefined,
    orgId: string | undefined,
}

let KeysObj : KeysObjProps = {
    key: API_KEY,
    orgId: ORG_ID,
}

const GetKeys = async (req: any, res: any) => {
    res.status(200).json(KeysObj);
}

export default GetKeys;