// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Pagination from "@/components/Pagination";
// import {useState} from "react";
//
// function createData(
//     name: string,
//     amount: string,
//     date: string,
//     status: string,
// ) {
//     return {name, amount, date, status};
// }
//
// const rows = [
//     createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Success'),
//     createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Failed'),
//     createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Success'),
//     createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Failed'),
//     createData('Sanda Diya Dothak ', 'LKR. 2500.00', '2024/09/18', 'Success'),
// ];
//
// const PaymentHistory = () => {
//
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages= 10;
//
//     return (
//         <div>
//             <div className="max-w-3xl flex mx-auto justify-center">
//                 <TableContainer component={Paper} className="border-[#E7EAE9]">
//                     <Table sx={{minWidth: 650}} aria-label="simple table">
//                         <TableHead>
//                             <TableRow className="py-6">
//                                 <TableCell align="center">
//                                     <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Event
//                                         Details
//                                     </div>
//                                 </TableCell>
//                                 <TableCell align="center">
//                                     <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Amount</div>
//                                 </TableCell>
//                                 <TableCell align="center">
//                                     <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Date</div>
//                                 </TableCell>
//                                 <TableCell align="center">
//                                     <div className="font-inter py-3 font-semibold text-[#2D2A70] text-lg">Status</div>
//                                 </TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows.map((row, index) => (
//                                 <TableRow
//                                     key={index}
//                                     sx={{'&:last-child td, &:last-child th': {border: 0}}}
//                                 >
//                                     <TableCell component="th" align="center" scope="row">
//                                         <div className="font-inter text-base py-3 text-[#000000]">{row.name}</div>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <div className="font-inter py-3 text-base text-[#000000]">{row.amount}</div>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <div className="font-inter py-3 text-base text-[#000000]">{row.date}</div>
//                                     </TableCell>
//                                     <TableCell align="center" className="">
//                                         <div
//                                             className={`text-center justify-center py-1 flex text-xs font-medium items-center rounded-md ${row.status === 'Success' ? 'bg-[#E8F2ED] text-[#117F45]' : 'bg-[#FFEDEA] text-[#FF4934]'}`}>
//                                             <span className="mr-2"><div
//                                                 className={`p-1 h-1 w-1 rounded-full ${row.status === 'Success' ? "bg-[#117F45]" : "bg-[#FF4934]"} `}/></span>{row.status}
//                                         </div>
//                                     </TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>
//             <div className="my-10 flex justify-center">
//                 <Pagination
//                     currentPage={currentPage}
//                     totalPages={totalPages}
//                     onPageChange={setCurrentPage}
//                 />
//             </div>
//         </div>
//     );
// }
//
// export default PaymentHistory;


"use client";
import React, {useState, useCallback, memo} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import Pagination from "@/components/Pagination";

// Define payment data interface
interface PaymentData {
    name: string;
    amount: string;
    date: string;
    status: "Success" | "Failed";
}

// Function to create payment data
const createData = (name: string, amount: string, date: string, status: PaymentData["status"]) => ({
    name,
    amount,
    date,
    status,
});

// Sample payment data
const rows: PaymentData[] = [
    createData("Sanda Diya Dothak", "LKR. 2500.00", "2024/09/18", "Success"),
    createData("Sanda Diya Dothak", "LKR. 2500.00", "2024/09/18", "Failed"),
    createData("Sanda Diya Dothak", "LKR. 2500.00", "2024/09/18", "Success"),
    createData("Sanda Diya Dothak", "LKR. 2500.00", "2024/09/18", "Failed"),
    createData("Sanda Diya Dothak", "LKR. 2500.00", "2024/09/18", "Success"),
];

// PaymentHistory component
const PaymentHistory: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
        // Optionally fetch new data for the page
    }, []);

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <TableContainer
                    component={Paper}
                    sx={{
                        border: "1px solid #E7EAE9",
                        boxShadow: "none",
                        borderRadius: "8px",
                    }}
                >
                    <Table
                        sx={{
                            minWidth: {xs: 300, sm: 650},
                            "& .MuiTableCell-root": {
                                borderColor: "#E7EAE9",
                            },
                        }}
                        aria-label="Payment history table"
                    >
                        <TableHead>
                            <TableRow
                                sx={{
                                    backgroundColor: "#F9FAFB",
                                    "&:hover": {backgroundColor: "#F9FAFB"},
                                }}
                            >
                                <TableCell align="center" sx={{py: 2, px: {xs: 1, sm: 2}}}>
                                    <div className="font-inter text-sm sm:text-base font-semibold text-[#2D2A70]">
                                        Event Details
                                    </div>
                                </TableCell>
                                <TableCell align="center" sx={{py: 2, px: {xs: 1, sm: 2}}}>
                                    <div className="font-inter text-sm sm:text-base font-semibold text-[#2D2A70]">
                                        Amount
                                    </div>
                                </TableCell>
                                <TableCell align="center" sx={{py: 2, px: {xs: 1, sm: 2}}}>
                                    <div className="font-inter text-sm sm:text-base font-semibold text-[#2D2A70]">
                                        Date
                                    </div>
                                </TableCell>
                                <TableCell align="center" sx={{py: 2, px: {xs: 1, sm: 2}}}>
                                    <div className="font-inter text-sm sm:text-base font-semibold text-[#2D2A70]">
                                        Status
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow
                                    key={`${row.name}-${index}`}
                                    sx={{
                                        "&:hover": {backgroundColor: "#F1F5F9"},
                                        "&:last-child td, &:last-child th": {border: 0},
                                    }}
                                >
                                    <TableCell
                                        align="center"
                                        sx={{py: 2, px: {xs: 1, sm: 2}, fontSize: {xs: "0.75rem", sm: "0.875rem"}}}
                                    >
                                        <div className="font-inter text-[#000000]">{row.name}</div>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{py: 2, px: {xs: 1, sm: 2}, fontSize: {xs: "0.75rem", sm: "0.875rem"}}}
                                    >
                                        <div className="font-inter text-[#000000]">{row.amount}</div>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{py: 2, px: {xs: 1, sm: 2}, fontSize: {xs: "0.75rem", sm: "0.875rem"}}}
                                    >
                                        <div className="font-inter text-[#000000]">{row.date}</div>
                                    </TableCell>
                                    <TableCell align="center" sx={{py: 2, px: {xs: 1, sm: 2}}}>
                                        <div
                                            className={`
                        inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-md
                        ${row.status === "Success" ? "bg-[#E8F2ED] text-[#117F45]" : "bg-[#FFEDEA] text-[#FF4934]"}
                      `}
                                            aria-label={`Status: ${row.status}`}
                                        >
                      <span className="mr-1">
                        <div
                            className={`h-1.5 w-1.5 rounded-full ${
                                row.status === "Success" ? "bg-[#117F45]" : "bg-[#FF4934]"
                            }`}
                        />
                      </span>
                                            {row.status}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="mt-10 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default memo(PaymentHistory);
