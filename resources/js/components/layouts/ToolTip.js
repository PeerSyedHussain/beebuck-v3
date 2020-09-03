import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function ToolTip(props) {
    console.log(props.tooltip)
    return(
        <>
            {/* {['bottom'].map((placement) => (
                <OverlayTrigger
                key={placement}
                placement={placement}
                // overlay={
                //     <Tooltip id={`tooltip-${placement}`}>
                //         Tooltip on <strong>{placement}</strong>.
                //     </Tooltip>
                // }
                >
                {/* <Button variant="secondary">Tooltip on {placement}</Button> 
                </OverlayTrigger>
            ))} */}
        </>
    );
}

export default ToolTip;