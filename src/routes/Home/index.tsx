
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation('home')

  return <section>
    <h1>
      {t('title')}
    </h1>
  </section>
}

export default Home
