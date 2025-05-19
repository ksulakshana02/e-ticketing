// // import React, {useState, useEffect} from 'react';
// // import {
// //     TextField,
// //     Autocomplete,
// //     Button,
// //     InputAdornment,
// //     Slider,
// //     Popover,
// //     useMediaQuery,
// //     Typography
// // } from '@mui/material';
// // import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
// // import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
// // import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// // import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// // import SearchIcon from '@mui/icons-material/Search';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import {useTheme} from '@mui/material/styles';
// //
// // // Types
// // interface Artist {
// //     id: number;
// //     name: string;
// // }
// //
// // interface Location {
// //     id: number;
// //     name: string;
// // }
// //
// // interface EventFilterProps {
// //     onFilterChange: (filters: EventFilters) => void;
// //     className?: string;
// // }
// //
// // interface EventFilters {
// //     startDate: Date | null;
// //     endDate: Date | null;
// //     artist: Artist | null;
// //     location: Location | null;
// //     priceRange: number[];
// // }
// //
// // // Mock data
// // const artists: Artist[] = [
// //     {id: 1, name: 'Victor Rathnayake'},
// //     {id: 2, name: 'Nanda Malini'},
// //     {id: 3, name: 'Amaradeva'},
// //     {id: 4, name: 'Rohana Weerasinghe'},
// // ];
// //
// // const locations: Location[] = [
// //     {id: 1, name: 'Musaeus College Auditorium'},
// //     {id: 2, name: 'Nelum Pokuna Theatre'},
// //     {id: 3, name: 'Lionel Wendt Theatre'},
// //     {id: 4, name: 'BMICH'},
// // ];
// //
// // const EventFilter: React.FC<EventFilterProps> = ({onFilterChange, className}) => {
// //     const theme = useTheme();
// //     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //     const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
// //     const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
// //
// //     // States for filters
// //     const [startDate, setStartDate] = useState<Date | null>(new Date());
// //     const [endDate, setEndDate] = useState<Date | null>(new Date(new Date().setDate(new Date().getDate() + 7)));
// //     const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
// //     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
// //     const [priceRange, setPriceRange] = useState<number[]>([1000, 10000]);
// //
// //     // Date picker popover state
// //     const [dateAnchorEl, setDateAnchorEl] = useState<HTMLButtonElement | null>(null);
// //     const [priceAnchorEl, setPriceAnchorEl] = useState<HTMLButtonElement | null>(null);
// //
// //     // Format date range for display
// //     const getFormattedDateRange = () => {
// //         if (!startDate || !endDate) return 'Select dates';
// //         return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
// //     };
// //
// //     // Price range display
// //     const getFormattedPriceRange = () => {
// //         return `LKR ${priceRange[0]} - LKR ${priceRange[1]}`;
// //     };
// //
// //     // Handle changes and update parent component
// //     useEffect(() => {
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     }, [startDate, endDate, selectedArtist, selectedLocation, priceRange, onFilterChange]);
// //
// //     // Handle search button click
// //     const handleSearch = () => {
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const handleDateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// //         setDateAnchorEl(event.currentTarget);
// //     };
// //
// //     const handleDateClose = () => {
// //         setDateAnchorEl(null);
// //     };
// //
// //     const handlePriceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// //         setPriceAnchorEl(event.currentTarget);
// //     };
// //
// //     const handlePriceClose = () => {
// //         setPriceAnchorEl(null);
// //     };
// //
// //     const dateOpen = Boolean(dateAnchorEl);
// //     const priceOpen = Boolean(priceAnchorEl);
// //
// //     // Calculate column widths based on screen size
// //     const getColumnClass = () => {
// //         if (isMobile) return 'w-full mb-2';
// //         if (isTablet) return 'w-1/2 px-1 mb-2';
// //         return 'flex-1 px-1';
// //     };
// //
// //     return (
// //         <div className={`bg-[#F4FCFF] rounded-2xl px-4 py-8 shadow-sm ${className}`}>
// //             <div className={`flex flex-wrap ${isDesktop ? 'flex-nowrap items-center' : ''}`}>
// //                 {/* Date Range Selector */}
// //                 <div className={getColumnClass()}>
// //                     <button
// //                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onClick={handleDateClick}
// //                     >
// //                         <div className="flex items-center">
// //                             <CalendarMonthIcon className="text-gray-500 mr-2"/>
// //                             <span>{getFormattedDateRange()}</span>
// //                         </div>
// //                         <KeyboardArrowDownIcon className="text-gray-500"/>
// //                     </button>
// //                     <Popover
// //                         open={dateOpen}
// //                         anchorEl={dateAnchorEl}
// //                         onClose={handleDateClose}
// //                         anchorOrigin={{
// //                             vertical: 'bottom',
// //                             horizontal: 'left',
// //                         }}
// //                         transformOrigin={{
// //                             vertical: 'top',
// //                             horizontal: 'left',
// //                         }}
// //                     >
// //                         <div className="p-4">
// //                             {/*<LocalizationProvider dateAdapter={AdapterDateFns}>*/}
// //                             {/*    <div className="flex flex-col space-y-4">*/}
// //                             {/*        <div>*/}
// //                             {/*            <Typography variant="subtitle2" className="mb-1">Start Date</Typography>*/}
// //                             {/*            {isMobile ? (*/}
// //                             {/*                <MobileDatePicker*/}
// //                             {/*                    value={startDate}*/}
// //                             {/*                    onChange={(newValue) => setStartDate(newValue)}*/}
// //                             {/*                    renderInput={(params) => <TextField {...params} fullWidth/>}*/}
// //                             {/*                />*/}
// //                             {/*            ) : (*/}
// //                             {/*                <DesktopDatePicker*/}
// //                             {/*                    value={startDate}*/}
// //                             {/*                    onChange={(newValue) => setStartDate(newValue)}*/}
// //                             {/*                    renderInput={(params) => <TextField {...params} fullWidth/>}*/}
// //                             {/*                />*/}
// //                             {/*            )}*/}
// //                             {/*        </div>*/}
// //                             {/*        <div>*/}
// //                             {/*            <Typography variant="subtitle2" className="mb-1">End Date</Typography>*/}
// //                             {/*            {isMobile ? (*/}
// //                             {/*                <MobileDatePicker*/}
// //                             {/*                    value={endDate}*/}
// //                             {/*                    onChange={(newValue) => setEndDate(newValue)}*/}
// //                             {/*                    renderInput={(params) => <TextField {...params} fullWidth/>}*/}
// //                             {/*                    minDate={startDate || undefined}*/}
// //                             {/*                />*/}
// //                             {/*            ) : (*/}
// //                             {/*                <DesktopDatePicker*/}
// //                             {/*                    value={endDate}*/}
// //                             {/*                    onChange={(newValue) => setEndDate(newValue)}*/}
// //                             {/*                    renderInput={(params) => <TextField {...params} fullWidth/>}*/}
// //                             {/*                    minDate={startDate || undefined}*/}
// //                             {/*                />*/}
// //                             {/*            )}*/}
// //                             {/*        </div>*/}
// //                             {/*    </div>*/}
// //                             {/*</LocalizationProvider>*/}
// //                             <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                                 <div className="flex flex-col space-y-4">
// //                                     <div>
// //                                         <Typography variant="subtitle2" className="mb-1">
// //                                             Start Date
// //                                         </Typography>
// //                                         {isMobile ? (
// //                                             <MobileDatePicker
// //                                                 value={startDate}
// //                                                 onChange={(newValue) => setStartDate(newValue)}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true},
// //                                                 }}
// //                                             />
// //                                         ) : (
// //                                             <DesktopDatePicker
// //                                                 value={startDate}
// //                                                 onChange={(newValue) => setStartDate(newValue)}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true},
// //                                                 }}
// //                                             />
// //                                         )}
// //                                     </div>
// //                                     <div>
// //                                         <Typography variant="subtitle2" className="mb-1">
// //                                             End Date
// //                                         </Typography>
// //                                         {isMobile ? (
// //                                             <MobileDatePicker
// //                                                 value={endDate}
// //                                                 onChange={(newValue) => setEndDate(newValue)}
// //                                                 minDate={startDate || undefined}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true},
// //                                                 }}
// //                                             />
// //                                         ) : (
// //                                             <DesktopDatePicker
// //                                                 value={endDate}
// //                                                 onChange={(newValue) => setEndDate(newValue)}
// //                                                 minDate={startDate || undefined}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true},
// //                                                 }}
// //                                             />
// //                                         )}
// //                                     </div>
// //                                 </div>
// //                             </LocalizationProvider>
// //                             <div className="mt-4 flex justify-end">
// //                                 <Button
// //                                     variant="contained"
// //                                     onClick={handleDateClose}
// //                                     className="bg-blue-600 hover:bg-blue-700"
// //                                 >
// //                                     Apply
// //                                 </Button>
// //                             </div>
// //                         </div>
// //                     </Popover>
// //                 </div>
// //
// //                 {/* Artist Selector */}
// //                 <div className={getColumnClass()}>
// //                     <Autocomplete
// //                         options={artists}
// //                         getOptionLabel={(option) => option.name}
// //                         value={selectedArtist}
// //                         onChange={(_, newValue) => setSelectedArtist(newValue)}
// //                         renderInput={(params) => (
// //                             <TextField
// //                                 {...params}
// //                                 placeholder="Artist Name"
// //                                 fullWidth
// //                                 label="Artist Name"
// //                                 className="bg-white"
// //                                 sx={{
// //                                     '& .MuiOutlinedInput-root': {
// //                                         height: '56px',
// //                                         '& fieldset': {
// //                                             borderColor: 'rgb(209, 213, 219)',
// //                                         },
// //                                         '&:hover fieldset': {
// //                                             borderColor: 'rgb(59, 130, 246)',
// //                                         },
// //                                     },
// //                                 }}
// //                             />
// //                         )}
// //                     />
// //                 </div>
// //
// //                 {/* Location Selector */}
// //                 <div className={getColumnClass()}>
// //                     <Autocomplete
// //                         options={locations}
// //                         getOptionLabel={(option) => option.name}
// //                         value={selectedLocation}
// //                         onChange={(_, newValue) => setSelectedLocation(newValue)}
// //                         renderInput={(params) => (
// //                             <TextField
// //                                 {...params}
// //                                 placeholder="Location"
// //                                 label="Location"
// //                                 fullWidth
// //                                 className="bg-white"
// //                                 sx={{
// //                                     '& .MuiOutlinedInput-root': {
// //                                         height: '56px',
// //                                         '& fieldset': {
// //                                             borderColor: 'rgb(209, 213, 219)',
// //                                         },
// //                                         '&:hover fieldset': {
// //                                             borderColor: 'rgb(59, 130, 246)',
// //                                         },
// //                                     },
// //                                 }}
// //                             />
// //                         )}
// //                     />
// //                 </div>
// //
// //                 {/* Price Range Selector */}
// //                 <div className={getColumnClass()}>
// //                     <button
// //                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onClick={handlePriceClick}
// //                     >
// //                         <span>{getFormattedPriceRange()}</span>
// //                         <KeyboardArrowDownIcon className="text-gray-500"/>
// //                     </button>
// //                     <Popover
// //                         open={priceOpen}
// //                         anchorEl={priceAnchorEl}
// //                         onClose={handlePriceClose}
// //                         anchorOrigin={{
// //                             vertical: 'bottom',
// //                             horizontal: 'left',
// //                         }}
// //                         transformOrigin={{
// //                             vertical: 'top',
// //                             horizontal: 'left',
// //                         }}
// //                     >
// //                         <div className="p-4 w-72">
// //                             <Slider
// //                                 value={priceRange}
// //                                 onChange={(_, newValue) => setPriceRange(newValue as number[])}
// //                                 valueLabelDisplay="auto"
// //                                 valueLabelFormat={(value) => `LKR ${value}`}
// //                                 min={500}
// //                                 max={15000}
// //                                 step={100}
// //                                 className="mt-6 mb-4"
// //                             />
// //                             <div className="flex justify-between mt-2">
// //                                 <TextField
// //                                     label="Min"
// //                                     value={priceRange[0]}
// //                                     onChange={(e) => {
// //                                         const value = parseInt(e.target.value);
// //                                         if (!isNaN(value) && value >= 500 && value < priceRange[1]) {
// //                                             setPriceRange([value, priceRange[1]]);
// //                                         }
// //                                     }}
// //                                     InputProps={{
// //                                         startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
// //                                     }}
// //                                     size="small"
// //                                     className="w-28"
// //                                 />
// //                                 <TextField
// //                                     label="Max"
// //                                     value={priceRange[1]}
// //                                     onChange={(e) => {
// //                                         const value = parseInt(e.target.value);
// //                                         if (!isNaN(value) && value <= 15000 && value > priceRange[0]) {
// //                                             setPriceRange([priceRange[0], value]);
// //                                         }
// //                                     }}
// //                                     InputProps={{
// //                                         startAdornment: <InputAdornment position="start">LKR</InputAdornment>,
// //                                     }}
// //                                     size="small"
// //                                     className="w-28"
// //                                 />
// //                             </div>
// //                             <div className="mt-4 flex justify-end">
// //                                 <Button
// //                                     variant="contained"
// //                                     onClick={handlePriceClose}
// //                                     className="bg-blue-600 hover:bg-blue-700"
// //                                 >
// //                                     Apply
// //                                 </Button>
// //                             </div>
// //                         </div>
// //                     </Popover>
// //                 </div>
// //
// //                 {/* Search Button */}
// //                 <div className={isMobile || isTablet ? 'w-full mt-2' : 'ml-1'}>
// //                     <Button
// //                         variant="contained"
// //                         startIcon={<SearchIcon/>}
// //                         onClick={handleSearch}
// //                         fullWidth={isMobile || isTablet}
// //                         className="bg-indigo-700 hover:bg-indigo-800 h-14"
// //                         sx={{
// //                             height: '56px',
// //                             minWidth: isDesktop ? '56px' : 'auto',
// //                             backgroundColor: 'rgb(67, 56, 202)',
// //                             '&:hover': {
// //                                 backgroundColor: 'rgb(55, 48, 163)',
// //                             },
// //                         }}
// //                     >
// //                         {isMobile ? 'Search' : ''}
// //                     </Button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default EventFilter;
//
// // import React, {useState} from 'react';
// // import {
// //     TextField,
// //     Autocomplete,
// //     Button,
// //     InputAdornment,
// //     Slider,
// //     Popover,
// //     useMediaQuery,
// // } from '@mui/material';
// // import {MobileDatePicker, DesktopDatePicker} from '@mui/x-date-pickers';
// // import { DateRangePicker } from '@mui/x-date-pickers-pro';
// // import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// // import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// // import SearchIcon from '@mui/icons-material/Search';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import {useTheme} from '@mui/material/styles';
// // import {locations, artists} from "@/lib/data"
// //
// // // Types
// // interface Artist {
// //     id: number;
// //     name: string;
// // }
// //
// // interface Location {
// //     id: number;
// //     name: string;
// // }
// //
// // interface EventFilterProps {
// //     onFilterChange: (filters: EventFilters) => void;
// //     className?: string;
// // }
// //
// // interface EventFilters {
// //     startDate: Date | null;
// //     endDate: Date | null;
// //     artist: Artist | null;
// //     location: Location | null;
// //     priceRange: number[];
// // }
// //
// //
// // const EventFilter: React.FC<EventFilterProps> = ({onFilterChange, className}) => {
// //     const theme = useTheme();
// //     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //     const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
// //     const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
// //
// //     // States for filters
// //     const [startDate, setStartDate] = useState<Date | null>(new Date());
// //     const [endDate, setEndDate] = useState<Date | null>(
// //         new Date(new Date().setDate(new Date().getDate() + 7))
// //     );
// //     const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
// //     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
// //     const [priceRange, setPriceRange] = useState<number[]>([1000, 10000]);
// //
// //     // Date picker popover state
// //     const [dateAnchorEl, setDateAnchorEl] = useState<HTMLButtonElement | null>(null);
// //     const [priceAnchorEl, setPriceAnchorEl] = useState<HTMLButtonElement | null>(null);
// //
// //     // Format date range for display
// //     const getFormattedDateRange = () => {
// //         if (!startDate || !endDate) return 'Select dates';
// //         return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
// //     };
// //
// //     // Price range display
// //     const getFormattedPriceRange = () => {
// //         return `LKR ${priceRange[0]} - LKR ${priceRange[1]}`;
// //     };
// //
// //     // Handle search button click
// //     const handleSearch = () => {
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const handleDateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// //         setDateAnchorEl(event.currentTarget);
// //     };
// //
// //     const handleDateClose = () => {
// //         setDateAnchorEl(null);
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const handlePriceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// //         setPriceAnchorEl(event.currentTarget);
// //     };
// //
// //     const handlePriceClose = () => {
// //         setPriceAnchorEl(null);
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const dateOpen = Boolean(dateAnchorEl);
// //     const priceOpen = Boolean(priceAnchorEl);
// //
// //     // Calculate column widths based on screen size
// //     const getColumnClass = () => {
// //         if (isMobile) return 'w-full mb-2';
// //         if (isTablet) return 'w-1/2 px-1 mb-2';
// //         return 'flex-1 px-1';
// //     };
// //
// //     return (
// //         <div className={`bg-[#F4FCFF] rounded-2xl px-4 py-8 shadow-sm ${className}`}>
// //             <div className={`flex flex-wrap ${isDesktop ? 'flex-nowrap items-center' : ''}`}>
// //                 {/* Date Range Selector */}
// //                 <div className={getColumnClass()}>
// //                     <button
// //                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onClick={handleDateClick}
// //                     >
// //                         <div className="flex items-center">
// //                             <CalendarMonthIcon className="text-gray-500 mr-2"/>
// //                             <span>{getFormattedDateRange()}</span>
// //                         </div>
// //                         <KeyboardArrowDownIcon className="text-gray-500"/>
// //                     </button>
// //                     <Popover
// //                         open={dateOpen}
// //                         anchorEl={dateAnchorEl}
// //                         onClose={handleDateClose}
// //                         anchorOrigin={{
// //                             vertical: 'bottom',
// //                             horizontal: 'left',
// //                         }}
// //                         transformOrigin={{
// //                             vertical: 'top',
// //                             horizontal: 'left',
// //                         }}
// //                     >
// //                         <div className="p-4">
// //                             <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                                 <div className="flex flex-col space-y-4">
// //                                     <div>
// //                                         {isMobile ? (
// //                                             <MobileDatePicker
// //                                                 value={startDate}
// //                                                 onChange={(newValue) => setStartDate(newValue)}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true, label: 'Start Date'},
// //                                                 }}
// //                                             />
// //                                         ) : (
// //                                             <DesktopDatePicker
// //                                                 value={startDate}
// //                                                 onChange={(newValue) => setStartDate(newValue)}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true, label: 'Start Date'},
// //                                                 }}
// //                                             />
// //                                         )}
// //                                     </div>
// //                                     <div>
// //                                         {isMobile ? (
// //                                             <MobileDatePicker
// //                                                 value={endDate}
// //                                                 onChange={(newValue) => setEndDate(newValue)}
// //                                                 minDate={startDate || undefined}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true, label: 'End Date'},
// //                                                 }}
// //                                             />
// //                                         ) : (
// //                                             <DesktopDatePicker
// //                                                 value={endDate}
// //                                                 onChange={(newValue) => setEndDate(newValue)}
// //                                                 minDate={startDate || undefined}
// //                                                 slotProps={{
// //                                                     textField: {fullWidth: true, label: 'End Date'},
// //                                                 }}
// //                                             />
// //                                         )}
// //                                     </div>
// //                                 </div>
// //                             </LocalizationProvider>
// //                             <div className="mt-4 flex justify-end">
// //                                 <Button
// //                                     variant="contained"
// //                                     onClick={handleDateClose}
// //                                     className="bg-blue-600 hover:bg-blue-700"
// //                                 >
// //                                     Apply
// //                                 </Button>
// //                             </div>
// //                         </div>
// //                     </Popover>
// //                 </div>
// //
// //                 {/* Artist Selector */}
// //                 <div className={getColumnClass()}>
// //                     <Autocomplete
// //                         options={artists}
// //                         getOptionLabel={(option) => option.name}
// //                         value={selectedArtist}
// //                         onChange={(_, newValue) => setSelectedArtist(newValue)}
// //                         renderInput={(params) => (
// //                             <TextField
// //                                 {...params}
// //                                 placeholder="Artist Name"
// //                                 label="Artist Name"
// //                                 fullWidth
// //                                 className="bg-white"
// //                                 sx={{
// //                                     '& .MuiOutlinedInput-root': {
// //                                         height: '56px',
// //                                         '& fieldset': {
// //                                             borderColor: 'rgb(209, 213, 219)',
// //                                         },
// //                                         '&:hover fieldset': {
// //                                             borderColor: 'rgb(59, 130, 246)',
// //                                         },
// //                                     },
// //                                 }}
// //                             />
// //                         )}
// //                     />
// //                 </div>
// //
// //                 {/* Location Selector */}
// //                 <div className={getColumnClass()}>
// //                     <Autocomplete
// //                         options={locations}
// //                         getOptionLabel={(option) => option.name}
// //                         value={selectedLocation}
// //                         onChange={(_, newValue) => setSelectedLocation(newValue)}
// //                         renderInput={(params) => (
// //                             <TextField
// //                                 {...params}
// //                                 placeholder="Location"
// //                                 label="Location"
// //                                 className="bg-white"
// //                                 sx={{
// //                                     '& .MuiOutlinedInput-root': {
// //                                         height: '56px',
// //                                         '& fieldset': {
// //                                             borderColor: 'rgb(209, 213, 219)',
// //                                         },
// //                                         '&:hover fieldset': {
// //                                             borderColor: 'rgb(59, 130, 246)',
// //                                         },
// //                                     },
// //                                 }}
// //                             />
// //                         )}
// //                     />
// //                 </div>
// //
// //                 {/* Price Range Selector */}
// //                 <div className={getColumnClass()}>
// //                     <button
// //                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onClick={handlePriceClick}
// //                     >
// //                         <span>{getFormattedPriceRange()}</span>
// //                         <KeyboardArrowDownIcon className="text-gray-500"/>
// //                     </button>
// //                     <Popover
// //                         open={priceOpen}
// //                         anchorEl={priceAnchorEl}
// //                         onClose={handlePriceClose}
// //                         anchorOrigin={{
// //                             vertical: 'bottom',
// //                             horizontal: 'left',
// //                         }}
// //                         transformOrigin={{
// //                             vertical: 'top',
// //                             horizontal: 'left',
// //                         }}
// //                     >
// //                         <div className="p-4 w-72">
// //                             <Slider
// //                                 value={priceRange}
// //                                 onChange={(_, newValue) => setPriceRange(newValue as number[])}
// //                                 valueLabelDisplay="auto"
// //                                 valueLabelFormat={(value) => `LKR ${value}`}
// //                                 min={500}
// //                                 max={15000}
// //                                 step={100}
// //                                 className="mt-6 mb-4"
// //                             />
// //                             {/*<div className="flex justify-between mt-2">*/}
// //                             {/*    <TextField*/}
// //                             {/*        label="Min"*/}
// //                             {/*        value={priceRange[0]}*/}
// //                             {/*        onChange={(e) => {*/}
// //                             {/*            const value = parseInt(e.target.value);*/}
// //                             {/*            if (!isNaN(value) && value >= 500 && value < priceRange[1]) {*/}
// //                             {/*                setPriceRange([value, priceRange[1]]);*/}
// //                             {/*            }*/}
// //                             {/*        }}*/}
// //                             {/*        InputProps={{*/}
// //                             {/*            startAdornment: (*/}
// //                             {/*                <InputAdornment position="start">LKR</InputAdornment>*/}
// //                             {/*            ),*/}
// //                             {/*        }}*/}
// //                             {/*        size="small"*/}
// //                             {/*        className="w-28"*/}
// //                             {/*    />*/}
// //                             {/*    <TextField*/}
// //                             {/*        label="Max"*/}
// //                             {/*        value={priceRange[1]}*/}
// //                             {/*        onChange={(e) => {*/}
// //                             {/*            const value = parseInt(e.target.value);*/}
// //                             {/*            if (!isNaN(value) && value <= 15000 && value > priceRange[0]) {*/}
// //                             {/*                setPriceRange([priceRange[0], value]);*/}
// //                             {/*            }*/}
// //                             {/*        }}*/}
// //                             {/*        InputProps={{*/}
// //                             {/*            startAdornment: (*/}
// //                             {/*                <InputAdornment position="start">LKR</InputAdornment>*/}
// //                             {/*            ),*/}
// //                             {/*        }}*/}
// //                             {/*        size="small"*/}
// //                             {/*        className="w-28"*/}
// //                             {/*    />*/}
// //                             {/*</div>*/}
// //                             {/*<div className="mt-4 flex justify-end">*/}
// //                             {/*    <Button*/}
// //                             {/*        variant="contained"*/}
// //                             {/*        onClick={handlePriceClose}*/}
// //                             {/*        className="bg-blue-600 hover:bg-blue-700"*/}
// //                             {/*    >*/}
// //                             {/*        Apply*/}
// //                             {/*    </Button>*/}
// //                             {/*</div>*/}
// //                         </div>
// //                     </Popover>
// //                 </div>
// //
// //                 {/* Search Button */}
// //                 <div className={isMobile || isTablet ? 'w-full mt-2' : 'ml-1'}>
// //                     <Button
// //                         variant="contained"
// //                         startIcon={<SearchIcon/>}
// //                         onClick={handleSearch}
// //                         fullWidth={isMobile || isTablet}
// //                         className="bg-[#27337C] justify-center hover:bg-indigo-800 h-14"
// //                         sx={{
// //                             height: '56px',
// //                             minWidth: isDesktop ? '56px' : 'auto',
// //                             backgroundColor: 'rgb(67, 56, 202)',
// //                             '&:hover': {
// //                                 backgroundColor: 'rgb(55, 48, 163)',
// //                             },
// //                         }}
// //                     >
// //                         {isMobile ? 'Search' : ''}
// //                     </Button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default EventFilter;
//
// // import React, {useState} from 'react';
// // import {
// //     TextField,
// //     Autocomplete,
// //     Button,
// //     InputAdornment,
// //     Slider,
// //     Popover,
// //     useMediaQuery,
// // } from '@mui/material';
// // import {DateRangePicker} from '@mui/x-date-pickers-pro';
// // import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
// // import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// // import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// // import SearchIcon from '@mui/icons-material/Search';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import {useTheme} from '@mui/material/styles';
// // import {locations, artists} from "@/lib/data"
// //
// // // Types
// // interface Artist {
// //     id: number;
// //     name: string;
// // }
// //
// // interface Location {
// //     id: number;
// //     name: string;
// // }
// //
// // interface EventFilterProps {
// //     onFilterChange: (filters: EventFilters) => void;
// //     className?: string;
// // }
// //
// // interface EventFilters {
// //     startDate: Date | null;
// //     endDate: Date | null;
// //     artist: Artist | null;
// //     location: Location | null;
// //     priceRange: number[];
// // }
// //
// // const EventFilter: React.FC<EventFilterProps> = ({onFilterChange, className}) => {
// //     const theme = useTheme();
// //     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
// //     const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
// //     const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
// //
// //     // States for filters
// //     const [startDate, setStartDate] = useState<Date | null>(new Date());
// //     const [endDate, setEndDate] = useState<Date | null>(
// //         new Date(new Date().setDate(new Date().getDate() + 7))
// //     );
// //     const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
// //     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
// //     const [priceRange, setPriceRange] = useState<number[]>([1000, 10000]);
// //
// //     // Date picker popover state
// //     const [dateAnchorEl, setDateAnchorEl] = useState<HTMLButtonElement | null>(null);
// //     const [priceAnchorEl, setPriceAnchorEl] = useState<HTMLButtonElement | null>(null);
// //
// //     // Format date range for display
// //     const getFormattedDateRange = () => {
// //         if (!startDate || !endDate) return 'Select dates';
// //         return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
// //     };
// //
// //     // Price range display
// //     const getFormattedPriceRange = () => {
// //         return `LKR ${priceRange[0]} - LKR ${priceRange[1]}`;
// //     };
// //
// //     // Handle search button click
// //     const handleSearch = () => {
// //         onFilterChange({
// //             startDate,
// //             endDate
// //
// //             ,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const handleDateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// //         setDateAnchorEl(event.currentTarget);
// //     };
// //
// //     const handleDateClose = () => {
// //         setDateAnchorEl(null);
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const handlePriceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
// //         setPriceAnchorEl(event.currentTarget);
// //     };
// //
// //     const handlePriceClose = () => {
// //         setPriceAnchorEl(null);
// //         onFilterChange({
// //             startDate,
// //             endDate,
// //             artist: selectedArtist,
// //             location: selectedLocation,
// //             priceRange,
// //         });
// //     };
// //
// //     const dateOpen = Boolean(dateAnchorEl);
// //     const priceOpen = Boolean(priceAnchorEl);
// //
// //     // Calculate column widths based on screen size
// //     const getColumnClass = () => {
// //         if (isMobile) return 'w-full mb-2';
// //         if (isTablet) return 'w-1/2 px-1 mb-2';
// //         return 'flex-1 px-1';
// //     };
// //
// //     return (
// //         <div className={`bg-[#F4FCFF] rounded-2xl px-4 py-8 shadow-sm ${className}`}>
// //             <div className={`flex flex-wrap ${isDesktop ? 'flex-nowrap items-center' : ''}`}>
// //                 {/* Date Range Selector */}
// //                 <div className={getColumnClass()}>
// //                     <button
// //                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onClick={handleDateClick}
// //                     >
// //                         <div className="flex items-center">
// //                             <CalendarMonthIcon className="text-gray-500 mr-2"/>
// //                             <span>{getFormattedDateRange()}</span>
// //                         </div>
// //                         <KeyboardArrowDownIcon className="text-gray-500"/>
// //                     </button>
// //                     <Popover
// //                         open={dateOpen}
// //                         anchorEl={dateAnchorEl}
// //                         onClose={handleDateClose}
// //                         anchorOrigin={{
// //                             vertical: 'bottom',
// //                             horizontal: 'left',
// //                         }}
// //                         transformOrigin={{
// //                             vertical: 'top',
// //                             horizontal: 'left',
// //                         }}
// //                     >
// //                         <div className="p-4">
// //                             <LocalizationProvider dateAdapter={AdapterDateFns}>
// //                                 <DemoContainer components={['DateRangePicker']}>
// //                                     <DateRangePicker
// //                                         startText="Start Date"
// //                                         endText="End Date"
// //                                         value={[startDate, endDate]}
// //                                         onChange={(newValue) => {
// //                                             setStartDate(newValue[0]);
// //                                             setEndDate(newValue[1]);
// //                                         }}
// //                                         renderInput={(startProps, endProps) => (
// //                                             <>
// //                                                 <TextField {...startProps} fullWidth className="mb-4"/>
// //                                                 <TextField {...endProps} fullWidth/>
// //                                             </>
// //                                         )}
// //                                     />
// //                                 </DemoContainer>
// //                                 <div className="mt-4 flex justify-end">
// //                                     <Button
// //                                         variant="contained"
// //                                         onClick={handleDateClose}
// //                                         className="bg-blue-600 hover:bg-blue-700"
// //                                     >
// //                                         Apply
// //                                     </Button>
// //                                 </div>
// //                             </LocalizationProvider>
// //                         </div>
// //                     </Popover>
// //                 </div>
// //
// //                 {/* Artist Selector */}
// //                 <div className={getColumnClass()}>
// //                     <Autocomplete
// //                         options={artists}
// //                         getOptionLabel={(option) => option.name}
// //                         value={selectedArtist}
// //                         onChange={(_, newValue) => setSelectedArtist(newValue)}
// //                         renderInput={(params) => (
// //                             <TextField
// //                                 {...params}
// //                                 placeholder="Artist Name"
// //                                 label="Artist Name"
// //                                 fullWidth
// //                                 className="bg-white"
// //                                 sx={{
// //                                     '& .MuiOutlinedInput-root': {
// //                                         height: '56px',
// //                                         '& fieldset': {
// //                                             borderColor: 'rgb(209, 213, 219)',
// //                                         },
// //                                         '&:hover fieldset': {
// //                                             borderColor: 'rgb(59, 130, 246)',
// //                                         },
// //                                     },
// //                                 }}
// //                             />
// //                         )}
// //                     />
// //                 </div>
// //
// //                 {/* Location Selector */}
// //                 <div className={getColumnClass()}>
// //                     <Autocomplete
// //                         options={locations}
// //                         getOptionLabel={(option) => option.name}
// //                         value={selectedLocation}
// //                         onChange={(_, newValue) => setSelectedLocation(newValue)}
// //                         renderInput={(params) => (
// //                             <TextField
// //                                 {...params}
// //                                 placeholder="Location"
// //                                 label="Location"
// //                                 className="bg-white"
// //                                 sx={{
// //                                     '& .MuiOutlinedInput-root': {
// //                                         height: '56px',
// //                                         '& fieldset': {
// //                                             borderColor: 'rgb(209, 213, 219)',
// //                                         },
// //                                         '&:hover fieldset': {
// //                                             borderColor: 'rgb(59, 130, 246)',
// //                                         },
// //                                     },
// //                                 }}
// //                             />
// //                         )}
// //                     />
// //                 </div>
// //
// //                 {/* Price Range Selector */}
// //                 <div className={getColumnClass()}>
// //                     <button
// //                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //                         onClick={handlePriceClick}
// //                     >
// //                         <span>{getFormattedPriceRange()}</span>
// //                         <KeyboardArrowDownIcon className="text-gray-500"/>
// //                     </button>
// //                     <Popover
// //                         open={priceOpen}
// //                         anchorEl={priceAnchorEl}
// //                         onClose={handlePriceClose}
// //                         anchorOrigin={{
// //                             vertical: 'bottom',
// //                             horizontal: 'left',
// //                         }}
// //                         transformOrigin={{
// //                             vertical: 'top',
// //                             horizontal: 'left',
// //                         }}
// //                     >
// //                         <div className="p-4 w-72">
// //                             <Slider
// //                                 value={priceRange}
// //                                 onChange={(_, newValue) => setPriceRange(newValue as number[])}
// //                                 valueLabelDisplay="auto"
// //                                 valueLabelFormat={(value) => `LKR ${value}`}
// //                                 min={500}
// //                                 max={15000}
// //                                 step={100}
// //                                 className="mt-6 mb-4"
// //                             />
// //                             <div className="flex justify-between mt-2">
// //                                 <TextField
// //                                     label="Min"
// //                                     value={priceRange[0]}
// //                                     onChange={(e) => {
// //                                         const value = parseInt(e.target.value);
// //                                         if (!isNaN(value) && value >= 500 && value < priceRange[1]) {
// //                                             setPriceRange([value, priceRange[1]]);
// //                                         }
// //                                     }}
// //                                     InputProps={{
// //                                         startAdornment: (
// //                                             <InputAdornment position="start">LKR</InputAdornment>
// //                                         ),
// //                                     }}
// //                                     size="small"
// //                                     className="w-28"
// //                                 />
// //                                 <TextField
// //                                     label="Max"
// //                                     value={priceRange[1]}
// //                                     onChange={(e) => {
// //                                         const value = parseInt(e.target.value);
// //                                         if (!isNaN(value) && value <= 15000 && value > priceRange[0]) {
// //                                             setPriceRange([priceRange[0], value]);
// //                                         }
// //                                     }}
// //                                     InputProps={{
// //                                         startAdornment: (
// //                                             <InputAdornment position="start">LKR</InputAdornment>
// //                                         ),
// //                                     }}
// //                                     size="small"
// //                                     className="w-28"
// //                                 />
// //                             </div>
// //                             <div className="mt-4 flex justify-end">
// //                                 <Button
// //                                     variant="contained"
// //                                     onClick={handlePriceClose}
// //                                     className="bg-blue-600 hover:bg-blue-700"
// //                                 >
// //                                     Apply
// //                                 </Button>
// //                             </div>
// //                         </div>
// //                     </Popover>
// //                 </div>
// //
// //                 {/* Search Button */}
// //                 <div className={isMobile || isTablet ? 'w-full mt-2' : 'ml-1'}>
// //                     <Button
// //                         variant="contained"
// //                         startIcon={<SearchIcon/>}
// //                         onClick={handleSearch}
// //                         fullWidth={isMobile || isTablet}
// //                         className="bg-[#27337C] justify-center hover:bg-indigo-800 h-14"
// //                         sx={{
// //                             height: '56px',
// //                             minWidth: isDesktop ? '56px' : 'auto',
// //                             backgroundColor: 'rgb(67, 56, 202)',
// //                             '&:hover': {
// //                                 backgroundColor: 'rgb(55, 48, 163)',
// //                             },
// //                         }}
// //                     >
// //                         {isMobile ? 'Search' : ''}
// //                     </Button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default EventFilter;
//
// import React, {useState} from 'react';
// import {
//     TextField,
//     Autocomplete,
//     Button,
//     InputAdornment,
//     Slider,
//     Popover,
//     useMediaQuery,
// } from '@mui/material';
// // import {DateRange, Range} from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // Main style file
// import 'react-date-range/dist/theme/default.css'; // Theme css file
// import SearchIcon from '@mui/icons-material/Search';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import {useTheme} from '@mui/material/styles';
// import {locations, artists} from "@/lib/data";
//
// // Types
// interface Artist {
//     id: number;
//     name: string;
// }
//
// interface Location {
//     id: number;
//     name: string;
// }
//
// interface EventFilterProps {
//     onFilterChange: (filters: EventFilters) => void;
//     className?: string;
// }
//
// interface EventFilters {
//     startDate: Date | null;
//     endDate: Date | null;
//     artist: Artist | null;
//     location: Location | null;
//     priceRange: number[];
// }
//
// const EventFilter: React.FC<EventFilterProps> = ({onFilterChange, className}) => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//     const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//     const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
//
//     // States for filters
//     const [dateRange, setDateRange] = useState<Range[]>([
//         {
//             startDate: new Date(),
//             endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
//             key: 'selection',
//         },
//     ]);
//     const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [priceRange, setPriceRange] = useState<number[]>([1000, 10000]);
//
//     // Date picker popover state
//     const [dateAnchorEl, setDateAnchorEl] = useState<HTMLButtonElement | null>(null);
//     const [priceAnchorEl, setPriceAnchorEl] = useState<HTMLButtonElement | null>(null);
//
//     // Format date range for display
//     const getFormattedDateRange = () => {
//         const startDate = dateRange[0].startDate;
//         const endDate = dateRange[0].endDate;
//         if (!startDate || !endDate) return 'Select dates';
//         return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
//     };
//
//     // Price range display
//     const getFormattedPriceRange = () => {
//         return `LKR ${priceRange[0]} - LKR ${priceRange[1]}`;
//     };
//
//     // Handle search button click
//     const handleSearch = () => {
//         onFilterChange({
//             startDate: dateRange[0].startDate || null,
//             endDate: dateRange[0].endDate || null,
//             artist: selectedArtist,
//             location: selectedLocation,
//             priceRange,
//         });
//     };
//
//     const handleDateClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setDateAnchorEl(event.currentTarget);
//     };
//
//     const handleDateClose = () => {
//         setDateAnchorEl(null);
//         onFilterChange({
//             startDate: dateRange[0].startDate || null,
//             endDate: dateRange[0].endDate || null,
//             artist: selectedArtist,
//             location: selectedLocation,
//             priceRange,
//         });
//     };
//
//     const handlePriceClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//         setPriceAnchorEl(event.currentTarget);
//     };
//
//     const handlePriceClose = () => {
//         setPriceAnchorEl(null);
//         onFilterChange({
//             startDate: dateRange[0].startDate || null,
//             endDate: dateRange[0].endDate || null,
//             artist: selectedArtist,
//             location: selectedLocation,
//             priceRange,
//         });
//     };
//
//     const dateOpen = Boolean(dateAnchorEl);
//     const priceOpen = Boolean(priceAnchorEl);
//
//     // Calculate column widths based on screen size
//     const getColumnClass = () => {
//         if (isMobile) return 'w-full mb-2';
//         if (isTablet) return 'w-1/2 px-1 mb-2';
//         return 'flex-1 px-1';
//     };
//
//     // const MIN = 1000;
//     // const MAX = 10000;
//     // const marks = [
//     //     {
//     //         value: MIN,
//     //         label: 'LKR 1000',
//     //     },
//     //     {
//     //         value: MAX,
//     //         label: 'LKR 10000',
//     //     },
//     // ];
//
//
//     return (
//         <div className={`bg-[#F4FCFF] rounded-2xl px-4 py-8 shadow-sm ${className}`}>
//             <div className={`flex flex-wrap ${isDesktop ? 'flex-nowrap items-center' : ''}`}>
//                 <div className={getColumnClass()}>
//                     <TextField
//                         id="date-range"
//                         label="Date"
//                         variant="outlined"
//                         value={getFormattedDateRange()}
//                         // onClick={handleDateClick}
//                         fullWidth
//                         className="bg-white"
//                         InputProps={{
//                             readOnly: true,
//                             endAdornment: (
//                                 <InputAdornment position="end">
//                                     <CalendarMonthIcon className="text-[#27337C]"/>
//                                 </InputAdornment>
//                             ),
//                         }}
//                         sx={{
//                             '& .MuiOutlinedInput-root': {
//                                 height: '56px',
//                                 '& fieldset': {
//                                     borderColor: 'rgb(209, 213, 219)',
//                                 },
//                                 '&:hover fieldset': {
//                                     borderColor: 'rgb(59, 130, 246)',
//                                 },
//                                 '&.Mui-focused fieldset': {
//                                     borderColor: 'rgb(59, 130, 246)',
//                                 },
//                             },
//                         }}
//                     />
//                     <Popover
//                         open={dateOpen}
//                         anchorEl={dateAnchorEl}
//                         onClose={handleDateClose}
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'left',
//                         }}
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'left',
//                         }}
//                     >
//                         <div className="p-4">
//                             {/*<DateRange*/}
//                             {/*    editableDateInputs={false}*/}
//                             {/*    showMonthAndYearPickers={false}*/}
//                             {/*    onChange={(item) => setDateRange([item.selection])}*/}
//                             {/*    moveRangeOnFirstSelection={false}*/}
//                             {/*    ranges={dateRange}*/}
//                             {/*    months={isMobile ? 1 : 2}*/}
//                             {/*    direction="horizontal"*/}
//                             {/*    className="rounded-md"*/}
//                             {/*/>*/}
//                             <div className="mt-4 flex justify-end">
//                                 <Button
//                                     variant="contained"
//                                     onClick={handleDateClose}
//                                     className="bg-[#27337C] hover:bg-blue-700"
//                                 >
//                                     Apply
//                                 </Button>
//                             </div>
//                         </div>
//                     </Popover>
//                 </div>
//
//
//                 {/* Artist Selector */}
//                 <div className={getColumnClass()}>
//                     <Autocomplete
//                         options={artists}
//                         getOptionLabel={(option) => option.name}
//                         value={selectedArtist}
//                         onChange={(_, newValue) => setSelectedArtist(newValue)}
//                         renderInput={(params) => (
//                             <TextField
//                                 {...params}
//                                 placeholder="Artist Name"
//                                 label="Artist Name"
//                                 fullWidth
//                                 className="bg-white"
//                                 sx={{
//                                     '& .MuiOutlinedInput-root': {
//                                         height: '56px',
//                                         '& fieldset': {
//                                             borderColor: 'rgb(209, 213, 219)',
//                                         },
//                                         '&:hover fieldset': {
//                                             borderColor: 'rgb(59, 130, 246)',
//                                         },
//                                     },
//                                 }}
//                             />
//                         )}
//                     />
//                 </div>
//
//                 {/* Location Selector */}
//                 <div className={getColumnClass()}>
//                     <Autocomplete
//                         options={locations}
//                         getOptionLabel={(option) => option.name}
//                         value={selectedLocation}
//                         onChange={(_, newValue) => setSelectedLocation(newValue)}
//                         renderInput={(params) => (
//                             <TextField
//                                 {...params}
//                                 placeholder="Location"
//                                 label="Location"
//                                 className="bg-white"
//                                 sx={{
//                                     '& .MuiOutlinedInput-root': {
//                                         height: '56px',
//                                         '& fieldset': {
//                                             borderColor: 'rgb(209, 213, 219)',
//                                         },
//                                         '&:hover fieldset': {
//                                             borderColor: 'rgb(59, 130, 246)',
//                                         },
//                                     },
//                                 }}
//                             />
//                         )}
//                     />
//                 </div>
//
//                 {/* Price Range Selector */}
//                 {/*<div className={getColumnClass()}>*/}
//                 {/*    <button*/}
//                 {/*        className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
//                 {/*        onClick={handlePriceClick}*/}
//                 {/*    >*/}
//                 {/*        <span>{getFormattedPriceRange()}</span>*/}
//                 {/*        <KeyboardArrowDownIcon className="text-gray-500"/>*/}
//                 {/*    </button>*/}
//
//                 {/*    <TextField*/}
//                 {/*        id="date-range"*/}
//                 {/*        label="Date"*/}
//                 {/*        variant="outlined"*/}
//                 {/*        value={getFormattedDateRange()}*/}
//                 {/*        onClick={handleDateClick}*/}
//                 {/*        fullWidth*/}
//                 {/*        className="bg-white"*/}
//                 {/*        InputProps={{*/}
//                 {/*            readOnly: true,*/}
//                 {/*            // endAdornment: (*/}
//                 {/*            //     <InputAdornment position="end">*/}
//                 {/*            //         <CalendarMonthIcon className="text-[#27337C]"/>*/}
//                 {/*            //     </InputAdornment>*/}
//                 {/*            // ),*/}
//                 {/*        }}*/}
//                 {/*        sx={{*/}
//                 {/*            '& .MuiOutlinedInput-root': {*/}
//                 {/*                height: '56px',*/}
//                 {/*                '& fieldset': {*/}
//                 {/*                    borderColor: 'rgb(209, 213, 219)',*/}
//                 {/*                },*/}
//                 {/*                '&:hover fieldset': {*/}
//                 {/*                    borderColor: 'rgb(59, 130, 246)',*/}
//                 {/*                },*/}
//                 {/*                '&.Mui-focused fieldset': {*/}
//                 {/*                    borderColor: 'rgb(59, 130, 246)',*/}
//                 {/*                },*/}
//                 {/*            },*/}
//                 {/*        }}*/}
//                 {/*    />*/}
//
//
//                 {/*    <Slider*/}
//                 {/*        value={priceRange}*/}
//                 {/*        onChange={(_, newValue) => setPriceRange(newValue as number[])}*/}
//                 {/*        valueLabelDisplay="auto"*/}
//                 {/*        valueLabelFormat={(value) => `LKR ${value}`}*/}
//                 {/*        min={500}*/}
//                 {/*        max={15000}*/}
//                 {/*        step={100}*/}
//                 {/*        className="mt-6 mb-4"*/}
//                 {/*    />*/}
//
//                 {/*    <Popover*/}
//                 {/*        open={priceOpen}*/}
//                 {/*        anchorEl={priceAnchorEl}*/}
//                 {/*        onClose={handlePriceClose}*/}
//                 {/*        anchorOrigin={{*/}
//                 {/*            vertical: 'bottom',*/}
//                 {/*            horizontal: 'left',*/}
//                 {/*        }}*/}
//                 {/*        transformOrigin={{*/}
//                 {/*            vertical: 'top',*/}
//                 {/*            horizontal: 'left',*/}
//                 {/*        }}*/}
//                 {/*    >*/}
//                 {/*        <div className="p-4 w-72">*/}
//                 {/*            /!*<div className="flex justify-between mt-2">*!/*/}
//                 {/*            /!*    <TextField*!/*/}
//                 {/*            /!*        label="Min"*!/*/}
//                 {/*            /!*        value={priceRange[0]}*!/*/}
//                 {/*            /!*        onChange={(e) => {*!/*/}
//                 {/*            /!*            const value = parseInt(e.target.value);*!/*/}
//                 {/*            /!*            if (!isNaN(value) && value >= 500 && value < priceRange[1]) {*!/*/}
//                 {/*            /!*                setPriceRange([value, priceRange[1]]);*!/*/}
//                 {/*            /!*            }*!/*/}
//                 {/*            /!*        }}*!/*/}
//                 {/*            /!*        InputProps={{*!/*/}
//                 {/*            /!*            startAdornment: (*!/*/}
//                 {/*            /!*                <InputAdornment position="start">LKR</InputAdornment>*!/*/}
//                 {/*            /!*            ),*!/*/}
//                 {/*            /!*        }}*!/*/}
//                 {/*            /!*        size="small"*!/*/}
//                 {/*            /!*        className="w-28"*!/*/}
//                 {/*            /!*    />*!/*/}
//                 {/*            /!*    <TextField*!/*/}
//                 {/*            /!*        label="Max"*!/*/}
//                 {/*            /!*        value={priceRange[1]}*!/*/}
//                 {/*            /!*        onChange={(e) => {*!/*/}
//                 {/*            /!*            const value = parseInt(e.target.value);*!/*/}
//                 {/*            /!*            if (!isNaN(value) && value <= 15000 && value > priceRange[0]) {*!/*/}
//                 {/*            /!*                setPriceRange([priceRange[0], value]);*!/*/}
//                 {/*            /!*            }*!/*/}
//                 {/*            /!*        }}*!/*/}
//                 {/*            /!*        InputProps={{*!/*/}
//                 {/*            /!*            startAdornment: (*!/*/}
//                 {/*            /!*                <InputAdornment position="start">LKR</InputAdornment>*!/*/}
//                 {/*            /!*            ),*!/*/}
//                 {/*            /!*        }}*!/*/}
//                 {/*            /!*        size="small"*!/*/}
//                 {/*            /!*        className="w-28"*!/*/}
//                 {/*            /!*    />*!/*/}
//                 {/*            /!*</div>*!/*/}
//                 {/*            <div className="mt-4 flex justify-end">*/}
//                 {/*                <Button*/}
//                 {/*                    variant="contained"*/}
//                 {/*                    onClick={handlePriceClose}*/}
//                 {/*                    className="bg-blue-600 hover:bg-blue-700"*/}
//                 {/*                >*/}
//                 {/*                    Apply*/}
//                 {/*                </Button>*/}
//                 {/*            </div>*/}
//                 {/*        </div>*/}
//                 {/*    </Popover>*/}
//                 {/*</div>*/}
//
//                 <div className={getColumnClass()}>
//                     <button
//                         className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         onClick={handlePriceClick}
//                     >
//                         <span>{getFormattedPriceRange()}</span>
//                         <KeyboardArrowDownIcon className="text-gray-500"/>
//                     </button>
//                     <Popover
//                         open={priceOpen}
//                         anchorEl={priceAnchorEl}
//                         onClose={handlePriceClose}
//                         anchorOrigin={{
//                             vertical: 'bottom',
//                             horizontal: 'left',
//                         }}
//                         transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'left',
//                         }}
//                     >
//                         <div className="p-4 w-72">
//                             <Slider
//                                 value={priceRange}
//                                 onChange={(_, newValue) => setPriceRange(newValue as number[])}
//                                 valueLabelDisplay="auto"
//                                 valueLabelFormat={(value) => `LKR ${value}`}
//                                 min={500}
//                                 max={15000}
//                                 step={100}
//                                 className="mt-6 mb-4"
//                             />
//                             <div className="flex justify-between mt-2">
//                                 <TextField
//                                     label="Min"
//                                     value={priceRange[0]}
//                                     onChange={(e) => {
//                                         const value = parseInt(e.target.value);
//                                         if (!isNaN(value) && value >= 500 && value < priceRange[1]) {
//                                             setPriceRange([value, priceRange[1]]);
//                                         }
//                                     }}
//                                     InputProps={{
//                                         startAdornment: (
//                                             <InputAdornment position="start">LKR</InputAdornment>
//                                         ),
//                                     }}
//                                     size="small"
//                                     className="w-28"
//                                 />
//                                 <TextField
//                                     label="Max"
//                                     value={priceRange[1]}
//                                     onChange={(e) => {
//                                         const value = parseInt(e.target.value);
//                                         if (!isNaN(value) && value <= 15000 && value > priceRange[0]) {
//                                             setPriceRange([priceRange[0], value]);
//                                         }
//                                     }}
//                                     InputProps={{
//                                         startAdornment: (
//                                             <InputAdornment position="start">LKR</InputAdornment>
//                                         ),
//                                     }}
//                                     size="small"
//                                     className="w-28"
//                                 />
//                             </div>
//                             <div className="mt-4 flex justify-end">
//                                 <Button
//                                     variant="contained"
//                                     onClick={handlePriceClose}
//                                     className="bg-blue-600 hover:bg-blue-700"
//                                 >
//                                     Apply
//                                 </Button>
//                             </div>
//                         </div>
//                     </Popover>
//                 </div>
//
//                 {/*<div className={getColumnClass()}>*/}
//                 {/*    /!*<button*!/*/}
//                 {/*    /!*    className="w-full h-14 bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"*!/*/}
//                 {/*    /!*    onClick={handlePriceClick}*!/*/}
//                 {/*    /!*>*!/*/}
//                 {/*    /!*    <span>{getFormattedPriceRange()}</span>*!/*/}
//                 {/*    /!*    <KeyboardArrowDownIcon className="text-gray-500"/>*!/*/}
//                 {/*    /!*</button>*!/*/}
//                 {/*    <div className="px-1 w-72 bg-white border border-gray-300 rounded-md mt-1">*/}
//                 {/*        <Slider*/}
//                 {/*            value={priceRange}*/}
//                 {/*            onChange={(_, newValue) => setPriceRange(newValue)}*/}
//                 {/*            valueLabelDisplay="auto"*/}
//                 {/*            valueLabelFormat={(value) => `LKR ${value}`}*/}
//                 {/*            min={500}*/}
//                 {/*            max={15000}*/}
//                 {/*            step={100}*/}
//                 {/*            className="my-6"*/}
//                 {/*        />*/}
//                 {/*        /!*<div className="flex justify-between mt-2">*!/*/}
//                 {/*        /!*    <TextField*!/*/}
//                 {/*        /!*        label="Min"*!/*/}
//                 {/*        /!*        value={priceRange[0]}*!/*/}
//                 {/*        /!*        onChange={(e) => {*!/*/}
//                 {/*        /!*            const value = parseInt(e.target.value);*!/*/}
//                 {/*        /!*            if (!isNaN(value) && value >= 500 && value < priceRange[1]) {*!/*/}
//                 {/*        /!*                setPriceRange([value, priceRange[1]]);*!/*/}
//                 {/*        /!*            }*!/*/}
//                 {/*        /!*        }}*!/*/}
//                 {/*        /!*        InputProps={{*!/*/}
//                 {/*        /!*            startAdornment: (*!/*/}
//                 {/*        /!*                <InputAdornment position="start">LKR</InputAdornment>*!/*/}
//                 {/*        /!*            ),*!/*/}
//                 {/*        /!*        }}*!/*/}
//                 {/*        /!*        size="small"*!/*/}
//                 {/*        /!*        className="w-28"*!/*/}
//                 {/*        /!*    />*!/*/}
//                 {/*        /!*    <TextField*!/*/}
//                 {/*        /!*        label="Max"*!/*/}
//                 {/*        /!*        value={priceRange[1]}*!/*/}
//                 {/*        /!*        onChange={(e) => {*!/*/}
//                 {/*        /!*            const value = parseInt(e.target.value);*!/*/}
//                 {/*        /!*            if (!isNaN(value) && value <= 15000 && value > priceRange[0]) {*!/*/}
//                 {/*        /!*                setPriceRange([priceRange[0], value]);*!/*/}
//                 {/*        /!*            }*!/*/}
//                 {/*        /!*        }}*!/*/}
//                 {/*        /!*        InputProps={{*!/*/}
//                 {/*        /!*            startAdornment: (*!/*/}
//                 {/*        /!*                <InputAdornment position="start">LKR</InputAdornment>*!/*/}
//                 {/*        /!*            ),*!/*/}
//                 {/*        /!*        }}*!/*/}
//                 {/*        /!*        size="small"*!/*/}
//                 {/*        /!*        className="w-28"*!/*/}
//                 {/*        /!*    />*!/*/}
//                 {/*        /!*</div>*!/*/}
//                 {/*    </div>*/}
//                 {/*</div>*/}
//
//
//                 {/*<div className={getColumnClass()}>*/}
//                 {/*    <TextField*/}
//                 {/*        id="price-range"*/}
//                 {/*        label="Price Range"*/}
//                 {/*        variant="outlined"*/}
//                 {/*        onClick={handlePriceClick}*/}
//                 {/*        value={*/}
//                 {/*            <Slider*/}
//                 {/*                marks={marks}*/}
//                 {/*                label="Price Range"*/}
//                 {/*                value={priceRange}*/}
//                 {/*                onChange={(_, newValue) => setPriceRange(newValue)}*/}
//                 {/*                valueLabelDisplay="auto"*/}
//                 {/*                valueLabelFormat={(value) => `LKR ${value}`}*/}
//                 {/*                min={1000}*/}
//                 {/*                max={10000}*/}
//                 {/*                step={100}*/}
//                 {/*                className="my-4 px-10"*/}
//                 {/*            />*/}
//                 {/*        }*/}
//                 {/*        fullWidth*/}
//                 {/*        className="bg-white"*/}
//                 {/*        InputProps={{*/}
//                 {/*            readOnly: true,*/}
//                 {/*            endAdornment: (*/}
//                 {/*                <InputAdornment position="end">*/}
//                 {/*                    <KeyboardArrowDownIcon className="text-[#27337C]"/>*/}
//                 {/*                </InputAdornment>*/}
//                 {/*            ),*/}
//                 {/*        }}*/}
//                 {/*        sx={{*/}
//                 {/*            '& .MuiOutlinedInput-root': {*/}
//                 {/*                height: '56px',*/}
//                 {/*                '& fieldset': {*/}
//                 {/*                    borderColor: 'rgb(209, 213, 219)',*/}
//                 {/*                },*/}
//                 {/*                '&:hover fieldset': {*/}
//                 {/*                    borderColor: 'rgb(59, 130, 246)',*/}
//                 {/*                },*/}
//                 {/*                '&.Mui-focused fieldset': {*/}
//                 {/*                    borderColor: 'rgb(59, 130, 246)',*/}
//                 {/*                },*/}
//                 {/*            },*/}
//                 {/*        }}*/}
//                 {/*    >*/}
//                 {/*    </TextField>*/}
//                 {/*    <div className="px-10 py-2 w-full bg-white border border-gray-300 rounded-md mt-1">*/}
//                 {/*        <Slider*/}
//                 {/*            marks={marks}*/}
//                 {/*            label="Price Range"*/}
//                 {/*            value={priceRange}*/}
//                 {/*            onChange={(_, newValue) => setPriceRange(newValue)}*/}
//                 {/*            valueLabelDisplay="auto"*/}
//                 {/*            valueLabelFormat={(value) => `LKR ${value}`}*/}
//                 {/*            min={1000}*/}
//                 {/*            max={10000}*/}
//                 {/*            step={100}*/}
//                 {/*            className="my-4 px-10"*/}
//                 {/*        />*/}
//                 {/*    </div>*/}
//                 {/*</div>*/}
//
//                 {/*<div className={getColumnClass()}>*/}
//                 {/*    <TextField*/}
//                 {/*        id="price-range"*/}
//                 {/*        label="Price Range"*/}
//                 {/*        variant="outlined"*/}
//                 {/*        value={getFormattedPriceRange()}*/}
//                 {/*        onClick={handlePriceClick}*/}
//                 {/*        fullWidth*/}
//                 {/*        className="bg-white"*/}
//                 {/*        InputProps={{*/}
//                 {/*            readOnly: true,*/}
//                 {/*            endAdornment: (*/}
//                 {/*                <InputAdornment position="end">*/}
//                 {/*                    <KeyboardArrowDownIcon className="text-[#27337C]"/>*/}
//                 {/*                </InputAdornment>*/}
//                 {/*            ),*/}
//                 {/*        }}*/}
//                 {/*        sx={{*/}
//                 {/*            '& .MuiOutlinedInput-root': {*/}
//                 {/*                height: '56px',*/}
//                 {/*                '& fieldset': {*/}
//                 {/*                    borderColor: 'rgb(209, 213, 219)',*/}
//                 {/*                },*/}
//                 {/*                '&:hover fieldset': {*/}
//                 {/*                    borderColor: 'rgb(59, 130, 246)',*/}
//                 {/*                },*/}
//                 {/*                '&.Mui-focused fieldset': {*/}
//                 {/*                    borderColor: 'rgb(59, 130, 246)',*/}
//                 {/*                },*/}
//                 {/*            },*/}
//                 {/*        }}*/}
//                 {/*    />*/}
//                 {/*    <Box sx={{*/}
//                 {/*        width: '100%',*/}
//                 {/*        px: 2,*/}
//                 {/*        py: 1,*/}
//                 {/*        border: '1px solid rgb(209, 213, 219)',*/}
//                 {/*        borderRadius: '4px',*/}
//                 {/*        mt: 1*/}
//                 {/*    }}>*/}
//                 {/*        <Slider*/}
//                 {/*            marks={marks}*/}
//                 {/*            step={100}*/}
//                 {/*            value={priceRange}*/}
//                 {/*            valueLabelDisplay="auto"*/}
//                 {/*            valueLabelFormat={(value) => `LKR ${value}`}*/}
//                 {/*            min={MIN}*/}
//                 {/*            max={MAX}*/}
//                 {/*            onChange={(_, newValue) => setPriceRange(newValue)}*/}
//                 {/*            sx={{mt: 4}}*/}
//                 {/*        />*/}
//                 {/*    </Box>*/}
//                 {/*</div>*/}
//
//                 {/* Search Button */}
//                 <div className={isMobile || isTablet ? 'w-full mt-2' : 'ml-1'}>
//                     <Button
//                         variant="contained"
//                         startIcon={<SearchIcon/>}
//                         onClick={handleSearch}
//                         fullWidth={isMobile || isTablet}
//                         className="bg-[#27337C] justify-center hover:bg-indigo-800 h-14"
//                         sx={{
//                             height: '56px',
//                             minWidth: isDesktop ? '56px' : 'auto',
//                             backgroundColor: 'rgb(67, 56, 202)',
//                             '&:hover': {
//                                 backgroundColor: 'rgb(55, 48, 163)',
//                             },
//                         }}
//                     >
//                         {isMobile ? 'Search' : ''}
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default EventFilter;