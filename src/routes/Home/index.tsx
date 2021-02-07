import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import scss from './styles.module.scss'

const Home = () => {
  const { t } = useTranslation('home')
  const history = useHistory()

  const onClick = () => {
    history.push('/dashboard')
  }

  return <section className={scss['m-homepage']} >
    <div className={' w-screen h-screen flex justify-center bg-black bg-opacity-70'}>
      <div className='container'>
        <Box className='rounded p-4 text-left mt-32'>
          <Typography variant='h4' className='font-bold mb-4 text-white' >
            {t('title')}
          </Typography>
          <Typography variant='body1' className='mb-4 text-white max-w-md'>
            {t('subtitle')}
          </Typography>
          <Button type='button' onClick={onClick} variant="contained" color="primary" className='text-white'>Go to dashboard</Button>
        </Box>

        <Box className='flex flex-col items-end rounded p-4 text-right mt-32'>
          <Typography align='right' variant='h4' className='font-bold mb-4 text-white' >
            {t('title')}
          </Typography>
          <Typography align='right' variant='body1' className='mb-4 text-white max-w-md'>
            {t('subtitle')}
          </Typography>
          <Button type='button' onClick={onClick} variant="contained" color="primary" className='text-white'>Go to dashboard</Button>
        </Box>
      </div>
    </div>
  </section >
}

export default Home
