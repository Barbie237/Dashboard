import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const List = () => {
  const rows = [ 
    {
      matricule: 111,
      idBudget: "121A",
      nom: "ANNA",
      //img: "../../img/img1.jpg",
      prenom: "Barbie",
      dateNaiss: "12/10/01",
      sexe: "F",
      tel: 655053115,
      situationMatrimoniale: "Celibataire",
      ville: "Yaoundé",
      quartier: "Tsinga",
      commentaire: "Nice",
      Email: "annebarbaratebugmail.com"
    },
    {
      matricule: 112,
      idBudget: "121B",
      nom: "TEBU",
      //img: "../../img/img1.jpg",
      prenom: "Barbara",
      dateNaiss: "12/10/02",
      sexe: "F",
      tel: 655053111,
      situationMatrimoniale: "Celibataire",
      ville: "Yaoundé",
      quartier: "Ngousso",
      commentaire: "Cute",
      Email: "annebarbaratebu1gmail.com"
    }
    ];

  return  <TableContainer component={Paper} className="table">
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>        
        <TableCell className="tableCell">matricule</TableCell>
        <TableCell className="tableCell">idBudget</TableCell>
        <TableCell className="tableCell">nom</TableCell>
        <TableCell className="tableCell">prenom</TableCell>
        <TableCell className="tableCell">Date de naissance</TableCell>
        <TableCell className="tableCell">Sexe</TableCell>
        <TableCell className="tableCell">téléphone</TableCell>
        <TableCell className="tableCell">Situation Matrimoniale</TableCell>
        <TableCell className="tableCell">Ville</TableCell>
        <TableCell className="tableCell">quartier</TableCell>
        <TableCell className="tableCell">Commentaire</TableCell>
        <TableCell className="tableCell">Email</TableCell>

     </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.matricule}>
          <TableCell className="tableCell">{row.matricule}</TableCell>
          <TableCell className="tableCell">{row.idBudget}</TableCell>
          <TableCell className="tableCell">
          <div className="cellWrapper">
           <img src={row.img} alt="" className="image"/>
           {row.nom}
          </div> 
          </TableCell>
          <TableCell className="tableCell">{row.prenom}</TableCell>
          <TableCell className="tableCell">{row.dateNaiss}</TableCell>
          <TableCell className="tableCell">{row.sexe}</TableCell>
          <TableCell className="tableCell">{row.tel}</TableCell>
          <TableCell className="tableCell">{row.situationMatrimoniale}</TableCell>
          <TableCell className="tableCell">{row.ville}</TableCell>
          <TableCell className="tableCell">{row.quartier}</TableCell>
          <TableCell className="tableCell">{row.commentaire}</TableCell>
          <TableCell className="tableCell">{row.Email}</TableCell>

        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
}

export default List

