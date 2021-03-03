import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useStore, useActions } from '../../hooks';

function Confirmation({ className, style }) {
    const {
        loading,
        open,
        title,
        text,
    } = useStore('dialog');
    const { hideDialog, confirm, cancel } = useActions('dialog');
    return (
        <Dialog
            className={className}
            onClose={() => hideDialog()}
            open={open}
            style={style}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button
                    color='primary'
                    disabled={loading}
                    onClick={() => confirm()}
                >
                    Ok
                </Button>
                <Button
                    color='primary'
                    disabled={loading}
                    onClick={() => cancel()}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

Confirmation.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Confirmation.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Confirmation;
