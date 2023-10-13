import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Transactions = () => {
    const navigate = useNavigate()
    const admin = JSON.parse(localStorage.getItem('admin'))
    const accessToken = admin?.token
    const [transactionData, setTransactionData] = useState({ data: [] });
    console.log(transactionData.data)

    const handleUpdatePayment = (id) => {
    }
    useEffect(() => {
        if (admin) {
            const paymentURL = `https://blw-api.azurewebsites.net/api/Payments/GetPayments`;

            fetch(paymentURL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch payment data');
                    }
                    return response.json();
                })
                .then(data => {
                    setTransactionData(data);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            navigate('/blw-manager/login');
        }
    }, [navigate, admin]);
    return (
        <>
            <div style={{ backgroundColor: "#f3f6f4", height: "50px" }}>
                <nav className="breadcrumb" aria-label="breadcrumbs" style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "100%" }}>
                    <ul style={{ display: "flex", alignItems: "center", listStyle: "none", padding: "0", margin: 0 }}>
                        <li style={{ paddingLeft: "20px" }}><a className="bread-crumb" href="/admin/dashboard">Trang chủ</a></li>
                        <li className="is-active"><a href="#" className="bread-crumb" aria-current="page">Giao dịch</a></li>
                    </ul>
                </nav>
            </div>
            <hr style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} />
            <div id="heading-title">
                <p id="heading" >Giao dịch</p>
            </div>
            <div style={{ display: "flex", paddingBottom: "40px" }}>
                <button disabled className="button is-rounded" style={{ border: "1px solid black", marginRight: "500px" }}> Tất cả ({transactionData.data.length})</button>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Tên kh..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledDateInputBase
                        placeholder="Tên kh..."
                        inputProps={{ 'type': 'date' }}
                    />
                </Search>

            </div>
            <div className="container-trans">
                <div className="row-trans">
                    <div className="col-md-12-trans">
                        <div className="table-wrap">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th >Mã đơn</th>
                                        <th>Tên KH</th>
                                        <th>Tên gói</th>
                                        <th>Đơn giá</th>
                                        <th>Ngày giao dịch</th>
                                        <th>Tiền nhận</th>
                                        <th>Trạng thái</th>
                                        <th>Duyệt đơn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactionData.data.map((transaction) => (
                                        <tr style={{ alignContent: "center" }} key={transaction.paymentId}>
                                            <td style={{ fontWeight: "800" }}>{transaction.privateCode}</td>
                                            <td>{transaction.customerName}</td>
                                            <td>{transaction.packageName}</td>
                                            <td>{transaction.packagePrice}</td>
                                            <td>{new Date(transaction.createDate).toLocaleDateString()}</td>
                                            <td>{transaction.amount}</td>
                                            <td>
                                                {transaction.paymentStatus === false ? (
                                                    <p className="has-text-danger" style={{ fontWeight: "700" }}>Chưa duyệt</p>
                                                ) : (
                                                    <p className="has-text-success" style={{ fontWeight: "700" }}>Đã duyệt</p>
                                                )}
                                            </td>
                                            <td>
                                                {transaction.paymentStatus === false ? (
                                                    <button onclick={() => handleUpdatePayment(transaction.paymentId)} className="button is-rounded" style={{ width: "25px", color: "inherit" }}><FontAwesomeIcon color="green" icon={faCheck} /></button>
                                                ) : (
                                                    <p className="has-text-success" style={{ fontWeight: "700" }}>Đã duyệt</p>
                                                )}

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >

        </>
    )
}
export default Transactions
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: '1px solid black',
    borderRadius: '25px',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const StyledDateInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        // transition: theme.transitions.create('width'),
        // width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //         width: '20ch',
        //     },
        // },
    },
}));