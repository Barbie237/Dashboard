export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

/*export const userColumns = [
    { 
        field: "iduser", 
        headerName: "ID User", 
        width: 100
    }, 
    {
    field:"username", 
    headerName:"Username", 
    width: 200, 
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username} 
            </div>
        );
        }
    },
    { 
    field: "nomPrenom", 
    headerName: "Nom et Prenom", 
    width: 300
    },
    {
    field: "dateNaiss", 
    headerName: "Date de Naissance", 
    width: 150
    },
     {
    field: "sexe", 
    headerName: "Sexe", 
    width: 90   
    }, 
    {
    field: "tel", 
    headerName: "Téléphone", 
    type:"number",
    width: 100   
    },
    {
    field: "adresse", 
    headerName: "Adresse", 
    width: 200   
    },
    {
    field: "email", 
    headerName: "Email", 
    width: 200
    },
    {
    field: "role", 
    headerName: "Role", 
    width: 180   
    },
    {
    field: "password", 
    headerName: "Password", 
    width: 160   
    },
    {
    field: "status", 
    headerName: "Status", 
    width: 100,   
    renderCell: (params) => {
        return (
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
        );
    }
}
];*/
