export const userColumns = [
    {
        field: "id",
        headerName: "ID User",
        width: 75
    },
    {
        field: "user",
        headerName: "Username",
        width: 150,
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
        width: 150
    },
    {
        field: "dateNaiss",
        headerName: "Date de Naissance",
        width: 150
    },
    {
        field: "sexe",
        headerName: "Sexe",
        width: 50
    },
    {
        field: "tel",
        headerName: "Téléphone",
        type: "number",
        width: 125
    },
    {
        field: "adresse",
        headerName: "Adresse",
        width: 200
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
];


export let userRows = [
    {id: 1, 
    username:"Pintor1", 
    img:"/img/img1.jpg",
    nomPrenom:"pintor Paul", 
    dateNaiss:"09/05/2000", 
    sexe:"M", 
    tel:686053112, 
    adresse:"Cicam, Douala", 
    email:"pintor@gmail.com", 
    role:"Gestionnaire", 
    password:"pinT@r&",
    status: "passive"
    },
    {
    id: 2, 
    username:"Joo1", 
    img:"/img/img1.jpg",
    nomPrenom:"Joo Joleen", 
    dateNaiss:"23/12/1998", 
    sexe:"F", 
    tel:667053112, 
    adresse:"Ngousso, Yaoundé", 
    email:"Joo@gmail.com", 
    role:"Membre", 
    password:"jo@56&A",
    status:"active"
    }, 
    {
    id: 3, 
    username:"Anne1", 
    img:"/img/img1.jpg",
    nomPrenom:"Anne Barbara", 
    dateNaiss:"23/09/2001", 
    sexe:"F", 
    tel:655053112, 
    adresse:"Tsinga, Yaoundé", 
    email:"annebarbara@gmail.com", 
    role:"Admin", 
    password:"Teb's_237",
    status:"pending"
    },
    {
    id: 4, 
    username:"youyou_1", 
    img:"/img/img1.jpg",
    nomPrenom:"Youyou Tetena", 
    dateNaiss:"22/02/2008", 
    sexe:"F", 
    tel:655053112, 
    adresse:"Tsinga, Yaoundé", 
    email:"youyou@gmail.com", 
    role:"Membre", 
    password:"Y&uyou1",
    status:"active"
    }, 
    {
    id: 5, 
    username:"tinTo", 
    img:"/img/img1.jpg",
    nomPrenom:"Tinto Claude", 
    dateNaiss:"20/01/2002", 
    sexe:"M", 
    tel:681053112, 
    adresse:"Essos, Yaoundé", 
    email:"tinto@gmail.com", 
    role:"Membre", 
    password:"Tinto1@2",
    status:"pending"
    }  
];

export const addUser = (data) => {
    userRows = [{
        id: userRows.length + 1,
        username: data.username,
        img: data.img,
        nomPrenom: data.nomPrenom,
        dateNaiss: data.dateNaiss,
        sexe: data.sexe,
        tel: data.tel,
        adresse: data.adresse,
        status: data.status
    },...userRows];
};

export const findUserById = id => userRows.find(user => user.id === id);
