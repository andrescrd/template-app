import { Box, Container } from "@material-ui/core";
import React from "react"

const ListContainer: React.FC<{}> = (props) => {
    return <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
        }}
    >
        <Container maxWidth={false}>
            {props.children}
        </Container>
    </Box>;
}

export default ListContainer;