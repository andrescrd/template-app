import React from "react";
import { Helmet } from 'react-helmet';

const TitleHemlet: React.FC<{ title: string }> = (props) => {
    return (
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
    )
}

export default TitleHemlet;