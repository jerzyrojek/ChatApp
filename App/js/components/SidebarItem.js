import React from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const SidebarItem = ({title, id}) => {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/${id}`);
        } else {
            history.push(title);
        }
    }

    return (
        <div onClick={selectChannel} className="sidebar__item">
            <Typography>
                #{title}
            </Typography>
        </div>
    )
}


export default SidebarItem;