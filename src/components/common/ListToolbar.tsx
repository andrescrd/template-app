import { Box, Button, Card, CardContent, TextField, InputAdornment, SvgIcon } from '@material-ui/core';
import React from 'react';
import { Search as SearchIcon } from 'react-feather';

type ListToolbar = {
    addButtonText: string;
    addButtonClicked: () => void;
    importButtonClicked?: () => void;
    exportButtonClicked?: () => void;
}

const ListToolbar: React.FC<ListToolbar> = (props) => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                {props.importButtonClicked ? <Button onClick={props.importButtonClicked}>
                    Import
                </Button> : null}
                {props.exportButtonClicked ? <Button sx={{ mx: 1 }} onClick={props.exportButtonClicked}>
                    Export
                </Button> : null}
                <Button color="primary" variant="contained"
                    onClick={props.addButtonClicked}>
                    {props.addButtonText}
                </Button>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Card>
                    <CardContent>
                        <Box sx={{ maxWidth: 500 }}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SvgIcon
                                                fontSize="small"
                                                color="action"
                                            >
                                                <SearchIcon />
                                            </SvgIcon>
                                        </InputAdornment>
                                    )
                                }}
                                placeholder="Search"
                                variant="outlined"
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default ListToolbar;
