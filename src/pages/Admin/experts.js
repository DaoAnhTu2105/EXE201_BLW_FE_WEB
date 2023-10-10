import React from "react";
import { useQuery } from "react-query";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const ExpertManager = () => {
    const expertAPI_URL = `https://blw-api.azurewebsites.net/api/Expert/GetAll`
    const { data: experts, isLoading, isError } = useQuery('expertsData', () => {
        const response = fetch(expertAPI_URL).then(response => {
            return response.json()
        })
    })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (



        <>
            <div className="container-trans">
                <div className="row-trans">
                    <div className="col-md-12-trans">
                        <div className="table-wrap">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Tên chuyên gia</th>
                                        <th>Số điện thoại</th>
                                        <th>Khu vực</th>
                                        <th>Mô tả</th>
                                        <th>Liên lạc mxh</th>
                                        <th>Trạng thái</th>
                                        <th>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {experts && experts?.data.forEach(expert => {
                                        <tr style={{ alignItems: "center" }}>
                                            <td>Chuyên gia A</td>
                                            <td>0123456789</td>
                                            <td>Hồ Chí Minh</td>
                                            <td>Chuyên gia dinh dưỡng</td>
                                            <td>-</td>
                                            <td><p style={{ color: "#5d7ee7" }}>Active</p></td>
                                            <td>

                                            </td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    )
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default ExpertManager