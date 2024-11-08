import { useEffect, useRef } from "react";


function previous(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    })
    return ref.current;
}

export default previous;