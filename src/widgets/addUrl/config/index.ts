import { object, string, } from 'yup'

const REQUAIRED_MSG = 'Обязательно для заполнения'

export const validationSchema = object().shape({
    url: string().required(REQUAIRED_MSG),
})