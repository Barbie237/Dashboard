export const userInputs = [
    { 
        iduser: 1, 
        label: "Username", 
        type: "text",
        placeholder: "anne1"
    }, 
    {
    iduser:2, 
    label:"Nom et prenom", 
    type: "text",
    placeholder:"Anne Barbara"
    },
    { 
    iduser: 3, 
    label: "Date de Naissance", 
    type: "text",
    placeholder:"12/10/2001"
    },
     { 
    id: 4, 
    label: "Sexe", 
    type: "text",
    placeholder:"F"
    },
    {
    id: 5, 
    label: "Téléphone", 
    type: "text",
    placeholder: "+237 655053199"  
    },
    {
    id: 6, 
    label: "Adresse", 
    type: "text",
    placeholder:"Tsinga, Yaoundé"   
    },
    {
    id: 7, 
    label: "Email", 
    type: "email",
    placeholder:"annebarbara@gmail.com"  
    }, 
    {
    id: 8, 
    label: "Role", 
    type: "text",
    placeholder:"Membre"   
    }, 
    {
    id: 9, 
    label: "Password", 
    type: "text"   
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