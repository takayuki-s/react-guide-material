import { useEffect, useState } from "react"

export default function SSR() {
    console.log('hello')
    useEffect(() => {
        console.log('useEffect');
        window.localStorage.setItem('key', 'value');
        document.cookie = 'val=0; path=/;'
    }, [])

    const [state, setState] = useState('bye');
    const val = 0
    return (
        <>
            <h3>SSR</h3>
            <h3>{state}</h3>
        </>
    )
}