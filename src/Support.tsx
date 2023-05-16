import React, {useCallback, useState} from "react";

import "./Support.scss";

interface SupportProps {
    label: string;
}

const Support = ({label}: SupportProps) => {
    const [clicked, setClicked] = useState(false);
    const onClicked = useCallback(() => setClicked(!clicked), [clicked]);

    console.log(s);
    

    return (<div className={'ycs'} onClick={onClicked}>{label} {clicked ? 1 : 2}</div>)
};

export default Support;