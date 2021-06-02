import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, WrongPage } from "pages/"
import { Box, useTheme } from "@material-ui/core";

const Routes = () => {
    const theme = useTheme();

    return <Box style={{ backgroundColor: theme.palette.background.default }}>
            <Switch>
            <Route path="/" exact component={Home} />
            <Route exact component={WrongPage} />
        </Switch>
    </Box>
}

export default Routes;