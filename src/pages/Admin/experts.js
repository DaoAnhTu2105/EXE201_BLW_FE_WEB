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
            <div style={{ backgroundColor: "#f3f6f4", height: "50px" }}>
                <nav className="breadcrumb" aria-label="breadcrumbs" style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "100%" }}>
                    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", padding: "0", margin: 0 }}>
                        <li style={{ paddingLeft: "20px" }}><a className="bread-crumb" href="/admin/dashboard">Trang chủ</a></li>
                        <li className="is-active"><a href="#" className="bread-crumb" aria-current="page">Chuyên gia</a></li>
                    </ul>
                </nav>
            </div>
            <hr style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />
            <div id="heading-title">
                <p id="heading" >Chuyên gia</p>
            </div>
            <div style={{ display: "flex" }}>
                <button disabled className="button is-rounded" style={{ border: "1px solid black" }}> Tất cả (2)</button>
                <button style={{ marginLeft: "20px" }} onClick={handleOpen} className="button is-primary">+ Thêm mới</button>
            </div>
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Thêm mới chuyên gia
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <input class="input is-primary" type="text" placeholder="Primary input"></input>
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
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default ExpertManager