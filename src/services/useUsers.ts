/* eslint-disable camelcase */
import { LemmyHttp, Login, LoginResponse as LResponseL } from 'lemmy-js-client'
import { Register } from 'lemmy-js-client/dist/types/Register'
import { useState } from 'react'

import { baseUrl } from '../common'

export interface NewRegister extends Omit<Register, 'show_nsfw' | 'honeypot' | 'answer'> {}
export interface NewLogin extends Login {}
interface Response {
    verify_email_sent?: LResponseL['verify_email_sent']
    error?: string
}
export interface RegisterResponse extends Response {
    reg: boolean
}
export interface LoginResponse extends Response {
    login: boolean
}
export interface CaptchaResponse {
    png?: string
    error?: string
}

export const useUsers = () => {
    const [user, setUser] = useState<string | null>(null)
    const [captchaUuid, setCaptchaUuid] = useState<string>('')
    const [verifyEmailSent, setVerifyEmailSent] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const auth = async (loginForm: NewLogin): Promise<LoginResponse> => {
        setIsLoading(true)
        try {
            const client: LemmyHttp = new LemmyHttp(baseUrl)
            const res = await client.login(loginForm)
            if (res.jwt) {
                setVerifyEmailSent(res.verify_email_sent)
                setUser(loginForm.username_or_email)

                if (!res.registration_created && !res.verify_email_sent) {
                    return { login: false, error: 'An error occurred while completing registration.' }
                } else {
                    return { login: true, verify_email_sent: res.verify_email_sent }
                }
            } else {
                return { login: false, error: 'Ошибка авторизации' }
            }
        } catch (e) {
            return { login: false, error: e?.toString() }
        } finally {
            setIsLoading(false)
        }
    }

    const reg = async (regForm: NewRegister): Promise<RegisterResponse> => {
        setIsLoading(true)
        try {
            const client: LemmyHttp = new LemmyHttp(baseUrl)
            const res = await client.register({ ...regForm, show_nsfw: false, captcha_uuid: captchaUuid })

            if (!res.registration_created && !res.verify_email_sent) {
                return { reg: false, error: 'An error occurred while completing registration.' }
            } else {
                return { reg: true, verify_email_sent: res.verify_email_sent }
            }
        } catch (e) {
            return { reg: false, error: e?.toString() }
        } finally {
            setIsLoading(false)
        }
    }

    const logout = () => {
        setUser(null)
    }

    const captcha = async (): Promise<CaptchaResponse> => {
        setIsLoading(true)
        try {
            const client: LemmyHttp = new LemmyHttp(baseUrl)
            const res = await client.getCaptcha()
            if (!res?.ok) {
                return { error: 'Failed to obtain captcha.' }
            }
            setCaptchaUuid(res.ok.uuid)

            return { png: res.ok.png }
        } catch {
            return { error: 'Failed' }
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        user,
        verifyEmailSent,
        auth,
        reg,
        logout,
        captcha,
    }
}
