import { object, string, } from 'yup'

const REQUAIRED_MSG = 'Обязательно для заполнения'

export const validationSchema = object().shape({
    login: string().required(REQUAIRED_MSG),
    password: string().required(REQUAIRED_MSG),
    email: string().required(REQUAIRED_MSG).email('не корретный email')
})