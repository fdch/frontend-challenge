import { makeStyles } from '@mui/styles';
import { ReactElement, useEffect, useState } from 'react';
import { getMonthName } from './UserDashboardView';
import dummyData from '../../../dummyData.json';


const useStyles = makeStyles(() => ({
  dashboardWrapper: {
      width: '100%',
  },
  table: {
    width: '100%',
    background: 'lightgrey',
    padding: '10px',
    borderRadius: '10px'
  },
  tableHead: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  tableBody: {
    width: '100%'
  }
}));

export const UserHistoryView = (): ReactElement => {
    const classes = useStyles();
    const [hist, setHist] = useState<{ 
        date: string,
        reward: number,
        savings: number;
    }[]>([]);
  
    useEffect(() => {
      async function fetchData() {

        const rewardHistory = dummyData.HISTORY_DATA;
  
        const hist = rewardHistory.map((x) => {
          return {
            date: `${getMonthName(x.month)} ${x.year}`,
            reward: x.reward,
            savings: x.co2_saved
          };
        });
  
        setHist(hist);
      }
  
      fetchData();
    }, []);
  
    return (
      <div className={classes.dashboardWrapper}>
        <table className={classes.table}>
            <thead className={classes.tableHead}>
            <tr>         
                <td>Date</td>
                <td>Reward</td>
                <td>CO2 Savings</td>
            </tr>
            </thead>
            <tbody className={classes.tableBody}>
                {hist.map((x, i) => {
                return <tr key={i+"-trip"}>
                         <td>{x.date}</td>
                         <td>{x.reward}</td>
                         <td>{x.savings}</td>
                       </tr>;
              })}
            </tbody>
        </table>
      </div>
    );
  };
  
