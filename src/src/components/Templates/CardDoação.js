import { Typography } from '@mui/material';
import { Link, Card, AspectRatio, CardOverflow, Button } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const CardTemplateDoacao = ({doador, endereco, alimento, quantidade}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
        {/* Primeiro Card */}
        <Card
        onClick={() => setOpen(true)}
        variant="contained" //contained outlined
        orientation="horizontal"
        sx={{
            width: '600px',
            gap: 2,
            bgcolor: 'white',
            '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
        }}>
            <CardOverflow>
                <AspectRatio ratio="1" sx={{ width: '165px' }}>
                    <img
                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                    srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                    loading="lazy"
                    alt=""/></AspectRatio>
            </CardOverflow>
            <div>
                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5} sx={{color:'darkorange', fontSize:'25px'}}>
                    {doador}
                </Typography>
                <Typography display={'flex'} justifyContent={'start'} gap={5} fontSize="sm" aria-describedby="card-description" mb={1}>
                    <Link
                        overlay
                        underline="none"
                        href="#interactive-card"
                        sx={{ color: 'text.tertiary' }}>
                        {endereco}
                    </Link>
                </Typography>
                <Typography display={'flex'} justifyContent={'center'} gap={15} fontSize="sm" aria-describedby="card-description" mb={1}>
                    <Typography>Alimento: {alimento}</Typography>
                    <Typography>Quantidade: {quantidade}</Typography>
                </Typography>
            </div>
            <CardOverflow
            variant="soft"
            color="neutral"
            sx={{
            display:'flex'}}>
                <Button color='neutral' variant='plain'><SearchIcon></SearchIcon></Button>
            </CardOverflow>
        </Card>
        </>
    )
}