import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { MDBBtn } from 'mdbreact';

const DatatablePage = () => {
  
  const data = {
  
    columns: [
      {
        label: 'Service Name',
        field: 'service_name',
        sort: 'asc',
        width: 150
      },
    //   {
    //     label: 'Contact Details',
    //     field: 'contact_details',
    //     sort: 'asc',
    //     width: 270
    //   },
    //   {
    //     label: 'Know More',
    //     field: 'know_more',
    //     sort: 'asc',
    //     width: 200
    //   },
    //   {
    //     label: 'Know More',
    //     sort: 'asc',
    //     field: 'know_more1',
    //     width: 200
    //   },
    //   {
    //     label: 'Age',
    //     field: 'age',
    //     sort: 'asc',
    //     width: 100
    //   },
    //   {
    //     label: 'Start date',
    //     field: 'date',
    //     sort: 'asc',
    //     width: 150
    //   },
    //   {
    //     label: 'Salary',
    //     field: 'salary',
    //     sort: 'asc',
    //     width: 100
    //   }
    ],

    rows: [
      {
        service_name: 'PHOTOCOPY',
        // contact_details: '4524471288',
        // know_more: 'Tokyo',
        
        

      },
      {
        service_name: 'PRINTOUT',
        // contact_details: '4524471288',
        // know_more: 'Tokyo',
        
      },
      {
        service_name: 'LAMINATION',
        // contact_details: '4524471288',
        
      },
      {
        service_name: ' PASSPORT SIZE PHOTO',
        // contact_details: '4524471288',
        // know_more: 'Tokyo',
       
      },
      {
        service_name: ' PVC CARD',
      
        
      },
      {
        service_name: 'FLIGHT TICKET',
       
        
      },
      {
        service_name: ' BUS TICKET',
       
        
      },
      {
        service_name: 'HOTEL BOOKING',
        
        
      },
      {
        service_name: ' AADHAAR UPDATE',
   
        
      },
      {
        service_name: ' PAN CARD',
       
        
      },
      {
        service_name: ' DRIVING LICENSE',
       
      },
      {
        service_name: ' PASSPORT',
     
      },
      {
        service_name: 'VOTER ID CARD',
        
        
      },
      {
        service_name: ' ESHRAM Card',
      
      },
      {
        service_name: ' HEALTH ID CARD',
      
      },
      {
        service_name: ' BIRTH CERTIFICATE',
      
      },
      {
        service_name: 'INCOME CERTIFICATE',
      
      },
      {
        service_name: ' CAST CERTIFICATE',
      
      },
      {
        service_name: 'DOMICILE CERTIFICATE',
      
      },
      {
        service_name: ' JEEVAN PRAMAAN CERTIFICATE',
      
      },
      {
        service_name: ' PAN CARD AADHAAR LINK',
      
      },
      {
        service_name: ' UDYAM REGISTRATION',
      
      },
      {
        service_name: ' GST REGISTRATION',
      
      },
      {
        service_name: '  INCOME TAX RETURN',
      
      },
      {
        service_name: '  MOBILE RECHARGE',
      
      },
      {
        service_name: '  DTH RECHARGE',
      
      },
      {
        service_name: 'FASTAG RECHARGE',
      
      },
      {
        service_name: ' POSTPAID BILL PAYMENT',
      
      },
      {
        service_name: ' BROADBAND BILL PAYMENT',
      
      },
      {
        service_name: ' ELECTRICITY BILL PAYMENT',
      
      },
      {
        service_name: 'GASS CYLINDER BOOKING',
      
      },
      {
        service_name: '  CREDIT CARD BILL PAYMENT',
      
      },
      {
        service_name: ' VEHICLE BORDER TAX PAYMENT',
      
      },
      {
        service_name: ' ROAD TAX PAYMENT',
      
      },
      {
        service_name: '  VEHICLE OWNERSHIP CHANGE',
      
      },
      {
        service_name: ' DUPLICATE RC APPLY',
      
      },
      {
        service_name: ' VEHICLE INSURANCE',
      
      },
      {
        service_name: ' HEALTH INSURANCE',
      
      },
      {
        service_name: '  LIFE INSURANCE',
      
      },
      {
        service_name: 'INSURANCE PREMIUM',
      
      },
      {
        service_name: '  LOAN PAYMENT',
      
      },
      {
        service_name: ' PM KISHAN',
      
      },
      {
        service_name: 'NATIONAL PENSION SYSTEM (NPS)',
      
      },
      {
        service_name: ' ATAL PENSION YOJNA (APY)',
      
      },
      {
        service_name: ' KISHAN CREDIT CARD',
      
      },
      {
        service_name: ' DEMAT ACCOUNT OPENING',
      
      },
      {
        service_name: ' PRADHAN MANTRI JAN DHAN YOJNA ACCOUNT OPENING',
      
      },
      {
        service_name: 'CASH DEPOSIT',
      
      },
      {
        service_name: ' CASH WITHDRAWAL',
      
      },
      {
        service_name: 'PF ',
      
      },
      {
        service_name: ' ONLINE FORM FILL UP',
      },
      {
        service_name: ' SCHOOL, COLLEGE ADMISSION',
      },
      {
        service_name: ' eStamp Paper',
      },
      {
        service_name: ' Affidavit',
      },
      {
        service_name: '  Rent Agreement',
      },
      {
        service_name: ' General Agreement',
      },
      {
        service_name: '  CIBIL REPORT',
      },
      {
        service_name: '  BASIC COMPUTER COURSE',
      },
      {
        service_name: 'AIRTEL PAYMENTS BANK ACCOUNT OPENING',
      },
      {
        service_name: 'AXIS BANK ZERO BALANCE ACCOUNT OPENING',
      },
      {
        service_name: ' KOTAK 811 ZERO BALANCE ACCOUNT OPENING',
      },
      {
        service_name: '  AADHAAR DOWNLOAD WITHOUT MOBILE NUMBER LINK',
      },
      
    
    
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      btn
      data={data}
    />
  );
}

export default DatatablePage;