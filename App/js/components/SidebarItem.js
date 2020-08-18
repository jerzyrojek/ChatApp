import React from "react";
import {Icon} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const SidebarItem = ({title}) => {
    return (
        <div className="sidebar__item">
            <Typography>
                #{title}
            </Typography>
        </div>
    )
}


export default SidebarItem;