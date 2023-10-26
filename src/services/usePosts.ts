import { GetPosts, LemmyHttp, PostView } from 'lemmy-js-client'
import { useState } from 'react'

import { baseUrl } from '../common'

export interface NewGetPosts extends GetPosts {}
export interface PostsResponse {
    error?: string
}

export const usePosts = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [posts, setPosts] = useState<PostView[]>([])

    const getPosts = async (req?: NewGetPosts): Promise<PostsResponse> => {
        setIsLoading(true)
        try {
            const client: LemmyHttp = new LemmyHttp(baseUrl)
            const res = await client.getPosts(req)
            setPosts(res.posts)

            return {}
        } catch (e) {
            return { error: e?.toString() }
        } finally {
            setIsLoading(false)
        }
    }

    const create = () => {
        setIsLoading(true)
        setIsLoading(false)
    }

    return { posts, getPosts, isLoading, create }
}
