import { useState } from 'react'

export interface Link {
    url: string
}

export interface Post {
    readonly id: number
    title: string
    description?: string
    img?: string
    link: Link
}

export const usePosts = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const _posts = [
        {
            id: 0,
            title: 'title',
            link: { url: 'link' },
            img: '',
        },
    ]

    const [posts, setPosts] = useState<Post[]>(_posts)

    const create = (link: string) => {
        setIsLoading(true)
        setPosts([
            ..._posts,
            {
                id: 1,
                title: link,
                link: {
                    url: link,
                },
                img: '',
            },
        ])
        setIsLoading(false)
    }

    return { posts, isLoading, create }
}
