import { 
    Box, 
    Typography, 
    Button, 
    Stack,
    Tabs,
    Tab,
} from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CadastroInstituição from '../components/CadastroInstituição';
import AdmDoação from '../components/AdmDoação';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export const Administração = () => {
    
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
      <Box 
      sx={{pt:'40px'}} 
      display={'flex'} 
      flexDirection={'column'} 
      alignItems={'center'}
      >
        <Typography  
        variant='h2'
        >Administração</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
                <Tab label="Gerenciamento de Retiradas" {...a11yProps(0)} />
                <Tab label="Doações Coletadas" {...a11yProps(1)} />
                <Tab label="Doações Não Efetuadas" {...a11yProps(2)} />
                <Tab label="Cadastro de Doação" {...a11yProps(3)} />
                <Tab label="Cadastro de Instituições" {...a11yProps(4)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
            <AdmDoação/>
        </TabPanel>
        <TabPanel value={value} index={4}>
            <CadastroInstituição/>
        </TabPanel>
      </Box>
    )
}

export default Administração;
