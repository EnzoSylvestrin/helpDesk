import { FormEvent } from "react";

import { Configuration, OpenAIApi } from "openai";

import { Input } from "./Input";
import { Text } from "./Text";
import { FormInputs } from "@/pages";
import { UseFormRegister } from "react-hook-form";

type DescriptionProps = { 
    register: UseFormRegister<FormInputs>, 
    required?: boolean 
}

export const Description = ({ register, required }: DescriptionProps) => {

    const model = 'text-davinci-003';
    const maxTokens = 300;
    const temperature = 0.2;

    const modelEdit = 'text-davinci-edit-001';
    const instruction = "Corrija este texto";

    const configuration = new Configuration({
        organization: process.env.ORG_ID,
        apiKey: process.env.API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const HandleInput = (e: FormEvent<HTMLTextAreaElement>) => {
        const description = e.currentTarget;
        const text = description.value;

        const start = text.indexOf('#');

        if (start !== -1) {
            const end = text.indexOf('#', start + 1);

            if (end !== -1) {
                const match = text.slice(start + 1, end).trim();

                description.disabled = true;
                if (match.toLowerCase() == 'corrigir') {
                    let prompt = description.value;
                    prompt = prompt.replace(match, '').replaceAll('#', '');
                    CorrectText(prompt, description);
                }
                else {
                    CompleteText(match, description);
                }
            }
        }
    }

    const CompleteText = (prompt: string, description: HTMLTextAreaElement) => {
        openai.createCompletion({
            model,
            prompt,
            max_tokens: maxTokens,
            temperature,
        }).then((response) => {
            const text = description.value;
            let completions = response.data.choices[0].text;

            if (completions != null) {
                completions = completions.replaceAll('\n', ' ').trim();
                const start = text.indexOf('#');

                const end = text.indexOf('#', start + 1);

                const match = text.slice(start + 1, end);

                let NewText = description.value
                    .replace(match, completions)
                    .replaceAll('#', '');
                description.value = NewText;
            }
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            description.disabled = false;
        });
    }

    const CorrectText = (input: string, description: HTMLTextAreaElement) => {
        openai.createEdit({
            model: modelEdit,
            input,
            instruction,
            temperature
        }).then((response) => {
            let completions = response.data.choices[0].text;

            if (completions != null) {
                completions = completions.replaceAll('\n', ' ').trim();

                description.value = completions;
            }
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            description.disabled = false;
        });
    }

    return (
        <label htmlFor='description' className='h-full'>
            <Text className={'mb-2 !text-[19px]'}>Mensagem:</Text>
            <Input.Root className='!h-full'>
                <Input.TextArea
                    className='h-full'
                    placeholder="Digite #olá chatgpt# para ver algo legal!"
                    onInput={(e) => HandleInput(e)}
                    title='Digite #corrigir# após o texto para corrigir automaticamente.'
                    register={register}
                    required={required}
                />
            </Input.Root>
        </label>
    );
}