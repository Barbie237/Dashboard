export const userInputs = [
    {
        iduser: 1,
        name: "userName",
        label: "Username",
        type: "text",
        placeholder: "anne1",
        required:"Veuillez saisir le nom"
    },
    {
        iduser: 2,
        name: "firstnameAndLastName",
        label: "Nom et prenom",
        type: "text",
        placeholder: "Anne Barbara",

    },
    {
        iduser: 3,
        name: "birthday",
        label: "Date de Naissance",
        type: "date",
        placeholder: "12/10/2001"
    },
    {
        id: 4,
        label: "Sexe",
        name: "sex",
        type: "text",
        placeholder: "F"
    },
    {
        id: 5,
        name: "phone",
        label: "Téléphone",
        type: "text",
        placeholder: "+237 655053199"
    },
    {
        id: 6,
        name: "address",
        label: "Adresse",
        type: "text",
        placeholder: "Tsinga, Yaoundé"
    },
    {
        id: 7,
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "annebarbara@gmail.com"
    },
    {
        id: 8,
        name: "role",
        label: "Role",
        type: "text",
        placeholder: "Membre"
    },
    {
        id: 9,
        name: "passrword",
        label: "Password",
        type: "password"
    }

];


export const budgetInputs = [
  {
    idBudget: 1,
    label: "intitulé Budget",
    type: "text",
    placeholder: "Budget Updated"
  },
  {
    idBudget:2,
    label: "Montant",
    type: "number",
    placeholder: 20000
  }

    /*{
      idBudget: 1,
      intituléBudget: "25 000 FRS",
      status: "active"
    },
    {
      idBudget: 2,
      intituléBudget: "30 000 FRS",
      status: "active"
    }, 
    {
      idBudget: 3,
      intituléBudget: "10 000",
      status: "passive"
    }*/

];

 export const motifInputs = [
  {
    idmotif:1,
    label: "nommotif",
    type:"text",
    placeholder:"Dimes"
  },
  {
    idmotif: 2,
    label: "nature",
    type:"text",
    placeholder:"10%"
  }
];

export const versementInputs = [
  {
    idvers:1,
    label:"ID User",
    type:"entier",
    placeholder:11
  },
  {
    idvers:2,
    label:"ID Budget",
    type:"entier",
    placeholder:111
  },
  {
    idvers:3,
    label:"Reference",
    type:"text",
    placeholder:"paiement Cash"
  },
  {
    idvers:4,
    label:"Moyen paiement",
    type:"text",
    placeholder:"Orange Money"
  }, 
  {
    idvers:5,
    label:"Montant",
    type:"number",
    placeholder:50000
  }
]