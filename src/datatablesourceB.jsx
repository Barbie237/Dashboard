export const userColumns = [
    { field: 'id', headerName: 'ID USER', width: 70 },
    { field: 'iduser', headerName: 'ID BUDGET', width: 130 },
    { field: 'intituleBudget', headerName: 'Intitulé Budget', width: 130 },
    { field: 'dateD', headerName: 'Date Debut',width: 90},
    { field: 'dateF', headerName: 'Date Fin', type: 'date',width: 90},
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
  ];
  

  export const userRows = [
    {   id: 1,
        iduser: 1,
        intituleBudget: 'Budget 10', 
        dateD: "10/04/2022",
        dateF: "10/12/2022",
        status: "pending"
    },
    {   id: 2,
        iduser: 2,
        intituleBudget: 'Lannister', 
        dateD: "12/04/2022",
        dateF: "12/12/2022",
        status: "active"
    },
    {   id: 3,
        iduser: 3,
        intituleBudget: 'Lannister', 
        dateD: "15/04/2022",
        dateF: "15/12/2022",
        status: "passive" 
    },
    {   id: 4,
        iduser: 4,
        intituleBudget: 'Stark',
        dateD: "19/04/2022",
        dateF: "19/12/2022",
        status: "pending" 
    },
    {   id: 5,
        iduser: 5,
        intituleBudget: 'Targaryen', 
        dateD: "21/04/2022",
        dateF: "21/12/2022",
        status: "active" 
    },
    {   id: 6,
        iduser: 6,
        intituleBudget: 'Melisandre', 
        dateD: "23/04/2022",
        dateF: "23/12/2022",
        status: "passive"
    },
    {   id: 7,
        iduser: 7,
        intituleBudget: 'Clifford', 
        dateD: "26/04/2022",
        dateF: "26/12/2022",
        status: "passive"
    },
    {   id: 8,
        iduser: 8,
        intituleBudget: 'Frances', 
        dateD: "28/04/2022",
        dateF: "28/12/2022",
        status: "pending"
    },
    {   id: 9,
        iduser: 9,
        intituleBudget: 'Roxie',
        dateD: "30/04/2022",
        dateF: "30/12/2022",
        status: "active"
    },
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
