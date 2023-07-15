import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FilterList } from "@mui/icons-material";

const GenericFilter = ({ data, buttonLabel, options, handleSelect }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (label) => {
    setAnchorEl(null);
    handleSelect(label ? label : "");
  };

  return (
    <div>
      <Button
        id={`${data}-filter-menu-button`}
        variant="contained"
        color="primary"
        aria-controls={open ? `${data}-filter-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {data ? data : buttonLabel} <FilterList sx={{ marginLeft: 2 }} />
      </Button>
      <Menu
        id={`${data}-filter-menu`}
        aria-labelledby={`${data}-filter-menu-button`}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map((option) => (
          <MenuItem
            onClick={() => handleClose(option)}
            key={`${option}-filter-select-option`}
          >
            {option}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleClose("")}>Todos</MenuItem>
      </Menu>
    </div>
  );
};

export default GenericFilter;
