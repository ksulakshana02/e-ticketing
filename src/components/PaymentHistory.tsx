import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from "@/components/Pagination";
import {useState} from "react";

function createData(
    name: string,
    amount: string,
    date: string,
    status: string,
) {
    return {name, amount, date, status};
}

const rows = [
    createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Success'),
    createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Failed'),
    createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Success'),
    createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Failed'),
    createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Success'),
];

const PaymentHistory = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages= 10;

    return (
        <div>
            <div className="max-w-3xl flex mx-auto justify-center">
                <TableContainer component={Paper} className="border-[#E7EAE9]">
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow className="py-6">
                                <TableCell align="center">
                                    <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Event
                                        Details
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Amount</div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Date</div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Status</div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" align="center" scope="row">
                                        <div className="font-inter text-base py-3 text-[#000000]">{row.name}</div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className="font-inter py-3 text-base text-[#000000]">{row.amount}</div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className="font-inter py-3 text-base text-[#000000]">{row.date}</div>
                                    </TableCell>
                                    <TableCell align="center" className="">
                                        <div
                                            className={`text-center justify-center py-1 flex text-xs font-medium items-center rounded-md ${row.status === 'Success' ? 'bg-[#E8F2ED] text-[#117F45]' : 'bg-[#FFEDEA] text-[#FF4934]'}`}>
                                            <span className="mr-2"><div
                                                className={`p-1 h-1 w-1 rounded-full ${row.status === 'Success' ? "bg-[#117F45]" : "bg-[#FF4934]"} `}/></span>{row.status}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="my-10 flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default PaymentHistory;
