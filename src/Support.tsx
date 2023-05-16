import React, {useCallback, useState} from "react";

// @ts-ignore
import s from "./Support.scss";

interface SupportProps {
    label: string;
}

const Support = ({label}: SupportProps) => {
    const [clicked, setClicked] = useState(false);
    const onClicked = useCallback(() => setClicked(!clicked), [clicked]);
    return (<div className={s.ycs} onClick={onClicked}>{label}</div>)
};

export default Support;