/* eslint-disable camelcase */
import { LemmyHttp, Login } from 'lemmy-js-client'
import { Register } from 'lemmy-js-client/dist/types/Register'
import { useState } from 'react'

import { baseUrl } from '../common'

export interface NewRegister extends Omit<Register, 'show_nsfw' | 'honeypot' | 'answer'> {}

export const useUsers = () => {
    const [user, setUser] = useState<string | null>(null)
    const [captchaUuid, setCaptchaUuid] = useState<string>('')
    const [registrationCreated, setRegistrationCreated] = useState<boolean>(false)
    const [verifyEmailSent, setVerifyEmailSent] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [loginError, setLoginError] = useState('')

    const auth = async (loginForm: Login) => {
        setIsLoading(true)
        try {
            const client: LemmyHttp = new LemmyHttp(baseUrl)
            const auth = await client.login(loginForm)
            if (auth.jwt) {
                // eslint-disable-next-line no-console
                console.log('auth.jwt', auth.jwt, auth.registration_created, auth.verify_email_sent)
                setRegistrationCreated(auth.registration_created)
                setVerifyEmailSent(auth.verify_email_sent)
                setUser(loginForm.username_or_email)

                const getSite = await client.getSite({
                    auth: auth.jwt,
                })
                // eslint-disable-next-line no-console
                console.log('getSite', getSite)
            } else {
                setLoginError('Ошибка авторизации')
            }
        } catch (e) {
            setLoginError(typeof e == 'string' ? e : (e as any)?.message)
        } finally {
            setIsLoading(false)
        }
    }

    const reg = async (regForm: NewRegister) => {
        const client: LemmyHttp = new LemmyHttp(baseUrl)
        const register = await client.register({ ...regForm, show_nsfw: false, captcha_uuid: captchaUuid })
        // eslint-disable-next-line no-console
        console.log('reg: ', register)
    }

    const logout = () => {
        setUser(null)
    }

    const captcha = async () => {
        const client: LemmyHttp = new LemmyHttp(baseUrl)
        try {
            const res = await client.getCaptcha()
            if (!res?.ok) {
                // eslint-disable-next-line no-console
                console.log('Error', 'Failed to obtain captcha.')

                return
            }
            setCaptchaUuid(res.ok.uuid)

            return res.ok.png
        } catch {
            setLoginError('Ошибка авторизации')
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        loginError,
        user,
        registrationCreated,
        verifyEmailSent,
        auth,
        reg,
        logout,
        captcha,
    }
}
