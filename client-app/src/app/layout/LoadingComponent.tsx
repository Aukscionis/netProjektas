import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react';

export const LoadingComponent: React.FC<{inverted?: boolean, content?: string}> = ({inverted, content}) => {
    return (
        <Dimmer active inverted>
            <Loader size='large' content={content}/>
        </Dimmer>
    )
}

export default LoadingComponent;