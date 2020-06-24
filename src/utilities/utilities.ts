import React from 'react'

const useMedia = (query: string) => {
    console.log("this is query", query)
    const [matches, setMatches] = React.useState(
        window.matchMedia(query).matches
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