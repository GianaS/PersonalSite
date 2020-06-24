import React from 'react'

const useMedia = (query: string): boolean => {
    const [matches, setMatches] = React.useState(
        typeof window !== 'undefined' ? window.matchMedia(query).matches : false
    )

    React.useEffect(() => {
        const media = window.matchMedia(query)

        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        media.addListener(listener)

        return () => media.removeListener(listener)
    }, [query])

    return matches
}

export {
    useMedia
}